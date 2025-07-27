// app/api/users/route.ts

import { authOptions } from "@/app/lib/auth/authOptions";
import { createMenu, getAllMenu, getMenuTree } from "@/app/query/menu";
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
    
    // const result = await getAlgetlMenu()
    const result = await getMenuTree()

    return NextResponse.json({ status: 1, message: 'success', data: result }, { status: 200 });
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const createdEmployee = await createMenu(body)

        return NextResponse.json(
            { message: 'Menu created successfully', data: createdEmployee },
            { status: 201 } // Status 201 Created
        );
    } catch (error) {
        console.error('Error creating menu:', error);
        return NextResponse.json(
            { message: 'Failed to create menu' },
            { status: 500 } // Status 500 Internal Server Error
        );
    }
}