import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, company, service, otherService, message } = body;

        // Basic validation
        if (!name || !email || !message || !service) {
            return NextResponse.json(
                { error: 'Name, email, service, and message are required' },
                { status: 400 }
            );
        }

        // If service is "other", otherService must be provided
        if (service === 'other' && !otherService) {
            return NextResponse.json(
                { error: 'Please specify the service name' },
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

        // Generate a unique inquiry ID for email tracking
        const inquiryId = `SRV-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        // Determine the service name to display
        const serviceName = service === 'other' ? otherService : service;

        // Send email notification to service@machvanta.com
        try {
            await sendEmailNotification({
                name,
                email,
                phone,
                company,
                service: serviceName,
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
                message: 'Service inquiry submitted successfully',
                inquiry: {
                    id: inquiryId,
                    name: name,
                    email: email,
                    service: serviceName,
                    createdAt: new Date(),
                }
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error submitting service inquiry:', error);
        return NextResponse.json(
            { error: 'Failed to submit service inquiry. Please try again.' },
            { status: 500 }
        );
    }
}

// Email notification function
async function sendEmailNotification(data: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    service: string;
    message: string;
    inquiryId: string;
    createdAt: Date;
}) {
    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'service@machvanta.com',
        subject: `New Service Inquiry - ${data.service} - ${data.name}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
                    New Service Inquiry
                </h2>
                
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #1e293b; margin-top: 0;">Contact Details</h3>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
                    ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
                    <p><strong>Service:</strong> ${data.service}</p>
                    <p><strong>Submitted:</strong> ${data.createdAt.toLocaleString()}</p>
                    <p><strong>Inquiry ID:</strong> ${data.inquiryId}</p>
                </div>
                
                <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                    <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
                    <p style="white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
                </div>
                
                <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
                    <p style="margin: 0; color: #1e40af; font-size: 14px;">
                        This email was automatically generated from the Machvanta India website service inquiry form.
                    </p>
                </div>
            </div>
        `,
    };

    await transporter.sendMail(mailOptions);
}

