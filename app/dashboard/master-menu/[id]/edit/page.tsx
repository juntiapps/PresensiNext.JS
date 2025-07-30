import Form from '@/app/ui/master-menu/edit-form';
import Breadcrumbs from '@/app/ui/employees/breadcrumbs';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchDepartments, fetchDetailEmployee, fetchRoles } from '@/app/lib/data';
import { UUID } from 'crypto';

export const metadata: Metadata = {
  title: 'Edit Menu',
};

export default async function Page(props: { params: Promise<{ id: UUID }> }) {
  const params = await props.params;
  const id = params.id;

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Master Menu', href: '/dashboard/master-menu' },
          {
            label: 'Edit Menu',
            href: `/dashboard/master-menu/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form id={id}/>
    </main>
  );
}
