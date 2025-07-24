import nodemailer from 'nodemailer';

export async function sendOtpEmail(email: string, otp: string) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Presensi Next.JS App" <${process.env.SMTP_EMAIL}>`,
    to: email,
    subject: 'Kode OTP Login',
    text: `Kode OTP kamu adalah: ${otp}. kode ini berlaku selama 5 menit.`,
  });
}
