// app/api/users/route.ts

import { FormattedEmployeesTable } from "@/app/lib/definitions";
import { departments, employees } from "@/app/lib/placeholder-data";
import { NextRequest } from 'next/server';

export async function PUT(request: NextRequest, context: any) {
    // For example, fetch data from your DB here
    const { params } = context as { params: { id: string } };
    const { name, department_id, email } = await request.json();
    const index = employees.findIndex((p: any) => p.id === params.id);
    if (index === -1) {
        return new Response(JSON.stringify('error: Employee not found }'), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    employees[index] = { ...employees[index], name, department_id, email };
    return new Response(JSON.stringify(employees[index]), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function DELETE(_: NextRequest,context: any) {
    const { params } = context as { params: { id: string } };
    const index = employees.findIndex((p: any) => p.id === params.id);
    if (index === -1) {
        return new Response(JSON.stringify('error: Employee not found }'), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const deleted = employees.splice(index, 1);
    //   return NextResponse.json({ message: 'Deleted', product: deleted[0] });
    return new Response(JSON.stringify(deleted), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    });
}