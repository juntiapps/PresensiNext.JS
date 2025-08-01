// app/api/users/route.ts

import { authOptions } from "@/app/lib/auth/authOptions";
import { deleteDepartemen, getDepartemenById, updateDepartemen } from "@/app/query/department";
import { UUID } from "crypto";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from 'next/server';

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
        const result = await getDepartemenById(id);

        if (!result) {
            return NextResponse.json({ error: 'Departemen not found' }, { status: 404 });
        }
        return NextResponse.json(result, { status: 200 })
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error.message || 'Failed to fetch pegawai.' }, { status: 500 });
    }

}
export async function PUT(request: NextRequest,
    { params }: { params: Promise<{ id: UUID }> }
) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json(
            { status: 0, message: "Unauthorized" },
            { status: 401 }
        );
    }
    try {
        const id = (await params).id;
        const { nama } = await request.json();

        const dep = await getDepartemenById(id);
        if (!dep) {
            return NextResponse.json({ error: 'Department not found' }, { status: 404 });
        }

        const updatedDepartemen = await updateDepartemen(id, {
            nama
        })

        return NextResponse.json(
            { message: 'Departemen updated successfully', data: updatedDepartemen },
            { status: 200 }
        );
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error.message || 'Failed to update departemen.' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest,
    { params }: { params: Promise<{ id: UUID }> }
) {
    try {
        const id = (await params).id;
        const deleted = await deleteDepartemen(id);

        return new NextResponse(null, { status: 204 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error.message || 'Failed to delete departemen.' }, { status: 500 });
    }
}