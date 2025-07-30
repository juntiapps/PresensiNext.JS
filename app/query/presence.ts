import { UUID } from 'crypto';
import { FormattedLogPresensiTable, LokasiLogPresensiTable } from '../lib/definitions';
import prisma from '../lib/prisma'; // Sesuaikan path sesuai lokasi file prisma.ts Anda
import { getPegawaiByNip } from './employee';

export async function getCiCo(date: string, nip: string) {
    const targetDate = new Date(date)

    const awalHari = new Date(targetDate)
    awalHari.setHours(0, 0, 0, 0)

    const akhirHari = new Date(targetDate)
    akhirHari.setHours(23, 59, 59, 999)

    try {
        const result = await prisma.logPresensi.findFirst({
            where: {
                pegawai: {
                    nip: nip
                },
                OR: [
                    {
                        waktuMasuk: {
                            gte: awalHari,
                            lte: akhirHari,
                        },
                    },
                    {
                        waktuPulang: {
                            gte: awalHari,
                            lte: akhirHari,
                        },
                    },
                ],
            },
            select: {
                id: true, // or whatever fields you want from logPresensi
                waktuMasuk: true,
                waktuPulang: true,
            }
        });
        return result;
    } catch (error) {
        console.error('Error fetching all cico:', error);
        throw new Error('Failed to retrieve cico');
    }
}

export async function createPresensi(data: {
    nip: string;
    lat: number;
    lng: number;
}) {
    const today = new Date()
    const peg = await getPegawaiByNip(data.nip)

    const check = await getCiCo(today.toISOString(), data.nip)

    let finalData: any

    if (check) {
        finalData = {
            waktuPulang: today,
            latPulang: data.lat,
            lngPulang: data.lng,
        }
    } else {
        finalData = {
            pegawaiId: peg?.id,
            waktuMasuk: today,
            latMasuk: data.lat,
            lngMasuk: data.lng,
        }
    }


    try {
        let present: any
        if (check) {
            present = await prisma.logPresensi.update({
                where: { id: check.id },
                data: finalData
            })
        } else {
            present = await prisma.logPresensi.create({
                data: finalData,
            });
        }

        return present;
    } catch (error) {
        console.error('Error creating presensi:', error);
        throw new Error('Failed to create presensi.');
    }
}

export async function getLogPresensi(nip: string, bulan: number, tahun: number) {
    try {
        const startDate = new Date(tahun, bulan - 1, 1); // bulan - 1 karena index 0 (Januari = 0)
        const endDate = new Date(tahun, bulan, 1); // bulan berikutnya

        const result = await prisma.logPresensi.findMany({
            where: {
                pegawai: {
                    nip: nip,
                },
                waktuMasuk: {
                    gte: startDate,
                    lt: endDate,
                },
            },
            select: {
                id: true,
                waktuMasuk: true,
                waktuPulang: true,
                pegawai: {
                    select: {
                        nama: true,
                    },
                },
            },
        });

        const formatted: any[] = result.map((item) => {
            const getTanggal = (date: Date | null | undefined) => {
                return date ? date.toISOString().split('T')[0] : '';
            };

            const tanggal = getTanggal(item.waktuMasuk || item.waktuPulang);

            return {
                id: item.id,
                tanggal,
                nama: item.pegawai?.nama,
                waktuMasuk: item.waktuMasuk,
                waktuPulang: item.waktuPulang,
            };
        });
        return formatted;
    } catch (error) {
        console.error('Error fetching all cico:', error);
        throw new Error('Failed to retrieve cico');
    }
}

export async function getLogPresensiById(id: UUID) {
    try {
        const result = await prisma.logPresensi.findMany({
            where: {
                id: id
            },
            select: {
                id: true,
                waktuMasuk: true,
                waktuPulang: true,
                pegawai: {
                    select: {
                        nama: true,
                    },
                },
                latMasuk: true,
                lngMasuk: true,
                latPulang: true,
                lngPulang: true
            },
        });

        const formatted: LokasiLogPresensiTable[] = result.map((item) => {
            return {
                id: item.id,
                // tanggal,
                // nama: item.pegawai?.nama,
                // waktuMasuk: getJam(item.waktuMasuk),
                // waktuPulang: getJam(item.waktuPulang),
                latMasuk: item.latMasuk,
                lngMasuk: item.lngMasuk,
                latPulang: item.latPulang,
                lngPulang: item.lngPulang
            };
        });
        return formatted[0];
    } catch (error) {
        console.error('Error fetching all cico:', error);
        throw new Error('Failed to retrieve cico');
    }
}