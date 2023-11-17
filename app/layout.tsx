import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.scss'
import Footer from '@/lib/sections/footer'
import Header from '@/lib/sections/Header'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import { hotjar } from 'react-hotjar'
import Hotjar from '@/lib/Hotjar'
import Image from 'next/image'
import FacebookPixel from '@/lib/FacebookPixel'

const montserrat = Montserrat({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'FitTech',
//   description: 'Unleash the power of custom Shopify solutions for a unique online presence. Mobile apps, web development, and design that stand out. Transform your business with Fittech expertise.',
// }



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Hotjar />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-E6VGS6DTC7" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());

          gtag('config', 'G-E6VGS6DTC7');
        `}
      </Script>
      <body className={`${montserrat.className} App h-full w-full relative`}>
        <Header />
        {children}
        <Footer />
        <FacebookPixel />
      </body>
    </html>
  )
}
