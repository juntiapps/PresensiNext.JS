import { authOptions } from "@/app/lib/auth/authOptions";
import { resetPwdUsr } from "@/app/query/employee";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json(
            { status: 0, message: "Unauthorized" },
            { status: 401 }
        );
    }

    try {
        const body = await request.json();

        const {id, passwordBaru} = body

        const resetPass = await resetPwdUsr(id, passwordBaru)

        return NextResponse.json(
            { message: 'password resetted successfully', data: resetPass },
            { status: 201 } // Status 201 Created
        );
    } catch (error) {
        console.error('Error resetting password:', error);
        return NextResponse.json(
            { message: 'Failed to reset password' },
            { status: 500 } // Status 500 Internal Server Error
        );
    }
}