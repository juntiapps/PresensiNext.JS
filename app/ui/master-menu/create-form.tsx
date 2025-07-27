'use client';

import { DepartmentField, EmployeeForm, MenuField, MenuForm, RoleField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  AtSymbolIcon,
  Bars3Icon,
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
import { fetchDepartments, fetchMenus, fetchRoles } from '@/app/lib/data';
import { z } from 'zod';
import { createMenu } from '@/app/lib/actions';
// import { createMenu } from '@/app/query/menu';
// import icons from '@/app/lib/icon';
import * as icons from "@heroicons/react/24/outline";

import React from 'react';

const MenuSchema = z.object({
  name: z.string().min(1, { message: 'Nama wajib diisi' }),
  icon: z.string().min(1, { message: 'Icon tidak valid' }),
  url: z.string().min(1, { message: 'nip harus diisi' }),
  order: z.number({ invalid_type_error: 'Urutan harus berupa angka' }),
  parentId: z.string().uuid({ message: 'Pilih parent yang valid' }).nullable().optional(),
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
  const [menu, setMenu] = useState({} as MenuForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [parents, setParents] = useState([] as MenuField[]);
  const [loading, setLoading] = useState(true);

  const iconNames = Object.keys(icons);
  useEffect(() => {
    const loadData = async () => {
      try {
        const [par] = await Promise.all([
          fetchMenus(),
        ]);
        setParents(par);
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

    let processedValue = value
    if (name === 'order') {
      processedValue = value === '' ? 0 : Number(value);
    }
    setMenu(prev => ({ ...prev, [name]: processedValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = MenuSchema.parse(menu);
      if (["''", null, undefined].includes(validatedData.parentId)) {
        validatedData.parentId = null
      }

      await createMenu(validatedData);
      router.push('/dashboard/master-menu');
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
        {/* Menu Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Nama
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                value={menu.name || ''}
                placeholder="Masukkan Nama Menu"
                onChange={handleChange}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="name-error"
              />
              {/* <Bars3Icon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {errors.name && (
              <p className="mt-2 text-sm text-red-500">{errors.name}</p>
            )}
          </div>
        </div>
        {/* Menu Icon Select */}
        <div className="mb-4">
          <label htmlFor="icon" className="mb-2 block text-sm font-medium">
            Icon
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <select
                id="icon"
                name="icon"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                value={menu.icon || ''}
                onChange={handleChange}
                aria-describedby="icon-error"
              >
                <option value="" disabled>
                  Pilih Icon
                </option>
                {iconNames.map((name) => {
                  const Icon = icons[name as keyof typeof icons];
                  return (
                    <option key={name} value={name}>
                      {name.replace("Icon", "")}
                    </option>
                  )
                })}
              </select>
              {menu.icon && icons[menu.icon as keyof typeof icons] && (
                <div>
                  Icon Pratinjau: {React.createElement(icons[menu.icon as keyof typeof icons], { className: "h-5 w-5 mb-1" })}
                </div>
              )}
              {/* <BuildingOfficeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
          <div id="icon-error" aria-live="polite" aria-atomic="true">
            {errors.icon && (
              <p className="mt-2 text-sm text-red-500">{errors.icon}</p>
            )}
          </div>
        </div>
        {/* Menu Url */}
        <div className="mb-4">
          <label htmlFor="url" className="mb-2 block text-sm font-medium">
            Url
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="url"
                name="url"
                type="text"
                value={menu.url || ''}
                placeholder="Masukkan Url"
                onChange={handleChange}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="url-error"
              />
              {/* <IdentificationIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
          <div id="url-error" aria-live="polite" aria-atomic="true">
            {errors.url && (
              <p className="mt-2 text-sm text-red-500">{errors.url}</p>
            )}
          </div>
        </div>
        {/* Menu Order */}
        <div className="mb-4">
          <label htmlFor="order" className="mb-2 block text-sm font-medium">
            Urutan
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="order"
                name="order"
                type="number"
                value={menu.order || ''}
                placeholder="Masukkan urutan Menu"
                onChange={handleChange}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="order-error"
              />
              {/* <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
          <div id="order-error" aria-live="polite" aria-atomic="true">
            {errors.order && (
              <p className="mt-2 text-sm text-red-500">{errors.order}</p>
            )}
          </div>
        </div>

        {/* Parent Menu */}
        <div className="mb-4">
          <label htmlFor="parentId" className="mb-2 block text-sm font-medium">
            Parent
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <select
                id="parentId"
                name="parentId"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                value={menu.parentId || ''}
                onChange={handleChange}
                aria-describedby="parentId-error"
              >
                <option value="" disabled>
                  Pilih Parent
                </option>
                {parents.map((parent) => (
                  <option key={parent.id} value={parent.id}>
                    {parent.name}
                  </option>
                ))}
              </select>
              {/* <QuestionMarkCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
          <div id="parentId-error" aria-live="polite" aria-atomic="true">
            {errors.parentId && (
              <p className="mt-2 text-sm text-red-500">{errors.parentId}</p>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/master-menu"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Batal
          </Link>
          <Button type="submit">Tambah Menu</Button>
        </div>
      </div>
    </form>
  );
}
