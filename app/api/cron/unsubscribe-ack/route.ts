import { sendNextUnsubscribeAcknowledgement } from "@/lib/unsubscribe/send-ack";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  let sent = 0;
  let failed = 0;
  try {
    // Small bounded batch: deliberately designed for low-volume outreach.
    for (let i = 0; i < 10; i += 1) {
      const result = await sendNextUnsubscribeAcknowledgement();
      if (result === "empty") break;
      if (result === "sent") sent += 1;
      if (result === "failed") failed += 1;
    }
    return Response.json({ sent, failed });
  } catch {
    return new Response("Acknowledgment job failed", { status: 503 });
  }
}
