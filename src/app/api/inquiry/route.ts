import { NextRequest, NextResponse } from 'next/server';
// import connectDB from '@/lib/mongodb';
// import Inquiry from '@/models/Inquiry';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        // await connectDB(); // Database connection commented out

        const body = await request.json();
        const { name, email, phone, company, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please provide a valid email address' },
                { status: 400 }
            );
        }

        // Database code commented out - data will be sent via email only
        // const inquiry = new Inquiry({
        //     name,
        //     email,
        //     phone,
        //     company,
        //     message,
        // });
        // await inquiry.save();

        // Generate a unique inquiry ID for email tracking
        const inquiryId = `INQ-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        // Send email notification to info@machvanta.com
        try {
            await sendEmailNotification({
                name,
                email,
                phone,
                company,
                message,
                inquiryId: inquiryId,
                createdAt: new Date()
            });
        } catch (emailError) {
            console.error('Error sending email notification:', emailError);
            return NextResponse.json(
                { error: 'Failed to send email notification. Please try again.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                message: 'Inquiry submitted successfully',
                inquiry: {
                    id: inquiryId,
                    name: name,
                    email: email,
                    createdAt: new Date(),
                }
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error submitting inquiry:', error);
        return NextResponse.json(
            { error: 'Failed to submit inquiry. Please try again.' },
            { status: 500 }
        );
    }
}

// GET method commented out since we're not using database
// export async function GET() {
//     try {
//         await connectDB();

//         const inquiries = await Inquiry.find({})
//             .sort({ createdAt: -1 })
//             .select('name email company createdAt')
//             .limit(50);

//         return NextResponse.json({ inquiries }, { status: 200 });

//     } catch (error) {
//         console.error('Error fetching inquiries:', error);
//         return NextResponse.json(
//             { error: 'Failed to fetch inquiries' },
//             { status: 500 }
//         );
//     }
// }

// Email notification function
async function sendEmailNotification(data: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
    inquiryId: string;
    createdAt: Date;
}) {
    // Create transporter using Gmail SMTP (you can configure this with your email service)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Your Gmail address
            pass: process.env.EMAIL_PASS, // Your Gmail app password
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'info@machvanta.com',
        subject: `New Contact Form Submission - ${data.name}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
                    New Contact Form Submission
                </h2>
                
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #1e293b; margin-top: 0;">Contact Details</h3>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
                    ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
                    <p><strong>Submitted:</strong> ${data.createdAt.toLocaleString()}</p>
                    <p><strong>Inquiry ID:</strong> ${data.inquiryId}</p>
                </div>
                
                <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                    <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
                    <p style="white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
                </div>
                
                <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
                    <p style="margin: 0; color: #1e40af; font-size: 14px;">
                        This email was automatically generated from the Machvanta India website contact form.
                    </p>
                </div>
            </div>
        `,
    };

    await transporter.sendMail(mailOptions);
}
