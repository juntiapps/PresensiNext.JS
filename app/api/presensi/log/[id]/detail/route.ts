import { getLogPresensiById } from "@/app/query/presence";
import { UUID } from "crypto";
import { M_PLUS_1 } from "next/font/google";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest,
    { params }: { params: Promise<{ id: UUID }> }) {
    try {
        const id = (await params).id;
        const result = await getLogPresensiById(id);

        if (!result) {
            return NextResponse.json({ status:0, message: `log presensi id=${id} not found` }, { status: 404 });
        }
        return NextResponse.json({ status: 1, message: 'success', data: result }, { status: 200 })
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ status: 0, message: error.message || `Failed to fetch log presensi` }, { status: 500 });
    }

}