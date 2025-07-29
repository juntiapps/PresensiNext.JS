import { jakarta } from '@/app/ui/fonts';
import { Metadata } from 'next';
import DashboardContentAdmin from '@/app/ui/dashboard/content-admin';
import DashboardContentUser from '@/app/ui/dashboard/content-user';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth/authOptions';

export const metadata: Metadata = {
    title: 'Dashboard',
};

export default async function Page() {
    const session = await getServerSession(authOptions);
    const isAdmin = session?.user.nama == "Admin";
    const nip = session?.user.nip
    const nama = session?.user.nama
    const today = new Date();
    // console.log(isAdmin,'admin')
    return (
        <main>
            <h1 className={`${jakarta.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            {isAdmin ? (<DashboardContentAdmin />) : (<DashboardContentUser nama={nama} nip={nip} today={today}/>)}

        </main>
    );
}
