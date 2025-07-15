import Form from '@/app/ui/employees/create-form';
import Breadcrumbs from '@/app/ui/employees/breadcrumbs';
import { Metadata } from 'next';
import { departments } from '@/app/lib/placeholder-data';

export const metadata: Metadata = {
  title: 'Tambah Pegawai',
};

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Pegawai', href: '/dashboard/employee' },
          {
            label: 'Tambah Pegawai',
            href: '/dashboard/employees/create',
            active: true,
          },
        ]}
      />
      <Form departments={departments}/>
    </main>
  );
}
