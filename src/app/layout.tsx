import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '  Matheus Lucca',
  description: 'Portfolio of Matheus Lucca',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-zinc-50 bg-no-repeat">{children}</body>
    </html>
  )
}
