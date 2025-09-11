import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Inquiry from '@/models/Inquiry';

export async function POST(request: NextRequest) {
    try {
        await connectDB();

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

        // Create new inquiry
        const inquiry = new Inquiry({
            name,
            email,
            phone,
            company,
            message,
        });

        await inquiry.save();

        return NextResponse.json(
            {
                message: 'Inquiry submitted successfully',
                inquiry: {
                    id: inquiry._id,
                    name: inquiry.name,
                    email: inquiry.email,
                    createdAt: inquiry.createdAt,
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

export async function GET() {
    try {
        await connectDB();

        const inquiries = await Inquiry.find({})
            .sort({ createdAt: -1 })
            .select('name email company createdAt')
            .limit(50);

        return NextResponse.json({ inquiries }, { status: 200 });

    } catch (error) {
        console.error('Error fetching inquiries:', error);
        return NextResponse.json(
            { error: 'Failed to fetch inquiries' },
            { status: 500 }
        );
    }
}
