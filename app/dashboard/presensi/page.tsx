import { authOptions } from "@/app/lib/auth/authOptions";
import PresensiPage from "@/app/ui/presensi/content";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Presensi',
};

export default async function Page() {
  const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect('/login');
  // }

  const nip = session? session?.user.nip:''

  // const searchParams = await props.searchParams;
  // const query = searchParams?.query || '';

  return (
    <div className="w-full">
      <PresensiPage nip={nip} />
    </div>
  );
}