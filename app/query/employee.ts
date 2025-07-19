// services/pegawaiService.ts (contoh)
import { UUID } from 'crypto';
import prisma from '../lib/prisma'; // Sesuaikan path sesuai lokasi file prisma.ts Anda
import bcrypt from 'bcrypt'

// --- CREATE Pegawai ---
export async function createPegawai(data: {
  nama: string;
  nip: string;
  departemenId?: UUID; // Opsional
  email: string;
  roleId: UUID; // Role ID untuk User yang akan dibuat
}) {
  try {
    const passwordHash = await bcrypt.hash('password123', 10)
    const prismaData: any = {
      nama: data.nama,
      nip: data.nip,
      departemen: {
        connect: { id: data.departemenId }, // Default ke departemen pertama jika tidak ada
      },
      user: {
        create: {
          email: data.email || `${data.nama.toLowerCase().replace(/\s+/g, '')}@example.com`, // Default email jika tidak ada
          password: passwordHash, // Hash password sebelum disimpan
          role: { connect: { id: data.roleId } },
        }
      },
    };

    const newPegawai = await prisma.pegawai.create({
      data: prismaData,
    });

    return newPegawai;
  } catch (error) {
    console.error('Error creating pegawai:', error);
    throw new Error('Failed to create pegawai.');
  }
}

// --- READ Pegawai ---
export async function getAllPegawai() {
  try {
    const pegawaiList = await prisma.pegawai.findMany({
      include: {
        user: {
          select: {
            id: true,
            email: true,
            role: {
              select: {
                id: true,
                nama: true,
              }
            },
          },
        },
        departemen: {
          select: {
            id: true,
            nama: true,
          },
        },
      },
    });
    const count = await prisma.pegawai.count();

    const result = {
      count: count,
      data: pegawaiList,
    };
    return result;
  } catch (error) {
    console.error('Error fetching all pegawai:', error);
    throw new Error('Failed to retrieve pegawai list.');
  }
}

export async function getPegawaiById(id: UUID) {
  try {
    const pegawai = await prisma.pegawai.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            role: {
              select: {
                id: true,
                nama: true,
              }
            },
          },
        },
        departemen: {
          select: {
            id: true,
            nama: true,
          },
        },
      },
    });
    return pegawai;
  } catch (error) {
    console.error(`Error fetching pegawai with ID ${id}:`, error);
    throw new Error('Failed to retrieve pegawai.');
  }
}

// --- UPDATE Pegawai ---
export async function updatePegawai(
  id: UUID,
  data: {
    nama?: string;
    nip?: string;
    email?: string;
    departemenId?: UUID
    roleId?: UUID;
  }
) {
  try {
    const prismaData: any = {
      ...(data.nama && { nama: data.nama }),
      ...(data.nip && { nip: data.nip }),
      ...(data.departemenId && { departemen: { connect: { id: data.departemenId } } }),
      ...(data.email && {
        user: {
          update: {
            email: data.email,
            role: { connect: { id: data.roleId } },
          },
        },
      }),
    };

    const updatedPegawai = await prisma.pegawai.update({
      where: { id },
      data: prismaData
    });

    if (updatedPegawai.userId && data.email) {
      await prisma.user.update({
        where: { id: updatedPegawai.userId },
        data: {
          email: data.email,
        },
      });
    }
    return updatedPegawai;
  } catch (error) {
    console.error(`Error updating pegawai with ID ${id}:`, error);
    throw new Error('Failed to update pegawai.');
  }
}

// --- DELETE Pegawai ---
export async function deletePegawai(id: UUID) {
  try {
    const deletedPegawai = await prisma.pegawai.delete({
      where: { id },
    });

    if (deletedPegawai.userId) {
      await prisma.user.delete({
        where: { id: deletedPegawai.userId },
      });
    }

    return deletedPegawai;
  } catch (error) {
    console.error(`Error deleting pegawai with ID ${id}:`, error);
    // throw new Error('Failed to delete pegawai. Make sure there are no related LogPresensi records.');
    // Specific error handling for foreign key constraints:
    if (error instanceof Error && error.message.includes('Foreign key constraint failed')) {
      throw new Error('Cannot delete pegawai because there are associated log presensi records. Please delete log presensi records first.');
    }
    throw new Error('Failed to delete pegawai.');
  }
}