import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

// API Route: POST /api/contact
export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use SMTP for custom domains
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // App password (if using Gmail)
      },
    });

    // Send Email
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // Your email to receive messages
      subject: `New Contact Us Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error sending email", error }, { status: 500 });
  }
}
