import { UUID } from 'crypto';
import prisma from '../lib/prisma'; // Sesuaikan path sesuai lokasi file prisma.ts Anda

export async function getUserByEmail(email: string) {
  try {
    const dep = await prisma.user.findUnique({
      where: { email },
      include: { role: true }
    });
    return dep;
  } catch (error) {
    console.error(`Error fetching user with email ${email}:`, error);
    throw new Error('Failed to retrieve user.');
  }
}