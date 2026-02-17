import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { type, fullName, email, phone, company, subject, message, inquiryType, to } = body;

    if (!type || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
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
    }

    // TODO: Wire up an email provider (e.g., Resend, SendGrid, Nodemailer)
    // For now, log the submission and return success
    console.log("Email submission received:", {
      type,
      fullName,
      email,
      phone,
      company,
      subject,
      message,
      inquiryType,
      to,
    });

    return NextResponse.json({
      success: true,
      message: "Message received successfully",
    });
  } catch (error) {
    console.error("Send email error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
