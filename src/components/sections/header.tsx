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
  const [scrollDirection, setScrollDirection] = useState("");
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
      className={`headerNav container mx-auto transition-all duration-300 z-[999]
   ${scrollDirection === "down" && scrollPosition > 80 ? "-translate-y-full" : "translate-y-0"
        } w-full h-20 fixed top-0 left-0 right-0  max-sm:p-0`}>
      <div className={`header-nav-wrapper 
      ${scrollPosition > 80
          ? " bgLinear backdrop-blur-sm "
          : " bgLinear  backdrop-blur-sm "
        }  / flex justify-between items-center / border-mainColor2 border border-t-0  transition-all duration-300 w-full h-full px-4 rounded-b-3xl`}>

        <a href="/" className="agencyName">
          <MyText
            type={"h3"}
            className={`font-bold text-thirdColor transition-all duration-1000 ease-in-out  ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"
              }`}
          >
            FitTech
          </MyText>
        </a>
        <div className="navigations / md:flex gap-8 / hidden  ">
          <a
            href="/"
            className={`anchorText / text-thirdColor3 font-montserrat text-xl transition-all duration-1000 ease-in-out delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"
              }`}
          >
            Home
          </a>
          <a
            href="/about"
            className={`anchorText / text-thirdColor3 font-montserrat text-xl transition-all duration-1000 ease-in-out delay-[400ms] ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"
              } `}
          >
            About Us
          </a>
          <a
            href="/blogs"
            className={`anchorText / text-thirdColor3 font-montserrat text-xl transition-all duration-1000 ease-in-out delay-[600ms]  ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"
              } `}
          >
            Blogs
          </a>
        </div>
        <div
          onClick={() => showNav()}
          className={` navMenu // cursor-pointer md:hidden transition-all duration-1000 ease-in-out delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"}`}
        >
          <MyIcons className={""} icon={"navMenu"} />
        </div>
      </div>
    </div>
  );
}
