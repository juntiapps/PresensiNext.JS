import { authOptions } from "@/app/lib/auth/authOptions";
import { jakarta } from "@/app/ui/fonts";
import LogTable from "@/app/ui/presensi/log/table";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: 'Log Presensi',
};

export default async function Page() {
    const session = await getServerSession(authOptions);

    // if (!session) {
    //     redirect('/login');
    // }

    const nip = session? session?.user.nip:""

    // const searchParams = await props.searchParams;
    // const query = searchParams?.query || '';

    return (
        <div className="w-full p-4">
            {/* LOG PRESENSI */}
            <div className="flex w-full items-center justify-between pb-2">
                <h1 className={`${jakarta.className} text-2xl`}>Log Presensi</h1>
            </div>
            <LogTable nip={nip} />
        </div>
    );
}