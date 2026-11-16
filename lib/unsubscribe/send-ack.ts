import { neon } from "@neondatabase/serverless";
import nodemailer from "nodemailer";

type AckOutcome = "empty" | "sent" | "failed";

// This helper runs SERVER-SIDE only. Never expose database or SMTP secrets
// in NEXT_PUBLIC_ environment variables.
export async function sendNextUnsubscribeAcknowledgement(
  tokenHash: string | null = null,
): Promise<AckOutcome> {
  const databaseUrl = process.env.UNSUBSCRIBE_DATABASE_URL;
  if (!databaseUrl) throw new Error("UNSUBSCRIBE_DATABASE_URL missing");

  const sql = neon(databaseUrl);
  const rows = await sql`
    SELECT ack_id, recipient
    FROM public.claim_unsubscribe_ack(${tokenHash})
  `;

  const job = rows[0] as { ack_id: string; recipient: string } | undefined;
  if (!job) return "empty";

  let delivered = false;
  try {
    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM;
    const port = Number(process.env.SMTP_PORT ?? "587");

    if (!host || !user || !pass || !from || ![465, 587].includes(port)) {
      throw new Error("Unsubscribe SMTP not configured");
    }

    const transport = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      requireTLS: port === 587,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
      auth: { user, pass },
    });

    const result = await transport.sendMail({
      from,
      to: job.recipient,
      subject: "Confirmation de désinscription — Reciproque",
      text: [
        "Bonjour,",
        "",
        "Nous confirmons l'enregistrement de votre demande de désinscription.",
        "Vous ne recevrez plus de messages commerciaux de Reciproque à cette adresse.",
        "",
        "Bien cordialement,",
        "Reciproque",
      ].join("\n"),
    });

    // SMTP acceptance does not guarantee inbox delivery.
    delivered = result.accepted.some((email) => {
      const address = typeof email === "string" ? email : email.address;

      return address.toLowerCase() === job.recipient.toLowerCase();
    });

    console.info("[UNSUBSCRIBE SMTP RESULT]", {
      acceptedCount: result.accepted.length,
      rejectedCount: result.rejected?.length ?? 0,
      pendingCount: result.pending?.length ?? 0,
      recipientAccepted: delivered,
    });
  } catch (error) {
    const smtpError = error as {
      name?: string;
      code?: string;
      responseCode?: number;
      command?: string;
    };

    console.error("[UNSUBSCRIBE SMTP ERROR]", {
      name: smtpError?.name ?? "unknown",
      code: smtpError?.code ?? "unknown",
      responseCode: smtpError?.responseCode ?? null,
      command: smtpError?.command ?? null,
      configuration: {
        host: !!process.env.SMTP_HOST,
        port: !!process.env.SMTP_PORT,
        user: !!process.env.SMTP_USER,
        password: !!process.env.SMTP_PASSWORD,
        from: !!process.env.SMTP_FROM_EMAIL,
      },
    });

    delivered = false;
  }

  // If the completion query fails, the lease expires and cron can retry.
  await sql`
    SELECT public.finish_unsubscribe_ack(${job.ack_id}::uuid, ${delivered})
  `;
  return delivered ? "sent" : "failed";
}
