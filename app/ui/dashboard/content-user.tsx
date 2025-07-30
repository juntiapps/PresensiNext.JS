'use client';

import { useEffect, useState } from "react";
import PresensiButton from "./buttons";
import CardWrapper, { PresensiCard } from "./cards";
import { CiCo } from "@/app/lib/definitions";
import { fetchCiCo } from "@/app/lib/data";
import { CardsSkeleton, SkeletonUserDashboard } from "../skeletons";
import { getTime } from "@/app/lib/utils";

export default function DashboardContent({ nama, nip, today }: { nama?: string, nip?: string, today?: Date }) {
    const [data, setData] = useState({} as CiCo)
    const [loading, setLoading] = useState<boolean>(false)
    const [label,setLabel] = useState<string>('');

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true)
        try {
            const data = await fetchCiCo(nip, today);
            setData(data.data);
            setStatus(data.data)
            // console.log(data.data)
        } catch (err) {
            console.error('Error loading cico:', err);
        } finally {
            setLoading(false);
        }
    };

    const setStatus = (data: CiCo) => {
        if(data.waktuMasuk==null){
            setLabel('Presensi Masuk')
        } else if(data.waktuPulang==null) {
            setLabel('Presensi Pulang')
        } else {
            setLabel('Presensi')
        }
    }
    // if (loading) return <SkeletonUserDashboard />;

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-xl font-semibold mb-4">Halo, {nama}</h1>
            {loading ? (<SkeletonUserDashboard />)
                : (<PresensiCard
                    ci={getTime(data?.waktuMasuk) == 'Invalid' ? "-" : getTime(data?.waktuMasuk)}
                    co={getTime(data?.waktuPulang) == 'Invalid' ? "-" : data?.waktuPulang == null ? "-" : getTime(data?.waktuPulang)}
                />)}
            <div className="mt-6">
                <PresensiButton label={label} disabled={data.waktuPulang!=null}/>
            </div>
        </div>
    )
}

// export const getTime = (dateTime: string) => {
//     const date = new Date(dateTime)
//     // Ambil jam:menit:detik
//     return date.toTimeString().split(' ')[0]
// }