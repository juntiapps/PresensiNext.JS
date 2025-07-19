import Form from '@/app/ui/employees/create-form';
import Breadcrumbs from '@/app/ui/employees/breadcrumbs';
import { Metadata } from 'next';
import { fetchDepartments, fetchRoles } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Tambah Pegawai',
};

export default async function Page() {
  const departments = await fetchDepartments();
  const roles = await fetchRoles();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Pegawai', href: '/dashboard/employees' },
          {
            label: 'Tambah Pegawai',
            href: '/dashboard/employees/create',
            active: true,
          },
        ]}
      />
      <Form departments={departments} roles={roles}/>
    </main>
  );
}
