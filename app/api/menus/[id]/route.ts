// app/api/users/route.ts

import { deleteMenu, getMenuById, updateMenu } from "@/app/query/menu";
import { UUID } from "crypto";
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest,
    { params }: { params: Promise<{ id: UUID }> }) {
    try {
        const id = (await params).id;
        const result = await getMenuById(id);

        if (!result) {
            return NextResponse.json({ error: 'Menu not found' }, { status: 404 });
        }
        return NextResponse.json(result, { status: 200 })
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error.message || 'Failed to fetch menu.' }, { status: 500 });
    }

}
export async function PUT(request: NextRequest,
    { params }: { params: Promise<{ id: UUID }> }
) {
    try {
        const id = (await params).id;
        const { name, icon, url, order, parentId } = await request.json();

        const menu = await getMenuById(id);
        if (!menu) {
            return NextResponse.json({ error: 'Menu not found' }, { status: 404 });
        }

        const updatedMenu = await updateMenu(id, {
            name, icon, url, order, parentId
        })

        return NextResponse.json(
            { message: 'Employee updated successfully', data: updatedMenu },
            { status: 200 }
        );
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error.message || 'Failed to fetch Menu.' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest,
    { params }: { params: Promise<{ id: UUID }> }
) {
    try {
        const id = (await params).id;
        const deleted = await deleteMenu(id);

        return NextResponse.json({message: 'Menu deleted successfully'}, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error.message || 'Failed to delete menu.' }, { status: 500 });
    }
}