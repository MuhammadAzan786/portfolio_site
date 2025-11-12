import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/contact";

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    const { name, email, subject, message } = validatedData;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>", // Update with your verified domain
      to: [process.env.CONTACT_EMAIL || "your.email@example.com"], // Your email address
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>

            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0; border-top: none;">
              <div style="margin-bottom: 20px;">
                <h2 style="color: #667eea; margin-bottom: 10px; font-size: 18px;">Contact Details</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 100px;">Name:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Email:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">
                      <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Subject:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${subject}</td>
                  </tr>
                </table>
              </div>

              <div>
                <h2 style="color: #667eea; margin-bottom: 10px; font-size: 18px;">Message</h2>
                <div style="background: white; padding: 20px; border-radius: 5px; border: 1px solid #e0e0e0; white-space: pre-wrap; word-wrap: break-word;">
                  ${message}
                </div>
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #666; font-size: 12px;">
                <p>This email was sent from your portfolio contact form.</p>
                <p>You can reply directly to <a href="mailto:${email}" style="color: #667eea;">${email}</a></p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    // Handle validation errors
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
