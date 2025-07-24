import { NextRequest, NextResponse } from "next/server";
import { verifyOtpInDb } from "@/app/query/otp"; // Pastikan path ini sesuai dengan lokasi fungsi verifyOtpInDb Anda

export async function POST(request: NextRequest) {
    if (request.method !== "POST") {
        return NextResponse.json(
            { message: "Method not allowed" },
            { status: 405 } // Method Not Allowed
        );
    }

    const body = await request.json();
    const { email, otp } = body;
    const isValid = await verifyOtpInDb(email, otp);

    if (!isValid) {
        return NextResponse.json(
            { message: "OTP salah atau kadaluarsa" },
            { status: 401 } // Unauthorized
        );
    }
    return NextResponse.json(
        { message: "OTP valid" },
        { status: 200 } // OK
    );
}

