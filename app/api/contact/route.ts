import { NextResponse } from 'next/server'; import nodemailer from 'nodemailer';
export async function POST(req: Request) {
  try { const data = await req.json(); console.log("Contact Data:", data); return NextResponse.json({ success: true }); }
  catch (e) { return NextResponse.json({ error: 'Failed' }, { status: 500 }); }
}