import ContactUs from "../sections/contactUs";
import Hero from "../sections/hero";
import LatestBlogs from "../sections/latestBlogs";
import About from "../sections/about";
import Services from "../sections/services";

export default function HomePage() {
  return (
    <div className="homePage / flex flex-col gap-20 / w-full h-full relative">
      <Hero />
      <Services />
      <About />
      <LatestBlogs />
      <ContactUs />
    </div>
  );
}
