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
    const pass = process.env.SMTP_PASSWORD;
    const from = process.env.SMTP_FROM_EMAIL || "info@reciproque.eu";
    const port = Number(process.env.SMTP_PORT || "465");

    const missing = [
      !host && "SMTP_HOST",
      !user && "SMTP_USER",
      !pass && "SMTP_PASSWORD",
      !from && "SMTP_FROM_EMAIL",
    ].filter(Boolean);

    if (missing.length > 0 || ![465, 587].includes(port)) {
      throw new Error(
        `Unsubscribe SMTP configuration invalid: ${
          missing.join(", ") || `unsupported port ${port}`
        }`,
      );
    }

    const transport = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
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
    console.error("[UNSUBSCRIBE SMTP ERROR]", {
      message: error instanceof Error ? error.message : "Unknown error",
      code:
        error && typeof error === "object" && "code" in error
          ? error.code
          : "unknown",
      port: Number(process.env.SMTP_PORT || "465"),
    });

    delivered = false;
  }

  // If the completion query fails, the lease expires and cron can retry.
  await sql`
    SELECT public.finish_unsubscribe_ack(${job.ack_id}::uuid, ${delivered})
  `;
  return delivered ? "sent" : "failed";
}
