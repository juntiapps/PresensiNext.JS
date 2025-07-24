import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/app/lib/prisma";
import bcrypt from "bcrypt";

export const
  authOptions: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          if (!credentials?.email || !credentials?.password) return null;

          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (!user) return null;

          const role = await prisma.role.findUnique({
            where: { id: user.roleId }
          });
          const isAdmin = role?.nama === 'admin';

          let pegawai: any = null;

          if (!isAdmin) {
            pegawai = await prisma.pegawai.findUnique({
              where: { userId: user.id },
            });

            if (!pegawai) return null;

            // const passwordMatch = await bcrypt.compare(
            //   credentials.password,
            //   user.password
            // );

            // if (!passwordMatch) return null;

            // return {
            //   id: user.id,
            //   email: user.email,
            //   role: user.roleId
            // };
            const otpVerified = await prisma.oneTimePassword.findFirst({
              where: {
                email: credentials.email,
                verified: true,
                // expiresAt: { gt: new Date() },
              },
              orderBy: { createdAt: "desc" },
            });

            if (!otpVerified) {
              console.warn("OTP belum diverifikasi.");
              return null;
            }
          }

          // Jika password adalah "bypass", jangan cek password asli
          if (credentials.password !== "bypass") {
            const isValidPassword = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (!isValidPassword) return null;
          }

          return {
            id: user.id,
            email: user.email,
            role: role?.nama,
            nama: isAdmin ? 'Admin' : pegawai?.nama,
            nip: isAdmin ? '-' : pegawai?.nip,
            departemenId: isAdmin ? '-' : pegawai?.departemenId,
          };
        },
      }),
    ],
    pages: {
      signIn: "/login",
    },
    session: {
      strategy: "jwt",
    },
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.user = user;
        }
        return token;
      },
      async session({ session, token }) {
        session.user = token.user as typeof session.user;
        return session;
      },
    },
    secret: process.env.AUTH_SECRET,
  };
