'use client'

import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { clearUser } from '@/app/lib/redux/features/sessionSlice';
import { signOut } from 'next-auth/react';

export default function SideNav() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    // Hapus state user dari Redux
    dispatch(clearUser());

    // Sign out dari NextAuth & redirect ke login
    await signOut({
      redirect: true,
      callbackUrl: '/login',
    });
  };

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-yellow-500 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        {/* <form onSubmit={}> */}
          <button onClick={handleLogout} className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-yellow-600 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        {/* </form> */}
      </div>
    </div>
  );
}
