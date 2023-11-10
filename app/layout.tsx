import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.scss'
import Footer from '@/lib/sections/footer'
import Header from '@/lib/sections/Header'
import Head from 'next/head'
import Script from 'next/script'

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
      <Head>
        <script dangerouslySetInnerHTML={{
          __html: `
          (function (h, o, t, j, a, r) {
            h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
            h._hjSettings = { hjid: 3709792, hjsv: 6 };
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script'); r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
          })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
        `}} />

      </Head>
      {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-E6VGS6DTC7" />
      <script dangerouslySetInnerHTML={{
        __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());

  gtag('config', 'G-E6VGS6DTC7');
  `
      }}
        async
      /> */}
      <body className={`${montserrat.className} App h-full w-full relative`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
