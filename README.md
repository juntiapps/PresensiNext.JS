# Presensi Next.JS
## _Aplikasi presensi dengan framework Next.JS_
## Fitur
- Manajemen Pegawai
- Manajemen Menu
- Log Presensi
- Dual Role : admin dan pegawai
- geolocation : mengetahui koordinat presensi dan ditampilkan pada peta (leaflet). membutuhkan permission dari browser.
- reset password ke default oleh admin dan ubah password oleh user
- 2FA menggunakan credential (email-password) dan OTP via email

## Fitur Pengembangan Berikutnya
- update foto profil
- New Role : atasan (dapat memonitor presensi bawahannya)
- verifikasi wajah sebelum mengakses halaman presensi

## Tech

Presensi Next.JS menggunakan beberapa teknologi:

- [NextJS] - Fullstack framework menggunakan Javascript
- [node.js] - untuk menjalankan js
- [leaflet] - menampilkan peta
- [nodemailer] - mengirim email otp ke user
- [prisma] - Database ORM


## Installation

Membutuhkan [Node.js](https://nodejs.org/) v18+ untuk menjalankannya.

Setting .env
```sh
BASE_URL=http://localhost:3000
# isi sesual url database yang digunakan
DATABASE_URL=

# isi sesuai settingan SMTP
SMTP_EMAIL=
SMTP_PASS=

AUTH_SECRET="your-secret-here"
NEXTAUTH_URL=http://localhost:3000 
```
Instal dependencies dan devDependencies dan jalankan server.

```sh
cd PresensiNext.JS
npm i
npx prisma generate
npx prisma migrate dev
npx prisma db seed
npm run dev
```
Buka browser dan kunjungi alamat
```sh
localhost:3000
atau apa yang tercantum di console saat npm run dev dijalankan
```
# Panduan
1. login sebagai admin (tanpa OTP)
```sh
username : admin@example.com
password : password123
```
2. tambah pegawai baru di menu pegawai. akan di set password default 'password123'. dapat di ubah di menu profil saat login sebagai pegawai

3. Presensi Rule
- presensi pertama mengisi waktu masuk
- presensi kedua mengisi waktu pulang
- setelah presensi pulang, tombol disabled

## License

MIT

**Free Software**

   [node.js]: <https://nodejs.org>
   [NextJS]: <https://nextjs.org>
   [leaflet]: <https://leafletjs.com/>
   [nodemailer]: <https://nodemailer.com/>
  
   [prisma]: <https://www.prisma.io/>