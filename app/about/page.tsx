import AboutPage from '@/lib/sections/routes/aboutPage'
import HomePage from '@/lib/sections/routes/homePage'
import { Montserrat } from 'next/font/google'

export default function Home() {
    return (
        <main className={`w-full h-full min-w-full`}>
            <AboutPage />
        </main>
    )
}
