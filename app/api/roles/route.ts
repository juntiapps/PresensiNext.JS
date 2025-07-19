// app/api/users/route.ts

import { createPeran, getAllPeran } from "@/app/query/roles";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const result = await getAllPeran()

    return NextResponse.json(result, { status: 200 });
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const createdPeran = await createPeran(body)

        return NextResponse.json(
            { message: 'peran created successfully', data: createdPeran },
            { status: 201 } // Status 201 Created
        );
    } catch (error) {
        console.error('Error creating peran:', error);
        return NextResponse.json(
            { message: 'Failed to create v' },
            { status: 500 } // Status 500 Internal Server Error
        );
    }
}