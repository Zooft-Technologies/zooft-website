import { NextRequest, NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .trim();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { type, fullName, email, phone, company, subject, message, inquiryType } = body;

    if (!type || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (type === "contact") {
      if (!fullName || !subject || !message) {
        return NextResponse.json(
          { error: "Missing required contact form fields" },
          { status: 400 }
        );
      }

      if (fullName.length > 200 || subject.length > 300 || message.length > 5000) {
        return NextResponse.json(
          { error: "Input exceeds maximum allowed length" },
          { status: 400 }
        );
      }
    }

    const sanitized = {
      type: sanitize(String(type)),
      fullName: fullName ? sanitize(String(fullName)) : undefined,
      email: sanitize(String(email)),
      phone: phone ? sanitize(String(phone)) : undefined,
      company: company ? sanitize(String(company)) : undefined,
      subject: subject ? sanitize(String(subject)) : undefined,
      message: message ? sanitize(String(message)) : undefined,
      inquiryType: inquiryType ? sanitize(String(inquiryType)) : undefined,
    };

    // TODO: Wire up an email provider (e.g., Resend, SendGrid, Nodemailer)
    console.log("Email submission received:", sanitized);

    return NextResponse.json({
      success: true,
      message: "Message received successfully",
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
