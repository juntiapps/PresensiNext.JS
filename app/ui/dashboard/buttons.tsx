'use client';

import { useRouter } from "next/navigation";

export default function PresensiButton({ label, disabled }: { label: string, disabled: boolean }) {
    const router = useRouter();
    const handleClick = () => {
        // alert('Presensi dilakukan!')
        router.push('/dashboard/presensi')
    }

    return (
        <button
            onClick={handleClick}
            className={`w-full ${disabled?(' bg-gray-300 text-gray-600'):('bg-blue-600 text-white  hover:bg-blue-700')} font-semibold py-3 rounded-xl shadow-lg transition`}
            disabled={disabled}
        >
            {label}
        </button>
    )
}