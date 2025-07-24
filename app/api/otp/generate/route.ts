import { sendOtpEmail } from "@/app/lib/otp";
import { saveOtpToDb } from "@/app/query/otp";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        if (request.method !== "POST") {
            return NextResponse.json(
                { message: "Method not allowed" },
                { status: 405 } // Method Not Allowed
            );
        }

        const body = await request.json();
        if (!body.email) {
            return NextResponse.json(
                { message: "Email is required" },
                { status: 400 } // Bad Request
            );
        }

        const { email } = body;
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        await saveOtpToDb(email, otp);
        await sendOtpEmail(email, otp); // menggunakan nodemailer

        return NextResponse.json(
            { message: 'OTP Sent' },
            { status: 201 } // Status 201 Created
        );
    } catch (error) {
        console.error('Error creating product:', error);
        return NextResponse.json(
            { message: 'Failed to create product' },
            { status: 500 } // Status 500 Internal Server Error
        );
    }
}