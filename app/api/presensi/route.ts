import { authOptions } from "@/app/lib/auth/authOptions";
import { createPresensi } from "@/app/query/presence";
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

        const createdPresensi = await createPresensi(body)

        return NextResponse.json(
            { message: 'presence submit successfully', data: createdPresensi },
            { status: 201 } // Status 201 Created
        );
    } catch (error) {
        console.error('Error submit presence:', error);
        return NextResponse.json(
            { message: 'Failed to submit presence' },
            { status: 500 } // Status 500 Internal Server Error
        );
    }
}