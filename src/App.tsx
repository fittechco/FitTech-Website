import { useState } from "react";
import "./App.css";
import HomePage from "./components/routes/homePage";
import AboutPage from "./components/routes/aboutPage";
import HeaderNav from "./components/sections/header";
import MobileNav, { controlNav } from "./components/sections/mobileNav";
import Footer from "./components/sections/footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const { nav, showNav, hideNav } = controlNav();

  return (
    <div className="App h-full w-full relative">
      <HeaderNav nav={nav} showNav={showNav} />
      <MobileNav hideNav={hideNav} nav={nav} />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
