import { authOptions } from "@/app/lib/auth/authOptions";
import { jakarta } from "@/app/ui/fonts";
import LokasiPresensiPage from "@/app/ui/presensi/log/detail/content";
import LogTable from "@/app/ui/presensi/log/table";
import { UUID } from "crypto";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: 'Lokasi Presensi',
};

export default async function Page(props: { params: Promise<{ id: UUID }> }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/login');
    }

    const params = await props.params;
    const id = params.id;

    return (
        <div className="w-full p-4">
            {/* <div className="flex w-full items-center justify-between pb-2">
                <h1 className={`${jakarta.className} text-2xl`}>Lokasi Presensi</h1>
            </div> */}
            <LokasiPresensiPage id={id} />
        </div>
    );
}