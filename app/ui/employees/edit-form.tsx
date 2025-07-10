'use client';

import { EmployeeField, EmployeeForm } from '@/app/lib/definitions';
import {
    CheckIcon,
    ClockIcon,
    CurrencyDollarIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateEmployee, State } from '@/app/lib/actions';
import { useActionState } from 'react';

export default function EditEmployeeForm({
    employee,
}: {
    employee: EmployeeForm;
}) {
    const initialState: State = { message: null, errors: {} };
    const updateEmployeeWithId = updateEmployee.bind(null, employee.id);
    const [state, formAction] = useActionState(updateEmployeeWithId, initialState);

    return (
        <form action={formAction}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Employee Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Employee Name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                defaultValue={employee.name}
                                placeholder="Enter employee name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="name-error"
                            />
                            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>

                    <div id="name-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.name &&
                            state.errors.name.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div></div>
                {/* Employee Department */}
                <div className="mb-4">
                    <label htmlFor="department" className="mb-2 block text-sm font-medium">
                        Employee Department
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="department"
                                name="departmentId"
                                type="text"
                                defaultValue={employee.department_id}
                                placeholder="Enter employee department"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="department-error"
                            />
                            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>

                    <div id="department-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.departmentId &&
                            state.errors.departmentId.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div></div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/employees"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                {/* <Button type="submit">Edit Pegawai</Button> */}
            </div>
        </form>
    );
}
