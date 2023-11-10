"use client"
import React, { useRef } from 'react'
import HeaderNav from './HeaderNav'
import MobileNav, { ControlNav } from './mobileNav'
import { useRouter } from 'next/navigation';

export default function Header() {
    const { nav, showNav, hideNav } = ControlNav();
    const router = useRouter();

    const handleContactClick = () => {
        if (location.pathname === '/') {
            const contactSection = document.getElementById('contact-section');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                hideNav();
            }
        } else {
            router.push('/');
            setTimeout(() => {
                const contactSection = document.getElementById('contact-section');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                    hideNav();
                }
            }, 300);
        }
    }
    return (
        <>
            <HeaderNav nav={nav} showNav={showNav} />
            <MobileNav handleContactClick={handleContactClick} hideNav={hideNav} nav={nav} />
        </>

    )
}
