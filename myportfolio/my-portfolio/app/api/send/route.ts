import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    // Exact response capture karte hain
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['ib.malik2004@gmail.com'], // <-- Yahan EXACT wo email likhein jis se Resend sign up kiya tha
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.log("❌ RESEND API ERROR:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.log("✅ EMAIL DELIVERED:", data);
    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.log("❌ SERVER CATCH ERROR:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}