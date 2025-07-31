'use client'; // jika menggunakan App Router

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useRouter } from 'next/navigation';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { UUID } from 'crypto';
import { fetchLogPresensiById } from '@/app/lib/data';

// Custom icon agar tidak error saat rendering marker
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});


export default function LokasiPresensiPage({ id }: { id: UUID }) {
    const router = useRouter()
    const [position1, setPosition1] = useState<[number, number] | null>(null);
    const [position2, setPosition2] = useState<[number, number] | null>(null);
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        loadData();
    }, []);


    const loadData = async () => {
        setLoading(true)
        try {
            const res = await fetchLogPresensiById(id);
            const data = res.data
            setPosition1([data.latMasuk, data.lngMasuk])
            setPosition2([data.latPulang, data.lngPulang])
        } catch (err) {
            console.error('Error loading employees:', err);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="min-h-screen">
            <div className="p-4 border-b flex items-center gap-4">
                <button
                    onClick={() => router.back()}
                    className="text-blue-600 text-sm font-large"
                >
                    <ChevronLeftIcon className="h-5 w-5 mb-1" />
                </button>
                <h1 className="text-lg font-bold text-gray-700">📍 Presensi Lokasi</h1>
            </div>
            <h1 className="text-gray-700 my-5">Lokasi Masuk</h1>

            {position1 ? (
                <MapContainer
                    center={position1}
                    zoom={16}
                    scrollWheelZoom={true}
                    className="h-[500px] w-full rounded-xl shadow"
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position1}>
                        <Popup>
                            Lokasi Anda <br />
                            Lat: {position1[0].toFixed(5)}, Lng: {position1[1].toFixed(5)}
                        </Popup>
                    </Marker>
                </MapContainer>
            ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                    🔄 Mendapatkan lokasi pulang...
                </div>
            )}
            <h1 className="text-gray-700 my-5">Lokasi Masuk</h1>

            {position2 ? (<>
                {position2[0] != null ? (<MapContainer
                    center={position2}
                    zoom={16}
                    scrollWheelZoom={true}
                    className="h-[500px] w-full rounded-xl shadow"
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position2}>
                        <Popup>
                            Lokasi Anda <br />
                            Lat: {position2[0].toFixed(5)}, Lng: {position2[1].toFixed(5)}
                        </Popup>
                    </Marker>
                </MapContainer>) : (<div className="flex items-center justify-center h-full text-gray-500 bg-gray-100 py-10">
                    Tidak Ada Data
                </div>)}
            </>

            ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                    🔄 Mendapatkan lokasi pulang...
                </div>
            )}
        </div>
    );
}
