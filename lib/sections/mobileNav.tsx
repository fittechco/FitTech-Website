import { AnchorHTMLAttributes, useEffect, useRef, useState } from "react";
import {
  SpringValues,
  animated,
  config,
  easings,
  useSpring,
  useTrail,
} from "@react-spring/web";
import MyButton from "../myButton";
import MyIcons from "../myicons";
import UseIntersection from "../useIntersection";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type params = {
  hideNav: () => void;
  handleContactClick: (navigate: any) => void;
  nav: boolean;
};

const navLinks = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Blogs",
    path: "/blogs",
  },
  {
    text: "About Us",
    path: "/about",
  },
  {
    text: "Contact Us",
  },
];

export default function MobileNav({ hideNav, nav, handleContactClick }: params) {
  const navigationRef = useRef<HTMLDivElement>(null);
  const isVisible = UseIntersection(navigationRef, "80px");

  useEffect(() => {
    const handleClick = (e: any) => {
      // cheking if the user is clicking outside the options container
      if (navigationRef.current! && !navigationRef.current.contains(e.target)) {
        hideNav();
      }
    };
    document.addEventListener("mousedown", handleClick);
    // cleanup
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [hideNav]);

  const [springs, api] = useSpring(() => ({
    // the default position of the nav
    from: {
      y: "-50%",
      opacity: "0%",
    },
  }));

  // watching the nav with useeffect to animate it
  useEffect(() => {
    api.start({
      //changing the position and opacity based on the nav boolean value
      to: {
        y: nav ? "0%" : "-50%",
        opacity: nav ? "100%" : "0%",
      },
    });
  }, [api, nav]);

  const [trail, trailApi] = useTrail(4, (i) => ({
    y: "-100%",
    opacity: "0%",
  }));

  useEffect(() => {
    trailApi.start({
      //changing the position and opacity based on the nav boolean value
      to: {
        y: nav ? "0%" : "-100%",
        opacity: nav ? "100%" : "0%",
      },
    });
  }, [nav, trailApi]);

  return (
    <>
      <div
        style={{
          opacity: nav ? 1 : 0,
          zIndex: nav ? 999 : -1,
          pointerEvents: nav ? "auto" : "none",
          transition: "all 0.1s ease-in-out",
        }}
        className={`ackdrop-filter backdrop-blur-sm fixed top-0 left-0 h-full w-full z-[1000] bg-mainColor3/70  `}
      />
      <animated.div
        style={{ ...springs }}
        className={`mobileNav / flex justify-center items-center / fixed top-0 left-0 h-full w-full z-[1100]
            ${nav ? "pointer-events-auto" : "pointer-events-none"
          } `}
      >
        <div
          ref={navigationRef}
          className="navigations / flex items-center justify-center flex-col gap-6 / p-24 relative "
        >
          {trail.map((props, index) => (
            <AnchorRoute
              onClick={handleContactClick}
              styles={props}
              key={index}
              hideNav={hideNav}
              text={navLinks[index].text}
              type={index < 3 ? "anchor" : "contact"}
              path={navLinks[index].path!}
            />
          ))}
          <div
            onClick={hideNav}
            className="closeBtn absolute top-0 right-0 p-6 cursor-pointer"
          >
            <MyIcons className={"w-12 h-12"} icon={"close"} />
          </div>
        </div>
      </animated.div>
    </>
  );
}

export function ControlNav() {
  const [nav, setNav] = useState(false);

  function showNav() {
    setNav(true);
  }

  function hideNav() {
    setNav(false);
  }

  return {
    nav,
    showNav,
    hideNav,
  };
}

function AnchorRoute({
  text,
  styles,
  type,
  path,
  onClick,
  hideNav,
}: {
  type: string;
  path: string;
  styles: any;
  text: string;
  hideNav: () => void;
  onClick: (navigate: any) => void
}) {
  const pathname = usePathname();
  switch (type) {
    case "anchor":
      return (
        <Link
          onClick={() => {
            hideNav();
          }}
          href={path}>
          <animated.div
            style={styles}
            className={`anchorText / ${pathname === path ? "text-thirdColor3/70" : "text-thirdColor3"} font-montserrat text-2xl`}
          >
            {text}
          </animated.div>
        </Link>
      );
    case "contact":
      return (
        <animated.div
          style={styles}
          className={`anchorText / text-thirdColor3 font-montserrat text-2xl`}>
          <MyButton onClick={onClick} text={"Contact Us"} type={""} form={""} className={""} />
        </animated.div>
      )
    default:
      return (
        <div>
          None
        </div>
      )
  }
}