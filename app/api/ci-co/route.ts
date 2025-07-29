import { authOptions } from "@/app/lib/auth/authOptions";
import { getCiCo } from "@/app/query/presence";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);

    const { date, nip } = await request.json();

    if (!session) {
        return NextResponse.json(
            { status: 0, message: "Unauthorized" },
            { status: 401 }
        );
    }
    const result = await getCiCo(date, nip);

    return NextResponse.json({ status: 1, message: 'success', data: result }, { status: 200 });
}