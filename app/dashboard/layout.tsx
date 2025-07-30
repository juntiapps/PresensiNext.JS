import SideNav from '@/app/ui/dashboard/sidenav';
import { getServerSession } from 'next-auth';
import { authOptions } from '../lib/auth/authOptions';
import { redirect } from 'next/navigation';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav roleId={session?.user.role}/>
      </div>
      <div className="grow md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}