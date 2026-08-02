import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactFormSchema, checkRateLimit, sanitizeInput } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    // Rate limit check (5 requests per minute)
    if (!checkRateLimit(ip, 5, 60000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate with Zod
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    // Honeypot check (if filled, it's a bot)
    if (data.honeypot) {
      // Return success to not tip off bots
      return NextResponse.json({ success: true });
    }

    // Sanitize inputs
    const sanitizedData = {
      fullName: sanitizeInput(data.fullName),
      email: sanitizeInput(data.email),
      phone: sanitizeInput(data.phone),
      businessName: sanitizeInput(data.businessName),
      websiteUrl: data.websiteUrl ? sanitizeInput(data.websiteUrl) : undefined,
      service: sanitizeInput(data.service),
      monthlyBudget: sanitizeInput(data.monthlyBudget),
      message: data.message ? sanitizeInput(data.message) : undefined,
    };

    // Check if Turnstile is configured and validate
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret && body.turnstileToken) {
      const turnstileResponse = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `secret=${turnstileSecret}&response=${body.turnstileToken}`,
        }
      );
      const turnstileResult = await turnstileResponse.json();
      if (!turnstileResult.success) {
        return NextResponse.json(
          { error: 'Security verification failed. Please refresh and try again.' },
          { status: 400 }
        );
      }
    }

    // Create email transporter
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;

    // If SMTP is configured, send email
    if (smtpHost && smtpUser && smtpPassword && receiverEmail) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPassword,
        },
      });

      const emailHtml = `
        <h2>New Lead from hirekader.com</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td><td style="padding: 8px; border: 1px solid #ddd;">${sanitizedData.fullName}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;">${sanitizedData.email}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td><td style="padding: 8px; border: 1px solid #ddd;">${sanitizedData.phone}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Business</td><td style="padding: 8px; border: 1px solid #ddd;">${sanitizedData.businessName}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Website</td><td style="padding: 8px; border: 1px solid #ddd;">${sanitizedData.websiteUrl || 'Not provided'}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Service</td><td style="padding: 8px; border: 1px solid #ddd;">${sanitizedData.service}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Budget</td><td style="padding: 8px; border: 1px solid #ddd;">${sanitizedData.monthlyBudget}</td></tr>
          ${sanitizedData.message ? `<tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td><td style="padding: 8px; border: 1px solid #ddd;">${sanitizedData.message}</td></tr>` : ''}
        </table>
      `;

      await transporter.sendMail({
        from: `"hirekader.com" <${smtpUser}>`,
        to: receiverEmail,
        subject: `New Lead: ${sanitizedData.fullName} from ${sanitizedData.businessName}`,
        html: emailHtml,
        replyTo: sanitizedData.email,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
