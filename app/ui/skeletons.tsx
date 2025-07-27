// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      {/* <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div> */}
    </>
  );
}

// app/ui/employees-table-skeleton.tsx
export function EmployeesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="mb-2 flex items-center">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full bg-gray-200"></div>
            <div className="h-4 w-24 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function EmployeesTableRowSkeleton() {
  return (
    <tr className="group">
      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-full bg-gray-200"></div>
          <div className="h-4 w-24 rounded bg-gray-200"></div>
        </div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-4 w-20 rounded bg-gray-200"></div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-4 w-28 rounded bg-gray-200"></div>
      </td>
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-8 w-8 rounded bg-gray-200"></div>
          <div className="h-8 w-8 rounded bg-gray-200"></div>
        </div>
      </td>
    </tr>
  );
}

export function EmployeesTableSkeleton() {
  return (
    <div className={`mt-6 flow-root`}>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
            {/* Mobile Skeleton */}
            <div className="md:hidden">
              {[1, 2, 3, 4, 5].map((i) => (
                <EmployeesMobileSkeleton key={i} />))}
            </div>

            {/* Desktop Skeleton */}
            <table className="hidden min-w-full rounded-md text-gray-900 md:table">
              <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    <div className="h-4 w-20 rounded bg-gray-200"></div>
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    <div className="h-4 w-16 rounded bg-gray-200"></div>
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    <div className="h-4 w-24 rounded bg-gray-200"></div>
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium w-32">
                    <div className="h-4 w-16 rounded bg-gray-200"></div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-900">
                {[1, 2, 3, 4, 5].map((i) => (
                  <EmployeesTableRowSkeleton key={i} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InputSkeleton() {
  return (
    <div className="mb-4">
      <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div> {/* Label placeholder */}
      <div className="h-10 bg-gray-200 rounded-md w-full"></div> {/* Select placeholder */}
    </div>
  )
}

export function FormSkeleton() {
  return (
    <>
      {[1, 2, 3, 4].map((i) => (
        <InputSkeleton key={i} />
      ))}
      <div className="mt-6 flex justify-end gap-4">
        <div className="h-10 w-24 bg-gray-200 rounded-lg"></div> {/* Cancel button placeholder */}
        <div className="h-10 w-32 bg-gray-200 rounded-lg"></div> {/* Submit button placeholder */}
      </div>
    </>
  )
}