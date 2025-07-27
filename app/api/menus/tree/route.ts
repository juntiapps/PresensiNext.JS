import { authOptions } from "@/app/lib/auth/authOptions";
import { createMenu, getAllMenu, getMenuTree } from "@/app/query/menu";
import { getMenuRole } from "@/app/query/menurole";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);
    const { roleId } = await request.json();

    if (!session) {
        return NextResponse.json(
            { status: 0, message: "Unauthorized" },
            { status: 401 }
        );
    }

    const result = await getMenuTree()
    const result2 = await getMenuRole()

    const hasRole = (menuId: string, roleId: string) => {

        const res = result2.findIndex(i => i.menuId == menuId && i.roleId == roleId)
        return res == -1 ? false : true;
    }
    const modifiedResult = result.map(i => ({
        ...i,
        hasRole: hasRole(i.id, roleId),
        children: i.children.length > 0 ? i.children.map(j => ({
            ...j,
            hasRole: hasRole(j.id, roleId)
        })) : []
    }))

    // console.log(modifiedResult)

    return NextResponse.json({ status: 1, message: 'success', data: modifiedResult }, { status: 200 });
}