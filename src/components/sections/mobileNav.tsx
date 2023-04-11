import { AnchorHTMLAttributes, useEffect, useRef, useState } from "react";
import MyButton from "../lib/elements/myButton";
import MyIcons from "../lib/myicons";
import {
  SpringValues,
  animated,
  config,
  easings,
  useSpring,
  useTrail,
} from "@react-spring/web";
import useIntersection from "../lib/useIntersection";
import { useNavigate } from "react-router-dom";

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

  const isVisible = useIntersection(navigationRef, "0px");

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
  }, []);

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
  }, [nav]);

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
  }, [nav]);

  return (
    <animated.div
      style={{ ...springs }}
      className={`mobileNav / flex justify-center items-center / fixed top-0 left-0 h-full w-full z-[999]
          bg-mainColor3/70 backdrop-blur-sm  ${nav ? "pointer-events-auto" : "pointer-events-none"
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
  );
}

export function controlNav() {
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
  onClick
}: {
  type: string;
  path: string;
  styles: any;
  text: string;
  onClick: (navigate: any) => void
}) {
  switch (type) {
    case "anchor":
      return (
        <animated.a
          style={styles}
          href={path}
          className={`anchorText / text-thirdColor3 font-montserrat text-2xl`}
        >
          {text}
        </animated.a>
      );
    case "contact":
      const navigate = useNavigate()
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
