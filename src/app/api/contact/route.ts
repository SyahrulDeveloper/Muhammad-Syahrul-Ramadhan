import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactRequestBody {
    name: string;
    email: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        const { name, email, message } = (await request.json()) as ContactRequestBody;

        // Konfigurasi transporter dengan Gmail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // Detail email yang akan dikirim
        const mailOptions = {
            from: email,
            to: process.env.GMAIL_USER,
            subject: `New message from ${name}`,
            text: `
You received a new message from your portfolio contact form:

Name: ${name}
Email: ${email}
Message:
${message}
            `,
        };

        // Kirim email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Failed to send message";
        console.error("Email sending error:", errorMessage);
        return NextResponse.json({ message: errorMessage }, { status: 500 });
    }
}
