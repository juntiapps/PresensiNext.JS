import { getPegawaiByNip } from "@/app/query/employee";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const employee = await getPegawaiByNip(body.nip)

        return NextResponse.json(
            { status:1, message: 'employee retrieved successfully', data: employee },
            { status: 200 } // Status 201 Created
        );
    } catch (error) {
        console.error('Error retrieved employee:', error);
        return NextResponse.json(
            { message: 'Failed to retrieve employee' },
            { status: 500 } // Status 500 Internal Server Error
        );
    }
}