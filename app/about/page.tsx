import AboutPage from '@/lib/sections/routes/aboutPage'
import HomePage from '@/lib/sections/routes/homePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'FitTech - About Us',
    description: `FitTech is an innovative agency specializing in crafting tailored
    Shopify eCommerce websites that empower businesses . Our founders, Mohamad Hamoud and Ali Fouani,
    are driven by a passion for helping businesses transform their
    online presence and maximize their potential.`,
}


export default function Home() {
    return (
        <main className={`w-full h-full min-w-full`}>
            <AboutPage />
        </main>
    )
}