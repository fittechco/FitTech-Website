"use client";
import { RefObject, useCallback, useRef } from "react";
import Benefits from "../Benefits";
import CustomersReview from "../CustomersReview";
import ContactUs from "../contactUs";
import Hero from "../hero";
import LatestBlogs from "../latestBlogs";
import Services from "../services";


export default function HomePage() {

  const contactRef = useRef<HTMLDivElement>(null);
  const handleContactClick = useCallback(() => {
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

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
