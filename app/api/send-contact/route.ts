import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER,
      subject: `Contact Form: ${subject || 'General Inquiry'}`,
      html: `
        <div style="background:#f5f7fa;padding:24px 0;font-family:sans-serif">
          <table style="max-width:500px;background:#fff;border-radius:12px;padding:0 24px 24px 24px;margin:0 auto;box-shadow:0 2px 12px rgba(0,0,0,0.06)">
            <tr>
              <td colspan="2" style="text-align:center;padding:32px 0 14px 0">
                <h2 style="margin:0 0 8px 0;color:#333">New Contact Form Submission</h2>
                <div style="font-size:15px;color:#777">Details below</div>
              </td>
            </tr>
            <tr><td style="padding:8px 16px;font-weight:bold;text-align:right;width:140px">Name:</td><td style="padding:8px 0">${name}</td></tr>
            <tr><td style="padding:8px 16px;font-weight:bold;text-align:right;">Email:</td><td style="padding:8px 0">${email}</td></tr>
            <tr><td style="padding:8px 16px;font-weight:bold;text-align:right;">Phone:</td><td style="padding:8px 0">${phone || 'Not provided'}</td></tr>
            <tr><td style="padding:8px 16px;font-weight:bold;text-align:right;">Subject:</td><td style="padding:8px 0">${subject || 'General Inquiry'}</td></tr>
            <tr><td style="padding:8px 16px;font-weight:bold;text-align:right;vertical-align:top">Message:</td><td style="padding:8px 0;white-space:pre-line">${message}</td></tr>
          </table>
          <div style="text-align:center;color:#bbb;font-size:13px;margin-top:28px;">Sahayak Website</div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}

