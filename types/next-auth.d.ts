import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      role: string;
      nama: string;
      nip: string;
      departemenId: string;
    };
  }

  interface User {
    id: string;
    email: string;
    role: string;
    nama: string;
    nip: string;
    departemenId: string;
  }
}
