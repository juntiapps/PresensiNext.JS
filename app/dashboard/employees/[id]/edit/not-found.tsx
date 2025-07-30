import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '404 Not Found',
};

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-7xl text-red-500 mb-2 font-bold">404</h1>
            <h2 className="text-2xl text-gray-800 mb-4 font-semibold">Halaman Tidak Ditemukan</h2>
            <p className="text-gray-500 text-lg mb-8 text-center">
                Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
            </p>
            <Link href="/dashboard/employees" className="bg-yellow-500 hover:bg-yellow-600 text-red-500 hover:text-red-600 px-8 py-3 rounded font-bold transition-colors duration-200">
                Kembali ke Daftar Pegawai
            </Link>
        </div>
    );
}