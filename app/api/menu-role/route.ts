import { addCheckMenuRole, delCheckMenuRole } from "@/app/query/menurole";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const createdPeran = await addCheckMenuRole(body)

        return NextResponse.json(
            { message: 'menu role added successfully', data: createdPeran },
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

export async function DELETE(request: NextRequest) {
    try {
        const body = await request.json();

        const createdPeran = await delCheckMenuRole(body)

        return NextResponse.json(
            { message: 'menu role removed successfully', data: createdPeran },
            { status: 201 } // Status 201 Created
        );
    } catch (error) {
        console.error('Error removing menu role:', error);
        return NextResponse.json(
            { message: 'Failed to remove menu role' },
            { status: 500 } // Status 500 Internal Server Error
        );
    }
}