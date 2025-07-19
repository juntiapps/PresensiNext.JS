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
import { useActionState, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UUID } from 'crypto';
import { fetchDepartments, fetchRoles } from '@/app/lib/data';
import { z } from 'zod';
import { createEmployee } from '@/app/lib/actions';

const EmployeeSchema = z.object({
  nama: z.string().min(1, { message: 'Nama wajib diisi' }),
  email: z.string().email({ message: 'Email tidak valid' }),
  nip: z.string().min(1, { message: 'nip harus diisi' }).max(18, { message: 'nip maksimal 18 karakter' }),
  departemenId: z.string().uuid({ message: 'Pilih departemen yang valid' }),
  roleId: z.string().uuid({ message: 'Pilih peran yang valid' }),
});

export default function Form() {
  //   departments, roles
  // }: {
  //   departments: DepartmentField[];
  //   roles: RoleField[]
  // }) {

  // const router = useRouter();
  // const initialState: State = { message: null, errors: {}, data: {} };
  // const [state, formAction] = useActionState(createEmployee, initialState);

  const router = useRouter();
  const [employee, setEmployee] = useState({} as EmployeeForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [departments, setDepartments] = useState([] as DepartmentField[]);
  const [roles, setRoles] = useState([] as RoleField[]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      try {
        const [dept, pos] = await Promise.all([
          fetchDepartments(),
          fetchRoles(),
        ]);
        setDepartments(dept);
        setRoles(pos);
      } catch (err) {
        console.error('Failed to fetch data:', err);
      } finally {
        setLoading(false);
      }
    };


    loadData();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEmployee(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = EmployeeSchema.parse(employee);
      await createEmployee(validatedData);
      router.push('/dashboard/employees');
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.errors.forEach(error => {
          if (error.path.length > 0) {
            fieldErrors[error.path[0]] = error.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        console.error('Submission error:', err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
                value={employee.nama || ''}
                placeholder="Masukkan Nama Pegawai"
                onChange={handleChange}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="nama-error"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="nama-error" aria-live="polite" aria-atomic="true">
            {errors.nama && (
              <p className="mt-2 text-sm text-red-500">{errors.nama}</p>
            )}
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
                value={employee.nip || ''}
                placeholder="Masukkan NIP"
                onChange={handleChange}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="nip-error"
              />
              <IdentificationIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="nip-error" aria-live="polite" aria-atomic="true">
            {errors.nip && (
              <p className="mt-2 text-sm text-red-500">{errors.nip}</p>
            )}
          </div>
        </div>
        {/* Employee Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                value={employee.email || ''}
                placeholder="Masukkan Email Pegawai"
                onChange={handleChange}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="email-error"
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {errors.email && (
              <p className="mt-2 text-sm text-red-500">{errors.email}</p>
            )}
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
                value={employee.departemenId || ''}
                onChange={handleChange}
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
            {errors.departemenId && (
              <p className="mt-2 text-sm text-red-500">{errors.departemenId}</p>
            )}
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
                value={employee.roleId || ''}
                onChange={handleChange}
                aria-describedby="role-error"
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
          <div id="role-error" aria-live="polite" aria-atomic="true">
            {errors.roleId && (
              <p className="mt-2 text-sm text-red-500">{errors.roleId}</p>
            )}
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
                type="password"
                value="password123"
                disabled
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Password default untuk pegawai baru adalah <strong>password123</strong>.
            Silakan ubah setelah login pertama kali.
          </p>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/employees"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Batal
          </Link>
          <Button type="submit">Tambah Pegawai</Button>
        </div>
      </div>
    </form>
    // <form action={formAction}>
    //   <div className="rounded-md bg-gray-50 p-4 md:p-6">
    //     {/* Employee Name */}
    //     <div className="mb-4">
    //       <label htmlFor="nama" className="mb-2 block text-sm font-medium">
    //         Nama
    //       </label>
    //       <div className="relative mt-2 rounded-md">
    //         <div className="relative">
    //           <input
    //             id="nama"
    //             name="nama"
    //             type="text"
    //             defaultValue={state.data?.nama || ''}
    //             placeholder="Masukkan Nama Pegawai"
    //             className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
    //             aria-describedby="nama-error"
    //           />
    //           <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    //         </div>
    //       </div>
    //       <div id="nama-error" aria-live="polite" aria-atomic="true">
    //         {state.errors?.nama &&
    //           state.errors.nama.map((error: string) => (
    //             <p className="mt-2 text-sm text-red-500" key={error}>
    //               {error}
    //             </p>
    //           ))}
    //       </div>
    //     </div>
    //     {/* Employee NIP */}
    //     <div className="mb-4">
    //       <label htmlFor="nip" className="mb-2 block text-sm font-medium">
    //         NIP
    //       </label>
    //       <div className="relative mt-2 rounded-md">
    //         <div className="relative">
    //           <input
    //             id="nip"
    //             name="nip"
    //             type="text"
    //             defaultValue={state.data?.nip || ''}
    //             placeholder="Masukkan NIP"
    //             className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
    //             aria-describedby="nip-error"
    //           // disabled
    //           />
    //           <IdentificationIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    //         </div>
    //       </div>
    //       <div id="nip-error" aria-live="polite" aria-atomic="true">
    //         {state.errors?.nip &&
    //           state.errors.nip.map((error: string) => (
    //             <p className="mt-2 text-sm text-red-500" key={error}>
    //               {error}
    //             </p>
    //           ))}
    //       </div>
    //     </div>
    //     {/* Employee Email */}
    //     <div className="mb-4">
    //       <label htmlFor="name" className="mb-2 block text-sm font-medium">
    //         Email
    //       </label>
    //       <div className="relative mt-2 rounded-md">
    //         <div className="relative">
    //           <input
    //             id="email"
    //             name="email"
    //             type="email"
    //             defaultValue={state.data?.email || ''}
    //             placeholder="Masukkan Email Pegawai"
    //             className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
    //             aria-describedby="email-error"
    //           />
    //           <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    //         </div>
    //       </div>
    //       <div id="email-error" aria-live="polite" aria-atomic="true">
    //         {state.errors?.email &&
    //           state.errors.email.map((error: string) => (
    //             <p className="mt-2 text-sm text-red-500" key={error}>
    //               {error}
    //             </p>
    //           ))}
    //       </div>
    //     </div>
    //     {/* Employee Department */}
    //     <div className="mb-4">
    //       <label htmlFor="department" className="mb-2 block text-sm font-medium">
    //         Departemen
    //       </label>
    //       <div className="relative mt-2 rounded-md">
    //         <div className="relative">
    //           <select
    //             id="department"
    //             name="departemenId"
    //             className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
    //             defaultValue={state.data?.departemenId || ''}
    //             aria-describedby="department-error"
    //           >
    //             <option value="" disabled>
    //               Pilih Departemen
    //             </option>
    //             {departments.map((department) => (
    //               <option key={department.id} value={department.id}>
    //                 {department.nama}
    //               </option>
    //             ))}
    //           </select>
    //           <BuildingOfficeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    //         </div>
    //       </div>

    //       <div id="department-error" aria-live="polite" aria-atomic="true">
    //         {state.errors?.departemenId &&
    //           state.errors.departemenId.map((error: string) => (
    //             <p className="mt-2 text-sm text-red-500" key={error}>
    //               {error}
    //             </p>
    //           ))}
    //       </div>
    //     </div>
    //     {/* Employee Role */}
    //     <div className="mb-4">
    //       <label htmlFor="role" className="mb-2 block text-sm font-medium">
    //         Peran
    //       </label>
    //       <div className="relative mt-2 rounded-md">
    //         <div className="relative">
    //           <select
    //             id="role"
    //             name="roleId"
    //             className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
    //             defaultValue={state.data?.roleId || ''}
    //             aria-describedby="department-error"
    //           >
    //             <option value="" disabled>
    //               Pilih Peran
    //             </option>
    //             {roles.map((role) => (
    //               <option key={role.id} value={role.id}>
    //                 {role.nama}
    //               </option>
    //             ))}
    //           </select>
    //           <QuestionMarkCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    //         </div>
    //       </div>

    //       <div id="department-error" aria-live="polite" aria-atomic="true">
    //         {state.errors?.departemenId &&
    //           state.errors.departemenId.map((error: string) => (
    //             <p className="mt-2 text-sm text-red-500" key={error}>
    //               {error}
    //             </p>
    //           ))}
    //       </div>
    //     </div>
    //     {/* Employee Default Password */}
    //     <div className="mb-4">
    //       <label htmlFor="password" className="mb-2 block text-sm font-medium">
    //         Default Password
    //       </label>
    //       <div className="relative mt-2 rounded-md">
    //         <div className="relative">
    //           <input
    //             id="password"
    //             // name="email"
    //             type="password"
    //             defaultValue="pasword123"
    //             // placeholder="Masukkan Email Pegawai"
    //             className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
    //             // aria-describedby="email-error"
    //             disabled
    //           />
    //           <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-6 flex justify-end gap-4">
    //     <Link
    //       href="/dashboard/employees"
    //       className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
    //     >
    //       Cancel
    //     </Link>
    //     <Button type="submit">Tambah Pegawai</Button>
    //   </div>
    // </form>
  );
}
