'use client';
import { useEffect, useState } from 'react';
import { fetchEmployeeByNip } from '@/app/lib/data';
import { FormSkeleton, ProfilSkeleton } from '../skeletons';
import { useRouter } from 'next/navigation';

export default function ProfilePage({
    nip
}: {
    nip: string;
}) {
    const router = useRouter()
    const [data, setData] = useState({} as any);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true)
        try {
            const data = await fetchEmployeeByNip(nip);
            // console.log(data.data)
            setData(data.data);

        } catch (err) {
            console.error('Error loading employees:', err);
        } finally {
            setLoading(false);
        }
    };
    // const handleEdit = async () => {
    //     router.push(`dashboard/employees/${data?.id}/edit`)
    // }

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-xl font-bold text-gray-800">Profil Saya</h1>
            </div>

            {/* Card */}
            {loading ? (<ProfilSkeleton />) : (<div className="bg-white rounded-2xl shadow-md p-6 text-center">
                {/* Info */}
                <h2 className="text-lg font-semibold text-gray-900">{data?.nama}</h2>
                <p className="text-gray-500 text-sm mb-4">{data?.user.email}</p>

                {/* Detail info */}
                <div className="text-left text-sm text-gray-700 space-y-2 mb-6">
                    <div>
                        <span className="font-medium">NIP:</span> {data?.nip}
                    </div>
                    <div>
                        <span className="font-medium">Role:</span> {data?.user.role.nama == 'atasan' ? 'Kepala Departemen' : 'Pegawai'}
                    </div>
                    <div>
                        <span className="font-medium">Departemen:</span> {data?.departemen.nama}
                    </div>
                </div>

                {/* Actions */}
                {/* <div className="space-y-2">
                    <button onClick={handleEdit} className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                        Edit Profil
                    </button>
                </div> */}
            </div>)}

        </div>
    );
}
