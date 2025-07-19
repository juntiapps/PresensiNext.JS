-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pegawai" (
    "id" UUID NOT NULL,
    "nama" TEXT NOT NULL,
    "nip" TEXT NOT NULL,
    "userId" UUID,
    "departemenId" UUID,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pegawai_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Departemen" (
    "id" UUID NOT NULL,
    "nama" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Departemen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogPresensi" (
    "id" UUID NOT NULL,
    "pegawaiId" UUID NOT NULL,
    "waktuMasuk" TIMESTAMP(3) NOT NULL,
    "latMasuk" DOUBLE PRECISION NOT NULL,
    "lngMasuk" DOUBLE PRECISION NOT NULL,
    "waktuPulang" TIMESTAMP(3),
    "latPulang" DOUBLE PRECISION,
    "lngPulang" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LogPresensi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pegawai_nip_key" ON "Pegawai"("nip");

-- CreateIndex
CREATE UNIQUE INDEX "Pegawai_userId_key" ON "Pegawai"("userId");

-- AddForeignKey
ALTER TABLE "Pegawai" ADD CONSTRAINT "Pegawai_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pegawai" ADD CONSTRAINT "Pegawai_departemenId_fkey" FOREIGN KEY ("departemenId") REFERENCES "Departemen"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogPresensi" ADD CONSTRAINT "LogPresensi_pegawaiId_fkey" FOREIGN KEY ("pegawaiId") REFERENCES "Pegawai"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
