'use client';

import { useRouter } from "next/navigation";

export default function PresensiButton() {
    const router = useRouter();
    const handleClick = () => {
        // alert('Presensi dilakukan!')
        router.push('/dashboard/presensi')
    }

    return (
        <button
            onClick={handleClick}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
            Presensi
        </button>
    )
}