// app/api/users/route.ts

import { authOptions } from "@/app/lib/auth/authOptions";
import { deletePegawai, getPegawaiById, updatePegawai } from "@/app/query/employee";
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
        const result = await getPegawaiById(id);

        if (!result) {
            return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
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
    try {
        const id = (await params).id;
        const { nama, departemenId, email, roleId, nip } = await request.json();

        const peg = await getPegawaiById(id);
        if (!peg) {
            return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
        }

        const updatedEmployee = await updatePegawai(id, {
            nama, departemenId, email, roleId, nip
        })

        return NextResponse.json(
            { message: 'Employee updated successfully', data: updatedEmployee },
            { status: 200 }
        );
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error.message || 'Failed to fetch pegawai.' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest,
    { params }: { params: Promise<{ id: UUID }> }
) {
    try {
        const id = (await params).id;
        const deleted = await deletePegawai(id);

        return NextResponse.json({ message: 'Employee deleted successfully' }, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error.message || 'Failed to delete pegawai.' }, { status: 500 });
    }
}