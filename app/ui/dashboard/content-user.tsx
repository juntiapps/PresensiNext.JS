'use client';

import { useEffect, useState } from "react";
import PresensiButton from "./buttons";
import CardWrapper, { PresensiCard } from "./cards";
import { CiCo } from "@/app/lib/definitions";
import { fetchCiCo } from "@/app/lib/data";
import { CardsSkeleton, SkeletonUserDashboard } from "../skeletons";

export default function DashboardContent({ nama, nip, today }: { nama?: string, nip?: string, today?: Date }) {
    const [data, setData] = useState({} as CiCo)
    const [loading, setLoading] = useState<boolean>(false)


    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true)
        try {
            const data = await fetchCiCo(nip, today);
            setData(data.data);
        } catch (err) {
            console.error('Error loading cico:', err);
        } finally {
            setLoading(false);
        }
    };

    // if (loading) return <SkeletonUserDashboard />;

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-xl font-semibold mb-4">Halo, {nama}</h1>
            {loading ? (<SkeletonUserDashboard />) : (<PresensiCard ci={getTime(data?.waktuMasuk)} co={getTime(data?.waktuPulang)} />)}
            <div className="mt-6">
                <PresensiButton />
            </div>
        </div>
    )
}

export const getTime = (dateTime: string) => {
    const date = new Date(dateTime)
    // Ambil jam:menit:detik
    return date.toTimeString().split(' ')[0]
}