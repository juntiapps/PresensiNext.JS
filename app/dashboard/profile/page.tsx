import { authOptions } from "@/app/lib/auth/authOptions";
import PresensiPage from "@/app/ui/presensi/content";
import ProfilePage from "@/app/ui/profil/content";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Profil',
};

export default async function Page() {
  const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect('/login');
  // }

  const nip = session ? session?.user.nip : ""

  return (
    <div className="w-full">
      <ProfilePage nip={nip} />
    </div>
  );
}