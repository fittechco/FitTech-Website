import ContactUs from "../sections/contactUs";
import Hero from "../sections/hero";
import LatestBlogs from "../sections/latestBlogs";
import About from "../sections/about";
import Services from "../sections/services";

export default function HomePage() {
  return (
    <div className="homePage / w-full h-full">
      <Hero />
      <Services />
      <About />
      <LatestBlogs />
      <ContactUs />
    </div>
  );
}
