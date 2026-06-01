import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations/contact';
import nodemailer from 'nodemailer';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid form data', issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;

    const smtpConfigured =
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      !process.env.SMTP_PASS.includes('your-16-char');

    if (!smtpConfigured) {
      // Dev fallback: log to console so forms still "work" locally
      console.log('[Contact Form — SMTP not configured]', { name, email, subject, message });
      return NextResponse.json({ success: true });
    }

    const transporter = buildTransporter();

    // Verify connection before trying to send
    await transporter.verify();

    const safeHtml = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0f1117;padding:32px;border-radius:12px;border:1px solid #1e293b">
        <h2 style="color:#0ea5e9;margin:0 0 24px">New message from your portfolio</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:10px 0;color:#64748b;width:80px;vertical-align:top">From</td>
            <td style="padding:10px 0;color:#e2e8f0;font-weight:600">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#64748b;vertical-align:top">Email</td>
            <td style="padding:10px 0;color:#e2e8f0">${escapeHtml(email)}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#64748b;vertical-align:top">Subject</td>
            <td style="padding:10px 0;color:#e2e8f0">${escapeHtml(subject)}</td>
          </tr>
        </table>
        <hr style="border:none;border-top:1px solid #1e293b;margin:20px 0"/>
        <p style="color:#64748b;font-size:12px;margin:0 0 12px;text-transform:uppercase;letter-spacing:.08em">Message</p>
        <p style="color:#e2e8f0;white-space:pre-wrap;line-height:1.7;margin:0">${escapeHtml(message)}</p>
        <hr style="border:none;border-top:1px solid #1e293b;margin:24px 0"/>
        <p style="color:#334155;font-size:11px;margin:0">
          Sent via portfolio contact form — reply directly to this email to respond to ${escapeHtml(name)}.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL ?? process.env.SMTP_USER,
      replyTo: `"${name}" <${email}>`,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
      html: safeHtml,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error('[Contact API]', err);

    // Surface auth errors clearly so config issues are obvious in logs
    if (err instanceof Error && err.message.includes('535')) {
      console.error('[Contact API] Gmail authentication failed — check your App Password in .env.local');
      return NextResponse.json(
        { error: 'Email delivery failed. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
