import Form from '@/app/ui/employees/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
// import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { employees } from '@/app/lib/placeholder-data';

export const metadata: Metadata = {
  title: 'Edit Pegawai',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
//   const [invoice, customers] = await Promise.all([
//     fetchInvoiceById(id),
//     fetchCustomers(),
//   ]);
    const employee = employees.find((employee) => employee.id === id);

  if (!employee) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Pegawai', href: '/dashboard/employees' },
          {
            label: 'Edit Pegawai',
            href: `/dashboard/employees/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form employee={employee}  />
    </main>
  );
}
