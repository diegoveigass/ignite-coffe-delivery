import type { Metadata } from 'next'
import { Baloo_2, Roboto } from 'next/font/google'
import './globals.css'

const baloo2 = Baloo_2({ subsets: ['latin'], variable: '--font-baloo' })
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Coffe Delivery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${roboto.variable} ${baloo2.variable}`}>
      <body className="bg-zinc-50 text-zinc-950">{children}</body>
    </html>
  )
}
