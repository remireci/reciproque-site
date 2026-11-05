import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Service = "assistance" | "reseaux" | "software";

const SUBJECTS: Record<Service, string> = {
  assistance: "Demande d'assistance informatique",
  reseaux: "Demande réseau ou infrastructure",
  software: "Software development enquiry",
};

const getString = (value: unknown): string =>
  typeof value === "string" ? value.trim() : "";

function isValidEmail(email: string): boolean {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function invalid(message: string) {
  return NextResponse.json({ message }, { status: 400 });
}

export async function POST(request: Request) {
  // Only accept JSON submissions.
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return NextResponse.json(
      { message: "Unsupported content type" },
      { status: 415 },
    );
  }

  // Reject oversized requests.
  const declaredSize = Number(request.headers.get("content-length") || 0);

  if (declaredSize > 12000) {
    return NextResponse.json({ message: "Request too large" }, { status: 413 });
  }

  let input: Record<string, unknown>;

  try {
    const raw = await request.text();

    if (raw.length > 12000) {
      return NextResponse.json(
        { message: "Request too large" },
        { status: 413 },
      );
    }

    const parsed: unknown = JSON.parse(raw);

    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return invalid("Invalid request");
    }

    input = parsed as Record<string, unknown>;
  } catch {
    return invalid("Invalid JSON");
  }

  // Honeypot: silently ignore bot submissions.
  if (getString(input.website)) {
    return NextResponse.json({ message: "Message received" }, { status: 200 });
  }

  const service = getString(input.service);
  const name = getString(input.name);
  const email = getString(input.email);
  const phone = getString(input.phone);
  const commune = getString(input.commune);
  const message = getString(input.message);

  // Validate everything on the server.
  if (!Object.hasOwn(SUBJECTS, service)) {
    return invalid("Invalid service");
  }

  if (name.length < 2 || name.length > 100) {
    return invalid("Invalid name");
  }

  if (!isValidEmail(email)) {
    return invalid("Invalid email");
  }

  if (phone.length > 40 || commune.length > 100) {
    return invalid("Invalid contact details");
  }

  if (message.length < 10 || message.length > 4000) {
    return invalid("Invalid message");
  }

  const selectedService = service as Service;
  const subject = SUBJECTS[selectedService];

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const smtpPort = Number(process.env.SMTP_PORT || "465");

  const fromEmail = process.env.SMTP_FROM_EMAIL || "info@reciproque.eu";

  const ownerEmail = process.env.CONTACT_TO_EMAIL || "info@reciproque.eu";

  if (
    !smtpHost ||
    !smtpUser ||
    !smtpPassword ||
    !Number.isInteger(smtpPort) ||
    smtpPort < 1
  ) {
    console.error("SMTP configuration is incomplete");

    return NextResponse.json(
      { message: "Email service unavailable" },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    requireTLS: smtpPort === 587,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  const internalMessage = [
    `Service: ${subject}`,
    "",
    `Nom: ${name}`,
    `Email: ${email}`,
    `Téléphone: ${phone || "Non renseigné"}`,
    `Commune: ${commune || "Non renseignée"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const confirmationSubject =
    selectedService === "software"
      ? "Reciproque — we received your enquiry"
      : "Reciproque — votre demande a bien été reçue";

  const confirmationText =
    selectedService === "software"
      ? [
          `Hello ${name},`,
          "",
          "Thank you for contacting Reciproque.",
          "Your enquiry has been received.",
          "We will get back to you as soon as possible.",
          "",
          "Reciproque",
          "info@reciproque.eu",
        ].join("\n")
      : [
          `Bonjour ${name},`,
          "",
          "Merci d'avoir contacté Reciproque.",
          "Votre demande a bien été reçue.",
          "Nous vous répondrons dès que possible.",
          "",
          "Reciproque",
          "info@reciproque.eu",
        ].join("\n");

  try {
    // First: deliver the enquiry to Reciproque.
    await transporter.sendMail({
      from: {
        name: "Reciproque",
        address: fromEmail,
      },
      to: ownerEmail,
      replyTo: email,
      subject: `[Reciproque] ${subject}`,
      text: internalMessage,
    });
  } catch {
    console.error("Contact notification delivery failed");

    return NextResponse.json(
      { message: "Email delivery failed" },
      { status: 500 },
    );
  }

  // Second: send the customer confirmation.
  // A confirmation failure must not cause the visitor
  // to resubmit an already delivered enquiry.
  try {
    await transporter.sendMail({
      from: {
        name: "Reciproque",
        address: fromEmail,
      },
      to: email,
      replyTo: fromEmail,
      subject: confirmationSubject,
      text: confirmationText,
    });
  } catch {
    console.error("Customer confirmation delivery failed");
  }

  return NextResponse.json({ message: "Message sent" }, { status: 200 });
}
