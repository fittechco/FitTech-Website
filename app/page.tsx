import HomePage from '@/lib/sections/routes/homePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FitTech',
  description: 'Unleash the power of custom Shopify solutions for a unique online presence. Mobile apps, web development, and design that stand out. Transform your business with Fittech expertise.',
}

export default function Home() {
  return (
    <main className={`w-full h-full min-w-full`}>
      <HomePage />
    </main>
  )
}
