import React from 'react';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import AppWalletProvider from '@/app/components/AppWalletProvider';
import { SolanaConnectionProvider } from '@/app/utils/SolanaConnectionProvider';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Reto 5",
  description: "Heavy Duty Camp",
  icons: {
    icon: '/NewBuilder.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SolanaConnectionProvider>
          <AppWalletProvider>
            <NavBar />
            <main className="flex-shrink-0">
              {children}
            </main>
            <Footer />
          </AppWalletProvider>
        </SolanaConnectionProvider>
      </body>
    </html>
  );
}