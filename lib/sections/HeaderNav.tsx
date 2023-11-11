import { useState, useEffect, useRef, CSSProperties } from "react";
import MyIcons from "../myicons";
import { MyText } from "../texts/myText";
import UseIntersection from "../useIntersection";
import Link from "next/link";
import { usePathname } from "next/navigation";

type params = {
  showNav: () => void;
  nav: boolean;
};

export default function HeaderNav({ showNav, nav }: params) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("");
  const navRef = useRef<HTMLDivElement>(null);
  const visible = UseIntersection(navRef, "80px");
  const pathname = usePathname()
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
  const transition: CSSProperties = {
    transition: "transform 1s ease-in-out 0s, opacity 0.2s ease-in-out 0s",

  }
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

        <Link href="/" className="agencyName">
          <MyText
            type={"h3"}
            className={`font-bold  transition-all duration-1000 ease-in-out text-thirdColor  ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"
              }`}
          >
            FitTech
          </MyText>
        </Link>
        <div className="navigations / md:flex gap-8 / hidden  ">
          <Link
            style={{
              ...transition
            }}
            href="/"
            className={`anchorText / ${pathname !== "/" ? "text-thirdColor3/80" : "text-thirdColor3"} hover:text-thirdColor3/100 font-montserrat text-xl transition-all duration-1000 ease-in-out delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"
              }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            style={{
              ...transition
            }}
            className={`anchorText / ${pathname !== "/about" ? "text-thirdColor3/80" : "text-thirdColor3"} hover:text-thirdColor3/100   font-montserrat text-xl transition-transform duration-1000 ease-in-out delay-[400ms] ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"
              } `}
          >
            About Us
          </Link>
          <Link
            style={{
              ...transition
            }}
            href="/blogs"
            className={`anchorText / ${pathname !== "/blogs" ? "text-thirdColor3/90" : "text-thirdColor3"} hover:text-thirdColor3/100 font-montserrat text-xl transition-all duration-1000 ease-in-out delay-[600ms]  ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"
              } `}
          >
            Blogs
          </Link>
        </div>
        <div
          onClick={() => showNav()}
          className={` navMenu // cursor-pointer md:hidden transition-all duration-1000 ease-in-out delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"}`}
        >
          <MyIcons className={""} icon={"navMenu"} />
        </div>
      </div>
    </div >
  );
}
