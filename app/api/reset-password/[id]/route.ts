import { authOptions } from "@/app/lib/auth/authOptions";
import { resetPwd } from "@/app/query/employee";
import { UUID } from "crypto";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest,
    { params }: { params: Promise<{ id: UUID }> }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json(
            { status: 0, message: "Unauthorized" },
            { status: 401 }
        );
    }
    try {
        const id = (await params).id;
        const result = await resetPwd(id);

        if (!result) {
            return NextResponse.json({ error: 'user not found' }, { status: 404 });
        }
        return NextResponse.json(result, { status: 200 })
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error.message || 'Failed to reset password.' }, { status: 500 });
    }

}