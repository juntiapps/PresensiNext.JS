import { jakarta } from '@/app/ui/fonts';
import { Metadata } from 'next';
import DashboardContent from '@/app/ui/dashboard/content';

export const metadata: Metadata = {
    title: 'Dashboard',
};

export default async function Page() {
    return (
        <main>
            <h1 className={`${jakarta.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <DashboardContent />
        </main>
    );
}
