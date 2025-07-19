// services/pegawaiService.ts (contoh)
import { UUID } from 'crypto';
import prisma from '../lib/prisma'; // Sesuaikan path sesuai lokasi file prisma.ts Anda

// --- CREATE Pegawai ---
export async function createPeran(data: {
  nama: string;
}) {
  try {
    const newPeran = await prisma.role.create({
      data: {
        nama: data.nama,
      },
    });
    return newPeran;
  } catch (error) {
    console.error('Error creating peran:', error);
    throw new Error('Failed to create peran.');
  }
}

export async function getAllPeran() {
  try {
    const result = await prisma.role.findMany();
    return result;
  } catch (error) {
    console.error('Error fetching all peran:', error);
    throw new Error('Failed to retrieve peran list.');
  }
}

export async function getPeranById(id: UUID) {
  try {
    const pegawai = await prisma.role.findUnique({
      where: { id },
    });
    return pegawai;
  } catch (error) {
    console.error(`Error fetching peran with ID ${id}:`, error);
    throw new Error('Failed to retrieve peran.');
  }
}

export async function updatePeran(
  id: UUID,
  data: {
    nama?: string;
  }
) {
  try {
    const updatedPeran = await prisma.role.update({
      where: { id },
      data: {
        ...(data.nama && { nama: data.nama }),
      },
    });
    return updatedPeran;
  } catch (error) {
    console.error(`Error updating peran with ID ${id}:`, error);
    throw new Error('Failed to update peran.');
  }
}

export async function deletePeran(id: UUID) {
  try {
    const deletedPeran = await prisma.role.delete({
      where: { id },
    });
    return deletedPeran;
  } catch (error) {
    console.error(`Error deleting peran with ID ${id}:`, error);
    if (error instanceof Error && error.message.includes('Foreign key constraint failed')) {
      throw new Error('Cannot delete peran because there are associated log presensi records. Please delete log presensi records first.');
    }
    throw new Error('Failed to delete peran.');
  }
}