import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { jakarta } from '@/app/ui/fonts';
import { employees } from '@/app/lib/placeholder-data';

const iconMap = {
  // collected: BanknotesIcon,
  employees: UserGroupIcon,
  // pending: ClockIcon,
  // invoices: InboxIcon,
};

export default async function CardWrapper() {
  // Simulating data fetching
  const numberOfCustomers = employees.length; // Replace with actual data fetching logic
  return (
    <>
      {/* NOTE: Uncomment this code in Chapter 9 */}

      {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
      <Card
        title="Jumlah Pegawai"
        value={numberOfCustomers}
        type="employees"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'employees' ;
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${jakarta.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
