import Form from '@/app/ui/employees/edit-form';
import Breadcrumbs from '@/app/ui/employees/breadcrumbs';
import { Metadata } from 'next';
import { UUID } from 'crypto';

export const metadata: Metadata = {
  title: 'Edit Pegawai',
};

export default async function Page(props: { params: Promise<{ id: UUID }> }) {
  const params = await props.params;
  const id = params.id;
 
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
      <Form id={id}/>
    </main>
  );
}
