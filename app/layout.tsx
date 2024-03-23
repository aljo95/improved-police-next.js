import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Polishändelser',
  description: 'Improved Swedish police reports',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="nord" className="bg-base-100">
      <body className={inter.className}>{children}</body>
    </html>
  )
}