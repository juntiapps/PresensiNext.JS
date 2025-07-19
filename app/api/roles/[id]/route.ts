// app/api/users/route.ts

import { deletePeran, getPeranById, updatePeran } from "@/app/query/roles";
import { UUID } from "crypto";
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest,
    { params }: { params: Promise<{ id: UUID }> }) {
    try {
        const id = (await params).id;
        const result = await getPeranById(id);

        if (!result) {
            return NextResponse.json({ error: 'Peran not found' }, { status: 404 });
        }
        return NextResponse.json(result, { status: 200 })
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error.message || 'Failed to fetch peran.' }, { status: 500 });
    }

}
export async function PUT(request: NextRequest,
    { params }: { params: Promise<{ id: UUID }> }
) {
    try {
        const id = (await params).id;
        const { nama } = await request.json();

        const dep = await getPeranById(id);
        if (!dep) {
            return NextResponse.json({ error: 'Peran not found' }, { status: 404 });
        }

        const updatedPeran = await updatePeran(id, {
            nama
        })

        return NextResponse.json(
            { message: 'Peran updated successfully', data: updatedPeran },
            { status: 200 }
        );
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error.message || 'Failed to update peran.' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest,
    { params }: { params: Promise<{ id: UUID }> }
) {
    try {
        const id = (await params).id;
        const deleted = await deletePeran(id);

        return new NextResponse(null, { status: 204 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error.message || 'Failed to delete peran.' }, { status: 500 });
    }
}