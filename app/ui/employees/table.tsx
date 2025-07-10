import Image from 'next/image';
import { jakarta } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {
  EmployeesTableType,
  FormattedEmployeesTable,
} from '@/app/lib/definitions';
import { UpdateEmployee } from './buttons';

export default async function EmployeesTable({
  employees,
}: {
  employees: FormattedEmployeesTable[];
}) {
  return (
    <div className="w-full">
      <h1 className={`${jakarta.className} mb-8 text-xl md:text-2xl`}>
        Pegawai
      </h1>
      {/* <Search placeholder="Cari Pegawai..." /> */}
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {employees?.map((employee) => (
                  <div
                    key={employee.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <Image
                              src={employee.image_url}
                              className="rounded-full"
                              alt={`${employee.name}'s profile picture`}
                              width={28}
                              height={28}
                            />
                            <p>{employee.name}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {employee.email}
                        </p>
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
                      Email
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Departemen
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Aksi
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {employees.map((employee) => (
                    <tr key={employee.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <Image
                            src={employee.image_url}
                            className="rounded-full"
                            alt={`${employee.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p>{employee.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {employee.email}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {employee.department_id}
                      </td>
                      <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex justify-end gap-3">
                          <UpdateEmployee id={employee.id} />
                          {/* <DeleteInvoice id={employee.id} /> */}
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
    </div>
  );
}
