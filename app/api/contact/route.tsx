import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";

interface EmailData {
  email: string;
  subject: string;
  message: string;
}

// Function to generate HTML content for the email
function generateEmailContent(data: EmailData) {
  const styles = `
    .section { margin-bottom: 25px; }
    .category { font-weight: bold; margin-bottom: 5px; }
  `;

  const htmlReci = render(
    <html>
      <head>
        <style>{styles}</style>
      </head>
      <body>
        <div>
          <div className="section">
            <h2>Potentiële klant</h2>
          </div>
          <div className="section">
            <p>Beste réciproque,</p>
            <p>Via de portfolio site is een vraag binnengekomen.</p>
            <p>
              <u>
                <strong>Dit zijn de contactgegevens van de kandidaat:</strong>
              </u>
            </p>
            <p>
              <strong>E-mail:</strong> {data.email}
            </p>
            <p>
              <strong>Subject:</strong> {data.subject}
            </p>
            <p>
              <strong>Message:</strong> {data.message}
            </p>
          </div>
        </div>
      </body>
    </html>,
  );

  const htmlCustomer = render(
    <html>
      <head>
        <style>{styles}</style>
      </head>
      <body>
        <div>
          <div className="section">
            <h2>Your message has been received well.</h2>
          </div>
          <div className="section">
            <p>Hi there,</p>
            <p>
              Thank you for your interest in réciproque. We will contact you as
              soon as possible.
            </p>
          </div>
          <div className="section">
            <p>This is your request:</p>
            <p>
              <strong>Subject: </strong>
            </p>
            <p>
              <i>{data.subject}</i>
            </p>
            <p>
              <strong>Message: </strong>
            </p>
            <p>
              <i>{data.message}</i>
            </p>
          </div>
          <div className="section">
            <p>
              <u>
                <strong>réciproque</strong>
              </u>
            </p>
            <p>info@reciproque.eu</p>
            <p>+32 499 167 510</p>
          </div>
        </div>
      </body>
    </html>,
  );
  return { htmlReci, htmlCustomer };
}

// Function to send emails
async function sendEmail(data: EmailData) {
  // 1. Await the generation because modern @react-email/render returns Promises
  const { htmlReci, htmlCustomer } = generateEmailContent(data);

  // Resolve both promises into plain HTML strings
  const resolvedHtmlReci = await htmlReci;
  const resolvedHtmlCustomer = await htmlCustomer;

  const smtpOptions = {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || ""),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(smtpOptions);

  try {
    await transporter.verify();
    console.log("Server is ready to take our messages");

    const mailDataCoach = {
      from: {
        name: `Portfolio site`,
        address: "info@reciproque.be",
      },
      replyTo: "",
      to: ["reci.reciproque@gmail.com"],
      subject: "Contact portfolio site",
      html: resolvedHtmlReci, // <-- Pass the resolved string here
    };

    const mailDataClient = {
      from: {
        name: `réciproque`,
        address: "info@reciproque.be",
      },
      replyTo: "",
      to: [data.email],
      subject: "Contact Reciproque",
      html: resolvedHtmlCustomer, // <-- Pass the resolved string here
    };

    // Send mail
    await Promise.all([
      transporter.sendMail(mailDataCoach),
      transporter.sendMail(mailDataClient),
    ]);

    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

// ... Keep your updated sendEmail function exactly as it is ...

export async function POST(req: NextRequest) {
  try {
    const data: EmailData = await req.json();
    await sendEmail(data);
    return NextResponse.json(
      { message: "Email workflow complete" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error in API Contact Route:", error);
    // Explicitly return an RFC-compliant 500 JSON payload instead of an empty network drop
    return NextResponse.json(
      { message: "Internal server mail failure" },
      { status: 500 },
    );
  }
}
