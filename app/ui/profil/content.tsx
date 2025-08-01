'use client';
import { useEffect, useState } from 'react';
import { fetchEmployeeByNip } from '@/app/lib/data';
import { FormSkeleton, ProfilSkeleton } from '../skeletons';
import { useRouter } from 'next/navigation';
import { KeyIcon } from '@heroicons/react/24/outline';
import { resetPasswordUser } from '@/app/lib/actions';

export default function ProfilePage({
    nip
}: {
    nip: string;
}) {
    const router = useRouter()
    const [data, setData] = useState({} as any);
    const [loading, setLoading] = useState(true);
    const [resPwd, setResPwd] = useState(false)
    const [password, setPassword] = useState('')

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
    const handleEdit = async () => {
        // router.push(`dashboard/employees/${data?.id}/edit`)
        setResPwd(true)
    }

    const handleReset = async () => {
        setLoading(true)
        try {
            const res = await resetPasswordUser(data?.id, password);
            // console.log(data.data)
            loadData()

        } catch (err) {
            console.error('Error reset password:', err);
        } finally {
            setLoading(false);
        }
    }

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
                <div className="space-y-2">
                    <button onClick={handleEdit} className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                        Reset Password
                    </button>
                </div>
                {resPwd && (
                    <div className="mb-4 mt-10">
                        <label htmlFor="password" className="mb-2 block text-sm font-medium">
                            Password Baru
                        </label>
                        <div className="relative mt-2 rounded-md mb-5">
                            <div className="relative">
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                />
                                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                        <button onClick={handleReset} className="w-full py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition">
                            Reset
                        </button>
                    </div>
                )}
            </div>)}

        </div>
    );
}
