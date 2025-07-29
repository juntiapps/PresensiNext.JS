import prisma from '../lib/prisma'; // Sesuaikan path sesuai lokasi file prisma.ts Anda

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
        console.error('Error fetching all peran:', error);
        throw new Error('Failed to retrieve peran list.');
    }
}