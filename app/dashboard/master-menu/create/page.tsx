import Form from '@/app/ui/master-menu/create-form';
import Breadcrumbs from '@/app/ui/master-menu/breadcrumbs';
import { Metadata } from 'next';
import { fetchDepartments, fetchRoles } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Tambah Menu',
};

export default async function Page() {
  // const departments = await fetchDepartments();
  // const roles = await fetchRoles();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Master Menu', href: '/dashboard/master-menu' },
          {
            label: 'Tambah Menu',
            href: '/dashboard/master-menu/create',
            active: true,
          },
        ]}
      />
      {/* <Form departments={departments} roles={roles}/> */}
      <Form/>
    </main>
  );
}
