import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        // ✅ Ensure API key exists at RUNTIME (not build time)
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            console.error('RESEND_API_KEY is missing');
            return NextResponse.json(
                { error: 'Email service is not configured' },
                { status: 500 }
            );
        }

        const resend = new Resend(apiKey);

        const body = await request.json();
        const { name, email, message } = body;

        // ✅ Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const fromEmail =
            process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
        const toEmail =
            process.env.RESEND_TO_EMAIL || 'your-email@example.com';

        // ✅ Send email
        const data = await resend.emails.send({
            from: fromEmail,
            to: [toEmail],
            subject: `New Consultation Request from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            New Consultation Request
          </h2>

          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>

          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">
              ${message}
            </p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>This email was sent from the Systems Integration contact form.</p>
            <p>
              Reply to:
              <a href="mailto:${email}" style="color: #f97316;">
                ${email}
              </a>
            </p>
          </div>
        </div>
      `,
        });

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
