'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { jakarta } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {
  EmployeesTableType,
  FormattedMenusTable,
} from '@/app/lib/definitions';
import { DeleteMenu, UpdateMenu, CreateMenu } from './buttons';
import { fetchMenus } from '@/app/lib/data';
import { EmployeesTableSkeleton } from '../skeletons';

export default function MenusTable({
  query
}: {
  query: any;
}) {
  // const employees = await fetchFilteredEmployees(query);
  const [menus, setMenus] = useState<FormattedMenusTable[]>([]);
  const [loading, setLoading] = useState(true);
  const [action, setAction] = useState(1);
  const loadData = async () => {
    try {
      const data = await fetchMenus(query);
      // console.log(data,'data')
      if (data.length > 0) {
        setMenus(data);
      }
    } catch (err) {
      console.error('Error loading employees:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [query, action]);

  if (loading) return <EmployeesTableSkeleton />;

  return (<>
    <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <CreateMenu />
          </div>
    <div className="w-full">
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {menus?.map((menu) => (
                  <div
                    key={menu.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            {/* <Image
                              src={menu.image_url}
                              className="rounded-full"
                              alt={`${employee.nama}'s profile picture`}
                              width={28}
                              height={28}
                            /> */}
                            <p>{menu.name}</p>
                          </div>
                        </div>
                        {/* <p className="text-sm text-gray-500">
                          {employee.email}
                        </p> */}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Nama
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Url
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Parent
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium w-32">
                      Aksi
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {menus.map((menu) => (
                    <tr key={menu.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          {/* <Image
                            src={employee.image_url}
                            className="rounded-full"
                            alt={`${employee.nama}'s profile picture`}
                            width={28}
                            height={28}
                          /> */}
                          <p>{menu.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {menu.url}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {menu.parentNama}
                      </td>
                      <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex justify-end gap-3">
                          <UpdateMenu id={menu.id} />
                          <DeleteMenu id={menu.id} loadData={loadData} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
}
