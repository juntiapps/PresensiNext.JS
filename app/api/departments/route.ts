// app/api/users/route.ts

import { authOptions } from "@/app/lib/auth/authOptions";
import { createDepartemen, getAllDepartemen } from "@/app/query/department";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json(
            { status: 0, message: "Unauthorized" },
            { status: 401 }
        );
    }
    const result = await getAllDepartemen()

    return NextResponse.json(result, { status: 200 });
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const createdEmployee = await createDepartemen(body)

        return NextResponse.json(
            { message: 'departemen created successfully', data: createdEmployee },
            { status: 201 } // Status 201 Created
        );
    } catch (error) {
        console.error('Error creating departemen:', error);
        return NextResponse.json(
            { message: 'Failed to create departemen' },
            { status: 500 } // Status 500 Internal Server Error
        );
    }
}