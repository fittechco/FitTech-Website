import ContactUs from "../sections/contactUs";
import Hero from "../sections/hero";
import LatestBlogs from "../sections/latestBlogs";
import About from "../sections/about";
import Services from "../sections/services";
import { RefObject, useRef } from "react";
import Benefits from "../sections/Benefits";

export default function HomePage({
  contactRef,
  handleContactClick
}: {
  contactRef: RefObject<HTMLDivElement>,
  handleContactClick: () => void
}) {

  return (
    <div className="homePage / flex flex-col gap-20 / w-full h-full relative">
      <Hero onContactClick={handleContactClick} />
      <Benefits />
      <Services />
      <About />
      <LatestBlogs />
      <ContactUs myRef={contactRef} />
    </div>
  );
}
