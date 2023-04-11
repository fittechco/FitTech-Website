import { useState, useEffect, useRef } from "react";
import { MyText } from "../lib/texts/myText";
import MyIcons from "../lib/myicons";
import useIntersection from "../lib/useIntersection";

type params = {
  showNav: () => void;
  nav: boolean;
};

export default function HeaderNav({ showNav, nav }: params) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("none");
  const navRef = useRef<HTMLDivElement>(null);
  const visible = useIntersection(navRef, "0px");

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const previousScrollY = scrollYRef.current;
      if (currentScrollY > previousScrollY && currentScrollY > 100) {
        setScrollDirection("down");
      } else if (currentScrollY < previousScrollY && currentScrollY > 100) {
        setScrollDirection("up");
      }

      scrollYRef.current = currentScrollY;
    };

    const scrollYRef = { current: 0 };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className={`headerNav / flex justify-between items-center / transition-all duration-300 
         ${
           scrollPosition > 80
             ? " bgLinear backdrop-blur-sm "
             : " bgLinearOff  backdrop-blur-0 "
         } ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      } w-full h-20 p-6 md:px-20 fixed top-0 z-20`}
    >
      <a href="/" className="agencyName">
        <MyText
          type={"h3"}
          className={`font-bold text-thirdColor transition-all duration-500 ease-in-out  ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"
          }`}
        >
          FitTech
        </MyText>
      </a>
      <div className="navigations / md:flex gap-8 / hidden  ">
        <a
          href="/"
          className={`anchorText / text-thirdColor3 font-montserrat text-xl transition-all duration-500 ease-in-out delay-200 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"
          }`}
        >
          Home
        </a>
        <a
          href="/about"
          className={`anchorText / text-thirdColor3 font-montserrat text-xl transition-all duration-500 ease-in-out delay-[400ms] ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"
          } `}
        >
          About Us
        </a>
        <a
          href="#"
          className={`anchorText / text-thirdColor3 font-montserrat text-xl transition-all duration-500 ease-in-out delay-[600ms]  ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"
          } `}
        >
          Blogs
        </a>
      </div>
      <div
        onClick={() => showNav()}
        className="navMenu // cursor-pointer md:hidden"
      >
        <MyIcons className={""} icon={"navMenu"} />
      </div>
    </div>
  );
}
