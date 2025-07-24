import { NextRequest, NextResponse } from "next/server";
import { getUserByEmail } from "@/app/query/users";
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {
    // console.log('method:', request.method);
    if (request.method !== "POST") {
        return NextResponse.json(
            { message: "Method not allowed" },
            { status: 405 } // Method Not Allowed
        );
    }
    // console.log('method:', await request.json());

    const body = await request.json();

    const { email, password } = body;

    const user = await getUserByEmail(email);
    if (!user) {
        return NextResponse.json(
            { message: "User tidak ditemukan", status: 0 },
            { status: 404 } // Not Found
        );
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return NextResponse.json(
            { message: "Password salah", status: 0 },
            { status: 401 } // Unauthorized
        );
    }

    // ✅ Login sukses tapi belum signIn() — lanjutkan ke generate OTP
    return NextResponse.json(
        { message: "Valid user", status: 1 ,data: {role: user?.role?.nama} },
        { status: 200 } // OK
    );
}


