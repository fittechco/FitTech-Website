import { useEffect, useRef, useState } from "react";
import "./App.css";
import HomePage from "./components/routes/homePage";
import AboutPage from "./components/routes/aboutPage";
import HeaderNav from "./components/sections/header";
import MobileNav, { controlNav } from "./components/sections/mobileNav";
import Footer from "./components/sections/footer";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Blog from "./components/sections/blogs/blog";

function App() {
  const { nav, showNav, hideNav } = controlNav();

  const contactRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate()

  const handleContactClick = () => {
    // Update the URL to the homepage
    navigate('/')
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
    <div className="App h-full w-full relative">
      <HeaderNav nav={nav} showNav={showNav} />
      <MobileNav handleContactClick={handleContactClick} hideNav={hideNav} nav={nav} />
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<HomePage contactRef={contactRef} handleContactClick={handleContactClick} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
