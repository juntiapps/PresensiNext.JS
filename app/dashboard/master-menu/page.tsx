import { fetchFilteredEmployees } from '@/app/lib/data';
import { CreateMenu } from '@/app/ui/master-menu/buttons';
import Table from '@/app/ui/master-menu/table';
import { jakarta } from '@/app/ui/fonts';
import { EmployeesTableSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';
import TabMenu from '@/app/ui/master-menu/tabmenu';

export const metadata: Metadata = {
  title: 'Master Menu',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${jakarta.className} text-2xl`}>Master Menu</h1>
      </div>
      <TabMenu query={query}/>
      {/* <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CreateMenu />
      </div>
        <Table query={query} /> */}
    </div>
  );
}