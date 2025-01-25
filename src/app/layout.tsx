'use client';
import { StyleProvider } from '@ant-design/cssinjs';
import { Geist, Geist_Mono } from 'next/font/google';
import '@ant-design/v5-patch-for-react-19';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyleProvider hashPriority="high">{children}</StyleProvider>
      </body>
    </html>
  );
}
