// import { PrismaClient } from '@prisma/client'
import {PrismaClient} from '../generated/prisma'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
    // 1. Buat Role
    const [adminRole, atasanRole, pegawaiRole] = await Promise.all([
        prisma.role.upsert({ where: { nama: 'admin' }, update: {}, create: { nama: 'admin' } }),
        prisma.role.upsert({ where: { nama: 'atasan' }, update: {}, create: { nama: 'atasan' } }),
        prisma.role.upsert({ where: { nama: 'pegawai' }, update: {}, create: { nama: 'pegawai' } }),
    ])

    // 2. Buat Departemen
    const [tiDept, kepegDept, keuDept] = await Promise.all([
        prisma.departemen.create({ data: { nama: 'Teknologi Informasi' } }),
        prisma.departemen.create({ data: { nama: 'Kepegawaian' } }),
        prisma.departemen.create({ data: { nama: 'Keuangan' } }),
    ])

    // 3. Hash password
    const passwordHash = await bcrypt.hash('password123', 10)

    // 4. Buat User
    const [adminUser, atasanUser, pegawaiUser1, pegawaiUser2, pegawaiUser3] = await Promise.all([
        prisma.user.create({
            data: {
                email: 'admin@example.com',
                password: passwordHash,
                roleId: adminRole.id,
            },
        }),
        prisma.user.create({
            data: {
                email: 'atasan@example.com',
                password: passwordHash,
                roleId: atasanRole.id,
            },
        }),
        prisma.user.create({
            data: {
                email: 'pegawai1@example.com',
                password: passwordHash,
                roleId: pegawaiRole.id,
            },
        }),
        prisma.user.create({
            data: {
                email: 'pegawai2@example.com',
                password: passwordHash,
                roleId: pegawaiRole.id,
            },
        }),
        prisma.user.create({
            data: {
                email: 'pegawai3@example.com',
                password: passwordHash,
                roleId: pegawaiRole.id,
            },
        }),
    ])

    // 5. Buat Pegawai
    const [pegawai1, pegawai2, pegawai3] = await Promise.all([
        prisma.pegawai.create({
            data: {
                nama: 'Budi Santoso',
                nip: '198001012005011001',
                userId: pegawaiUser1.id,
                departemenId: tiDept.id,
            },
        }),
        prisma.pegawai.create({
            data: {
                nama: 'Siti Aminah',
                nip: '198512312010022002',
                userId: pegawaiUser2.id,
                departemenId: kepegDept.id,
            },
        }),
        prisma.pegawai.create({
            data: {
                nama: 'Ahmad Fauzi',
                nip: '199001012015031003',
                userId: pegawaiUser3.id,
                departemenId: keuDept.id,
            },
        }),
    ])

    // 6. Buat Log Presensi Masuk + Pulang
    const now = new Date()
    const twoHoursLater = new Date(now.getTime() + 2 * 60 * 60 * 1000)

    await Promise.all([
        prisma.logPresensi.create({
            data: {
                pegawaiId: pegawai1.id,
                waktuMasuk: now,
                latMasuk: -6.2,
                lngMasuk: 106.8,
                waktuPulang: twoHoursLater,
                latPulang: -6.21,
                lngPulang: 106.81,
            },
        }),
        prisma.logPresensi.create({
            data: {
                pegawaiId: pegawai2.id,
                waktuMasuk: now,
                latMasuk: -6.3,
                lngMasuk: 106.7,
                waktuPulang: twoHoursLater,
                latPulang: -6.31,
                lngPulang: 106.71,
            },
        }),
        prisma.logPresensi.create({
            data: {
                pegawaiId: pegawai3.id,
                waktuMasuk: now,
                latMasuk: -6.25,
                lngMasuk: 106.9,
                waktuPulang: twoHoursLater,
                latPulang: -6.26,
                lngPulang: 106.91,
            },
        }),
    ])

    console.log('✅ Seeder lengkap berhasil: 3 role, 3 user, 3 pegawai, 3 presensi.')
}

main()
    .catch((e) => {
        console.error('❌ Error seeding:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
