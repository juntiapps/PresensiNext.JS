// services/pegawaiService.ts (contoh)
import { UUID } from 'crypto';
import prisma from '../lib/prisma'; // Sesuaikan path sesuai lokasi file prisma.ts Anda

export async function createDepartemen(data: {
  nama: string;
}) {
  try {
    const newDepartemen = await prisma.departemen.create({
      data: {
        nama: data.nama,
      },
    });
    return newDepartemen;
  } catch (error) {
    console.error('Error creating departemen:', error);
    throw new Error('Failed to create departemen.');
  }
}

export async function getAllDepartemen() {
  try {
    const result = await prisma.departemen.findMany();
    return result;
  } catch (error) {
    console.error('Error fetching all departemen:', error);
    throw new Error('Failed to retrieve departemen list.');
  }
}

export async function getDepartemenById(id: UUID) {
  try {
    const dep = await prisma.departemen.findUnique({
      where: { id },
    });
    return dep;
  } catch (error) {
    console.error(`Error fetching departemen with ID ${id}:`, error);
    throw new Error('Failed to retrieve departemen.');
  }
}

export async function updateDepartemen(
  id: UUID,
  data: {
    nama?: string;
  }
) {
  try {
    const updatedDepartemen = await prisma.departemen.update({
      where: { id },
      data: {
        ...(data.nama && { nama: data.nama }),
      },
    });
    return updatedDepartemen;
  } catch (error) {
    console.error(`Error updating departemen with ID ${id}:`, error);
    throw new Error('Failed to update departemen.');
  }
}

export async function deleteDepartemen(id: UUID) {
  try {
    const deletedPegawai = await prisma.departemen.delete({
      where: { id },
    });
    return deletedPegawai;
  } catch (error) {
    console.error(`Error deleting pegawai with ID ${id}:`, error);
    if (error instanceof Error && error.message.includes('Foreign key constraint failed')) {
      throw new Error('Cannot delete pegawai because there are associated log presensi records. Please delete log presensi records first.');
    }
    throw new Error('Failed to delete pegawai.');
  }
}