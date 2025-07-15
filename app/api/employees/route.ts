// app/api/users/route.ts

import { FormattedEmployeesTable } from "@/app/lib/definitions";
import { departments, employees } from "@/app/lib/placeholder-data";

export async function GET(request: Request) {
    // For example, fetch data from your DB here
    const formatedEmployees: FormattedEmployeesTable[] = employees.map((employee:any) => ({
        ...employee,
        department_name: departments.find(i => i.id === employee.department_id)?.name ?? "Unknown", // Ensures department_name is always a string
    }));

    return new Response(JSON.stringify(formatedEmployees), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function POST(request: Request) {
    // Parse the request body
    const body = await request.json();
    employees.push(body);
    return new Response(JSON.stringify(body), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    });
}