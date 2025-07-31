'use client'; // jika menggunakan App Router

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useRouter } from 'next/navigation';
import { ArrowRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { z } from 'zod';
import { PresenceForm } from '@/app/lib/definitions';
import { submitPresence } from '@/app/lib/actions';
import Loader from '../loader';
import { Button } from '../button';

// Custom icon agar tidak error saat rendering marker
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export const PresenceSchema = z.object({
    nip: z.string().min(1, "NIP wajib diisi"),
    lat: z.number({ required_error: "Latitude wajib diisi" }).refine((val) => val >= -90 && val <= 90, {
        message: "Latitude harus antara -90 sampai 90",
    }),
    lng: z.number({ required_error: "Longitude wajib diisi" }).refine((val) => val >= -180 && val <= 180, {
        message: "Longitude harus antara -180 sampai 180",
    }),
});

export default function PresensiPage({ nip }: { nip: string }) {
    const router = useRouter()
    const [position, setPosition] = useState<[number, number] | null>(null);
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (!navigator.geolocation && typeof window === "undefined") {
            alert('Geolocation tidak didukung browser ini');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition([pos.coords.latitude, pos.coords.longitude]);
            },
            (err) => {
                alert('Gagal mendapatkan lokasi: ' + err.message);
            }
        );
    }, []);

    const handlePresensi = async () => {
        if (!position) {
            alert('Lokasi belum tersedia!');
            return;
        }

        const data: PresenceForm = {
            nip: nip,
            lat: position[0],
            lng: position[1],
        }

        // Kirim presensi ke API, atau simpan lokal
        // alert(`Presensi dikirim! Lokasi: ${position[0]}, ${position[1]}`);
        try {
            setLoading(true)
            const validatedData = PresenceSchema.parse(data);

            await submitPresence(validatedData);
            router.push('/dashboard');
        } catch (err) {
            if (err instanceof z.ZodError) {
                const fieldErrors: Record<string, string> = {};
                err.errors.forEach(error => {
                    if (error.path.length > 0) {
                        fieldErrors[error.path[0]] = error.message;
                    }
                });
                // setErrors(fieldErrors);
                alert(`Error: ${JSON.stringify(fieldErrors)}`);
            } else {
                console.error('Submission error:', err);
            }
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="min-h-screen">
            {/* <h1 className="text-xl font-bold mb-4">Halaman Presensi</h1> */}
            <div className="p-4 border-b flex items-center gap-4">
                <button
                    onClick={() => router.back()}
                    className="text-blue-600 text-sm font-large"
                >
                    <ChevronLeftIcon className="h-5 w-5 mb-1" />
                </button>
                <h1 className="text-lg font-bold text-gray-700">📍 Presensi Lokasi</h1>
            </div>

            {position ? (
                <MapContainer
                    center={position}
                    zoom={16}
                    scrollWheelZoom={true}
                    className="h-[500px] w-full rounded-xl shadow"
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            Lokasi Anda Sekarang <br />
                            Lat: {position[0].toFixed(5)}, Lng: {position[1].toFixed(5)}
                        </Popup>
                    </Marker>
                </MapContainer>
            ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                    🔄 Mendapatkan lokasi...
                </div>
            )}
            {/* <div className="p-4 border-t bg-white space-y-2">
                <button
                    className="w-full py-3 text-lg bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
                    onClick={handlePresensi}
                    disabled={loading}
                >
                    ✅ Submit Presensi <Loader loading={loading}/>
                </button>
            </div> */}
            <div className="p-4 border-t bg-white space-y-2">
                <Button className="mt-4 w-full text-lg" type="submit" disabled={loading} onClick={handlePresensi}>
                    {loading ? (<>
                        Loading... <Loader loading={loading} />
                    </>) : (<>
                        Submit Presensi <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
                    </>)}
                </Button>
            </div>
        </div>
    );
}
