'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { jakarta } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {
    EmployeesTableType,
    FormattedLogPresensiTable,
    FormattedMenusTable,
} from '@/app/lib/definitions';
import { fetchLogPresensi, fetchMenus } from '@/app/lib/data';
import { EmployeesTableSkeleton } from '../../skeletons';
import { DetailLog } from './buttons';
import { bulanList, tahunList } from '@/app/lib/filter';
import { getTime } from '@/app/lib/utils';

export default function LogTable({
    nip
}: {
    nip: string;
}) {

    const today = new Date()
    const tbulan = today.getMonth() + 1; // 7
    const ttahun = today.getFullYear(); // 2025

    // const employees = await fetchFilteredEmployees(query);

    const [logs, setLogs] = useState<FormattedLogPresensiTable[]>([]);
    const [bulan, setBulan] = useState(tbulan)
    const [tahun, setTahun] = useState(ttahun)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, [bulan, tahun]);

    const loadData = async () => {
        setLoading(true)
        try {
            const data = await fetchLogPresensi(nip, bulan, tahun);
            // console.log(data.data, 'data')
            // if (data?.data.length > 0) {
            setLogs(data.data);
            // }
        } catch (err) {
            console.error('Error loading employees:', err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <EmployeesTableSkeleton />;

    return (<>
        <div className="flex gap-4 w-full">
            <select
                value={bulan}
                onChange={(e) => setBulan(parseInt(e.target.value))}
                className="border px-3 py-2 rounded w-full"
            >
                {bulanList.map((b) => (
                    <option key={b.id} value={b.id}>
                        {b.name}
                    </option>
                ))}
            </select>

            <select
                value={tahun}
                onChange={(e) => setTahun(parseInt(e.target.value))}
                className="border px-3 py-2 rounded w-full"
            >
                {tahunList().map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
        <div className="w-full">
            <div className="mt-6 flow-root">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
                            {/* <div className="md:hidden">
                                {logs?.map((log) => (
                                    <div
                                        key={log.id}
                                        className="mb-2 w-full rounded-md bg-white p-4"
                                    >
                                        <div className="flex items-center justify-between border-b pb-4">
                                            <div>
                                                <div className="mb-2 flex items-center">
                                                    <div className="flex items-center gap-3">

                                                        <p>{log.nama}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div> */}
                            <table className="min-w-full rounded-md text-gray-900 md:table">
                                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                                    <tr>
                                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                            Tanggal
                                        </th>
                                        {nip=="-" && (<th scope="col" className="px-3 py-5 font-medium">
                                            Nama
                                        </th>)}
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Masuk
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Pulang
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium w-32">
                                            Lokasi
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 text-gray-900">
                                    {logs.length > 0 ? logs.map((log) => (
                                        <tr key={log.id} className="group">
                                            <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                                                <div className="flex items-center gap-3">
                                                    <p>{log.tanggal}</p>
                                                </div>
                                            </td>
                                            {nip=="-" && (
                                                <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                                {log?.nama}
                                            </td>
                                            )}
                                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                                {getTime(log?.waktuMasuk) == 'Invalid' ? "-" : getTime(log?.waktuMasuk)}
                                            </td>
                                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                                {getTime(log.waktuPulang) == 'Invalid' ? "-" : log.waktuPulang == null ? "-" : getTime(log.waktuPulang)}
                                            </td>
                                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                                <div className="flex justify-start gap-3">
                                                    <DetailLog id={log.id} />
                                                </div>
                                            </td>
                                        </tr>
                                    )) : <tr>
                                        <td colSpan={4} className="text-center text-gray-500">
                                            Tidak Ada Data
                                        </td>
                                    </tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
