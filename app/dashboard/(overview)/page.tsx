import { jakarta } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { Metadata } from 'next';
import CardWrapper from '@/app/ui/dashboard/cards';
import { CardsSkeleton } from '@/app/ui/skeletons';

export const metadata: Metadata = {
    title: 'Dashboard',
};

export default async function Page() {
    return (
        <main>
            <h1 className={`${jakarta.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
        </main>
    );
}
