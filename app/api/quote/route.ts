import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, email, phone, company, service, budget, timeline, message } = data;

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'info@machvanta.com',
            replyTo: email,
            subject: `New Quote Request from ${name} - ${service || 'General Inquiry'}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">New Quote Request</h2>
          
          <h3 style="color: #333; margin-top: 25px;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${company || 'Not provided'}</td>
            </tr>
          </table>
          
          <h3 style="color: #333; margin-top: 25px;">Project Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Service:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${service || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Budget:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${budget || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Timeline:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${timeline || 'Not specified'}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #333;">Project Description:</h3>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 8px; line-height: 1.6;">${message || 'No additional details provided'}</p>
          </div>
          
          <p style="margin-top: 30px; color: #666; font-size: 12px;">This email was sent from the Machvanta website quote form.</p>
        </div>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Quote request sent successfully' });
    } catch (error) {
        console.error('Quote form error:', error);
        return NextResponse.json({ error: 'Failed to send quote request' }, { status: 500 });
    }
}