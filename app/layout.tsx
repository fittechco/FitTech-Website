import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Footer from '@/lib/sections/footer'
import Header from '@/lib/sections/Header'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${montserrat.className} App h-full w-full relative`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
