import { fetchFilteredEmployees } from '@/app/lib/data';
import { employees } from '@/app/lib/placeholder-data';
import EmployeesTable from '@/app/ui/employees/table';
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

  // const employees = await fetchFilteredEmployees(query);
  // const employees = employees;
  return (
    <main>
      <EmployeesTable employees={employees} />
    </main>
  );
}
