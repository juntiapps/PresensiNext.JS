import prisma from '../lib/prisma'; // Sesuaikan path sesuai lokasi file prisma.ts Anda

export async function saveOtpToDb(email: string, otp: string) {
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 menit

    await prisma.oneTimePassword.create({
        data: {
            email,
            otp,
            expiresAt,
        },
    });
}

export async function verifyOtpInDb(email: string, otp: string): Promise<boolean> {
  const record = await prisma.oneTimePassword.findFirst({
    where: {
      email,
      otp,
      expiresAt: { gt: new Date() },
      verified: false,
    },
    orderBy: { createdAt: "desc" },
  });

  if (!record) return false;

  // Tandai OTP sudah terpakai
  await prisma.oneTimePassword.update({
    where: { id: record.id },
    data: { verified: true },
  });

  return true;
}