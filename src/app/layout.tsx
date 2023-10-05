import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { DEFAULT_NAME } from '@/app/constant';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: DEFAULT_NAME,
  description: DEFAULT_NAME,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
