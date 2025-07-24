'use client';

import '@/app/ui/global.css';
import { jakarta } from '@/app/ui/fonts'
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/app/lib/redux/store";
import { use } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <html lang="en">
          <body className={`${jakarta.className} antialiased`}>{children}</body>
        </html>
      </Provider>
    </SessionProvider>
    // <html lang="en">
    //   <body className={`${jakarta.className} antialiased`}>{children}</body>
    // </html>
  );
}