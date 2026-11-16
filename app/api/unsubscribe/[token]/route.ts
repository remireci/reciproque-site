import { createHash } from "node:crypto";
import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Context = {
  params: Promise<{ token: string }>;
};

function redirectTo(request: Request, pathname: string) {
  const response = NextResponse.redirect(new URL(pathname, request.url), 303);

  response.headers.set("Cache-Control", "no-store");
  response.headers.set("Referrer-Policy", "no-referrer");

  return response;
}

export async function POST(request: Request, { params }: Context) {
  // The confirmation form must originate from
  // this website, not another website.

  const { token } = await params;

  if (!/^[A-Za-z0-9_-]{43}$/.test(token)) {
    return redirectTo(request, "/unsubscribe/invalid");
  }

  const connectionString = process.env.UNSUBSCRIBE_DATABASE_URL;

  if (!connectionString) {
    console.error("Unsubscribe database not configured");

    return new Response("Service momentanément indisponible.", { status: 503 });
  }

  const tokenHash = createHash("sha256").update(token, "utf8").digest("hex");

  try {
    const sql = neon(connectionString);

    // Only the permitted PostgreSQL function
    // can be called by this database role.
    const result = await sql`
      SELECT public.apply_unsubscribe_token(
        ${tokenHash}
      ) AS accepted
    `;

    if (result[0]?.accepted !== true) {
      return redirectTo(request, "/unsubscribe/invalid");
    }
  } catch (error) {
    // Don't log the token or the recipient's email.
    console.error(
      "Unsubscribe database operation failed:",
      error instanceof Error ? error.message : "Unknown database error",
    );

    return new Response(
      "La désinscription n'a pas pu être enregistrée. Veuillez réessayer.",
      { status: 503 },
    );
  }

  return redirectTo(request, "/unsubscribe/confirmed");
}
