import { Resend } from "resend";
import { NextResponse } from "next/server";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "zenbathroom@yahoo.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Zen Bathroom Website <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { formType, fullname, email, phone, eircode, project } = body as {
    formType?: string;
    fullname?: string;
    email?: string;
    phone?: string;
    eircode?: string;
    project?: string;
  };

  if (!fullname || !email || !phone) {
    return NextResponse.json(
      { error: "Name, email, and phone are required." },
      { status: 400 }
    );
  }

  const subject =
    formType === "project-selection"
      ? `New project inquiry: ${project || "Unknown project"}`
      : "New quote request from website";

  const html = `
    <h2>${escapeHtml(subject)}</h2>
    <p><strong>Name:</strong> ${escapeHtml(fullname)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    ${eircode ? `<p><strong>Eircode:</strong> ${escapeHtml(eircode)}</p>` : ""}
    ${project ? `<p><strong>Selected project:</strong> ${escapeHtml(project)}</p>` : ""}
  `;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to send email:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
