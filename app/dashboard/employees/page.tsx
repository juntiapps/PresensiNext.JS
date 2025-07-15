import { fetchFilteredEmployees } from '@/app/lib/data';
import { CreateEmployee } from '@/app/ui/employees/buttons';
import Table from '@/app/ui/employees/table';
import { jakarta } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daftar Pegawai',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  const employees = await fetchFilteredEmployees(query);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${jakarta.className} text-2xl`}>Daftar Pegawai</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CreateEmployee />
      </div>
      <Table employees={employees} />
    </div>
  );
}
