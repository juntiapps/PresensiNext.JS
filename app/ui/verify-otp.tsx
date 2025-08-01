'use client';
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { jakarta } from "./fonts";
import { Button } from "./button";
import { RootState } from "../lib/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { resetOtp, setOtpVerified } from "../lib/redux/features/otpSlice";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Loader from "./loader";

export default function VerifyOtpForm() {
  const email = useSelector((state: RootState) => state.otp.email);
  const { data: session, status } = useSession();
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const router = useRouter();
  const dispatch = useDispatch();

  const [otp, setOtp] = useState(Array(6).fill(""));
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(60);
  const [resending, setResending] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // console.log('here')
    if (status === 'loading') return; // Tunggu session ready

    // Kalau belum login, redirect ke /login
    if (!session) {
      if (!email) {
        router.replace('/login');
      }

    } else {
      router.replace('/dashboard');
    }
  }, [session, email, router]);


  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return; // hanya angka

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    const code = otp.join("");

    const res = await fetch("/api/otp/verify", {
      method: "POST",
      body: JSON.stringify({ email: email, otp: code }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      dispatch(setOtpVerified(true));
      await signIn("credentials", { email, password: "bypass", redirect: false });
      router.push("/dashboard");
      dispatch(resetOtp())
    } else {
      const data = await res.json();
      setError(data.message || "OTP salah");
    }
    setLoading(false)
  };

  const resendOtp = async () => {
    setResending(true);
    // console.log("Resending OTP...", email);
    const res = await fetch("/api/otp/generate", {
      method: "POST",
      body: JSON.stringify({ email: email }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      alert("OTP baru telah dikirim ke email Anda.");
      setTimer(60); // restart timer
    } else {
      alert("Gagal mengirim ulang OTP.");
    }
    setResending(false);
  };

  return (<>
    {status === 'loading' ? (
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <div className="flex flex-col items-center justify-center py-12">
          <Loader loading={true} />
          <p className="mt-4 text-gray-600">Memuat...</p>
        </div>
      </div>
    ) : (
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className={`${jakarta.className} text-2xl font-bold mb-4`}>Verifikasi OTP</h1>
          <p className="mb-4 text-gray-600 text-center">Masukkan kode OTP yang telah dikirim ke email Anda</p>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <div className="flex justify-between w-full">
            {otp.map((value, index) => (
              <input
                key={index}
                ref={(el) => { inputsRef.current[index] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={value}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center text-xl border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>
          <Button className="mt-4 w-full">
            {loading ? (
              <>Loading... <Loader loading={loading} /> </>
            ) : (
              <>Verifikasi <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" /></>
            )}
          </Button>
          <div className="text-center text-sm mt-2 text-gray-500">
            {timer > 0 ? (
              <span>Kirim ulang OTP dalam {timer} detik</span>
            ) : (
              <button
                type="button"
                onClick={resendOtp}
                className="text-blue-600 hover:underline disabled:opacity-50"
                disabled={resending}
              >
                Kirim Ulang OTP
              </button>
            )}
          </div>
        </div>
      </form>)}</>
  );
}
