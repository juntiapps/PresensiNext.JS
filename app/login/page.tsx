// 'use client';

import { Metadata } from "next";
import AcmeLogo from "../ui/acme-logo";
import LoginForm from "../ui/login-form";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth/authOptions";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Login',
};

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/dashboard');
  }
  
  return (
    // <form onSubmit={handleLogin} className="flex flex-col gap-2 max-w-sm mx-auto mt-20">
    //   <input type="email" placeholder="Email" value={email} onChange={e => setEmailInput(e.target.value)} className="border p-2" />
    //   <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2" />
    //   <button className="bg-blue-500 text-white py-2">Kirim OTP</button>
    // </form>
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-yellow-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
