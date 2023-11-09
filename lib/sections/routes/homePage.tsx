"use client";
import { RefObject, useCallback, useRef } from "react";
import Benefits from "../Benefits";
import CustomersReview from "../CustomersReview";
import ContactUs from "../contactUs";
import Hero from "../hero";
import LatestBlogs from "../latestBlogs";
import Services from "../services";
import { ControlNav } from "../mobileNav";
import { useRouter } from "next/navigation";


export default function HomePage() {

  const contactRef = useRef<HTMLDivElement>(null);
  const router = useRouter()
  const handleContactClick = useCallback(() => {
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
  }, [router]);

  return (
    <div className="homePage / flex flex-col gap-20 / w-full h-full relative">
      <Hero onContactClick={handleContactClick} />
      <Benefits />
      <Services />
      <CustomersReview />
      <LatestBlogs />
      <ContactUs myRef={contactRef} />
    </div>
  );
}
