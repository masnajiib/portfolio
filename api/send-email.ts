import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiting (per container instance)
const rateLimit = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 3; // 3 emails per hour

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Rate Limiting Check
  const ip = (request.headers['x-forwarded-for'] as string) || request.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const requestTimestamps = rateLimit.get(ip) || [];
  
  // Filter out timestamps older than the window
  const recentRequests = requestTimestamps.filter(time => now - time < WINDOW_MS);
  
  if (recentRequests.length >= MAX_REQUESTS) {
    return response.status(429).json({ error: 'Terlalu banyak percobaan pengiriman email. Silakan coba lagi dalam 1 jam.' });
  }
  
  // Update rate limit record
  recentRequests.push(now);
  rateLimit.set(ip, recentRequests);

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = request.body;

  if (!name || !email || !message) {
    return response.status(400).json({ error: 'Missing required fields' });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error('Missing Gmail credentials');
    return response.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
      tls: {
        // Only disable certificate validation in development
        rejectUnauthorized: process.env.NODE_ENV !== 'development'
      }
    });

    const mailOptions = {
      from: `"${name}" <${user}>`, // Sender address (must be authenticated user for Gmail)
      to: user, // Send to yourself
      replyTo: email, // Reply to the user's email
      subject: `Pesan Baru dari Portofolio: ${name}`,
      text: `
Nama: ${name}
Email: ${email}

Pesan:
${message}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Inter', sans-serif; background-color: #f3f4f6; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
    .header { background: linear-gradient(to right, #3b82f6, #06b6d4); padding: 30px; text-align: center; color: white; }
    .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
    .content { padding: 30px; color: #1f2937; }
    .field { margin-bottom: 20px; }
    .label { font-size: 12px; text-transform: uppercase; color: #6b7280; font-weight: 600; letter-spacing: 0.05em; margin-bottom: 4px; }
    .value { font-size: 16px; line-height: 1.5; color: #111827; }
    .message-box { background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin-top: 8px; white-space: pre-wrap; }
    .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
    .button { display: inline-block; background-color: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 500; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Pesan Baru dari Portofolio</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Dari</div>
        <div class="value"><strong>${name}</strong></div>
      </div>
      
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></div>
      </div>

      <div class="field">
        <div class="label">Pesan</div>
        <div class="value message-box">${message}</div>
      </div>

      <div style="text-align: center;">
        <a href="mailto:${email}?subject=${encodeURIComponent("Pesan dari Almas Najiib Imam Muttaqin")}&body=${encodeURIComponent(`Halo ${name},\n\nTerima kasih telah menghubungi saya.\n`)}" class="button">Balas via Email</a>
      </div>
    </div>
    <div class="footer">
      <p>Email ini dikirim dari formulir kontak portofolio Anda.</p>
      <p>&copy; ${new Date().getFullYear()} Almas Najiib Imam Muttaqin</p>
    </div>
  </div>
</body>
</html>
      `,
    };

    await transporter.sendMail(mailOptions);
    return response.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return response.status(500).json({ error: 'Failed to send email' });
  }
}
