'use client';

import { DepartmentField, EmployeeForm, RoleField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  AtSymbolIcon,
  BuildingOfficeIcon,
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  IdentificationIcon,
  KeyIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createEmployee, State } from '@/app/lib/actions';
import { useActionState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Form({
  departments, roles
}: {
  departments: DepartmentField[];
  roles: RoleField[]
}) {

  // const router = useRouter();
  const initialState: State = { message: null, errors: {}, data: {} };;
  const [state, formAction] = useActionState(createEmployee, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Employee Name */}
        <div className="mb-4">
          <label htmlFor="nama" className="mb-2 block text-sm font-medium">
            Nama
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="nama"
                name="nama"
                type="text"
                defaultValue={state.data?.nama || ''}
                placeholder="Masukkan Nama Pegawai"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="nama-error"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="nama-error" aria-live="polite" aria-atomic="true">
            {state.errors?.nama &&
              state.errors.nama.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* Employee NIP */}
        <div className="mb-4">
          <label htmlFor="nip" className="mb-2 block text-sm font-medium">
            NIP
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="nip"
                name="nip"
                type="text"
                defaultValue={state.data?.nip || ''}
                placeholder="Masukkan NIP"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="nip-error"
              // disabled
              />
              <IdentificationIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="nip-error" aria-live="polite" aria-atomic="true">
            {state.errors?.nip &&
              state.errors.nip.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* Employee Email */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={state.data?.email || ''}
                placeholder="Masukkan Email Pegawai"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="email-error"
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* Employee Department */}
        <div className="mb-4">
          <label htmlFor="department" className="mb-2 block text-sm font-medium">
            Departemen
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <select
                id="department"
                name="departemenId"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue={state.data?.departemenId || ''}
                aria-describedby="department-error"
              >
                <option value="" disabled>
                  Pilih Departemen
                </option>
                {departments.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.nama}
                  </option>
                ))}
              </select>
              <BuildingOfficeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="department-error" aria-live="polite" aria-atomic="true">
            {state.errors?.departemenId &&
              state.errors.departemenId.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* Employee Role */}
        <div className="mb-4">
          <label htmlFor="role" className="mb-2 block text-sm font-medium">
            Peran
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <select
                id="role"
                name="roleId"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue={state.data?.roleId || ''}
                aria-describedby="department-error"
              >
                <option value="" disabled>
                  Pilih Peran
                </option>
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.nama}
                  </option>
                ))}
              </select>
              <QuestionMarkCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="department-error" aria-live="polite" aria-atomic="true">
            {state.errors?.departemenId &&
              state.errors.departemenId.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* Employee Default Password */}
        <div className="mb-4">
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            Default Password
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="password"
                // name="email"
                type="password"
                defaultValue="pasword123"
                // placeholder="Masukkan Email Pegawai"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                // aria-describedby="email-error"
                disabled
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/employees"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Tambah Pegawai</Button>
      </div>
    </form>
  );
}
