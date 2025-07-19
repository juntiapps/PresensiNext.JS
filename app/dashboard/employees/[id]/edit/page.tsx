import Form from '@/app/ui/employees/edit-form';
import Breadcrumbs from '@/app/ui/employees/breadcrumbs';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchDepartments, fetchDetailEmployee, fetchRoles } from '@/app/lib/data';
import { UUID } from 'crypto';

export const metadata: Metadata = {
  title: 'Edit Pegawai',
};

export default async function Page(props: { params: Promise<{ id: UUID }> }) {
  const params = await props.params;
  const id = params.id;
  // const employee = employees.find((employee: any) => employee.id === id);
  const employee = await fetchDetailEmployee(id);
  const departments = await fetchDepartments();
  const roles = await fetchRoles();

  // console.log('Employee:', employee);

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
      <Form employee={employee} departments={departments} roles={roles}/>
    </main>
  );
}
