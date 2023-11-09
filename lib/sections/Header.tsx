"use client"
import React, { useRef } from 'react'
import HeaderNav from './HeaderNav'
import MobileNav, { ControlNav } from './mobileNav'
import { useRouter } from 'next/navigation';

export default function Header() {
    const { nav, showNav, hideNav } = ControlNav();

    const router = useRouter();
    const handleContactClick = () => {
        // Update the URL to the homepage
        router.push('/')
        // Scroll to the contact section
        const contactSection = document.getElementById('contact-section');
        if (location.pathname === '/') {
            const contactSection = document.getElementById('contact-section');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
    return (
        <>
            <HeaderNav nav={nav} showNav={showNav} />
            <MobileNav handleContactClick={handleContactClick} hideNav={hideNav} nav={nav} />
        </>

    )
}
