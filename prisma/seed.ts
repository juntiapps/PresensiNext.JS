import { PrismaClient } from '@prisma/client'
// import {PrismaClient} from '../generated/prisma'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
    // 1. Buat Role
    const [adminRole, pegawaiRole] = await Promise.all([
        prisma.role.upsert({ where: { nama: 'admin' }, update: {}, create: { nama: 'admin' } }),
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
    const [adminUser, pegawaiUser1, pegawaiUser2, pegawaiUser3] = await Promise.all([
        prisma.user.create({
            data: {
                email: 'admin@example.com',
                password: passwordHash,
                roleId: adminRole.id,
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
    const twoHoursLater = new Date(now.getTime() + 8 * 60 * 60 * 1000)

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

    //7. Generate menu
    const [hom, peg, mas, log, prof] = await Promise.all([
        prisma.menu.create({
            data: {
                name: 'Home',
                icon: 'HomeIcon',
                url: '/dashboard',
                parentId: null,
                order: 1
            },
        }),
        prisma.menu.create({
            data: {
                name: 'Daftar Pegawai',
                icon: 'UserGroupIcon',
                url: '/dashboard/employees',
                parentId: null,
                order: 2
            },
        }),
        prisma.menu.create({
            data: {
                name: 'Master',
                icon: 'Bars3Icon',
                url: '/dashboard/master',
                order: 3
            },
        }),
        prisma.menu.create({
            data: {
                name: 'Log Presensi',
                icon: 'CheckBadgeIcon',
                url: '/dashboard/presensi/log',
                parentId: null,
                order: 4
            },
        }),
        prisma.menu.create({
            data: {
                name: 'Profil',
                icon: 'UserCircleIcon',
                url: '/dashboard/profile',
                parentId: null,
                order: 2
            },
        }),
    ])

    const [mas_menu] = await Promise.all([
        prisma.menu.create({
            data: {
                name: 'Master Menu',
                icon: 'CubeIcon',
                url: '/dashboard/master-menu',
                parentId: mas.id,
                order: 3
            },
        }),
    ])
    //8. Generate Menu Role

    const menuRoles = [
        // Hak Akses untuk Role Admin (akses semua menu kecuali Profil)
        { menuId: hom.id, roleId: adminRole.id }, // Home
        { menuId: peg.id, roleId: adminRole.id }, // Daftar Pegawai
        { menuId: mas.id, roleId: adminRole.id }, // Master
        { menuId: mas_menu.id, roleId: adminRole.id }, // Master Menu
        { menuId: log.id, roleId: adminRole.id }, // Log Presensi

        // Hak Akses untuk Role Pegawai (Home, Profil, Log Presensi)
        { menuId: hom.id, roleId: pegawaiRole.id }, // Home
        { menuId: log.id, roleId: pegawaiRole.id }, // Log Presensi
        { menuId: prof.id, roleId: pegawaiRole.id }, // Profil
    ];

    await prisma.menuRole.createMany({
        data: menuRoles,
        skipDuplicates: true,
    });

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
