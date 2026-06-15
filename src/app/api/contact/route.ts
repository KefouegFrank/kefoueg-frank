import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const SEND_RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const SEND_RATE_LIMIT_MAX = 5;

const rateLimitStore = new Map<
  string,
  { count: number; windowStart: number }
>();

function getClientIp(req: Request) {
  const xForwardedFor = req.headers.get('x-forwarded-for');
  return xForwardedFor?.split(',')[0].trim() || req.headers.get('x-real-ip') || 'unknown';
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizeText(value: unknown) {
  const text = String(value || '').trim();
  return text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function incrementRateLimit(ip: string) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now - entry.windowStart > SEND_RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return 1;
  }

  entry.count += 1;
  rateLimitStore.set(ip, entry);
  return entry.count;
}

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  throw new Error('RESEND_API_KEY is required to send email from /api/contact');
}

const resend = new Resend(apiKey);

export async function POST(req: Request) {
  try {
    const clientIp = getClientIp(req);

    const count = incrementRateLimit(clientIp);
    if (count > SEND_RATE_LIMIT_MAX) {
      return NextResponse.json(
        {
          message:
            'Too many requests from this network. Please try again after some time.',
        },
        { status: 429 }
      );
    }

    const payload = await req.json();
    const name = sanitizeText(payload.name);
    const email = sanitizeText(payload.email);
    const subject = sanitizeText(payload.subject);
    const message = sanitizeText(payload.message);

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const safeMessage = message.length > 3000 ? `${message.slice(0, 3000)}...` : message;

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['kefoueg@gmail.com'],
      subject: `New Portfolio Message: ${subject} from ${name}`,
      html: `
        <h2>New Message from your Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (!data?.data?.id) {
      console.error('Resend API returned unexpected response:', data);
      return NextResponse.json(
        { message: 'Unable to send the email at this time.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server Internal Error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
