import { AnchorHTMLAttributes, useEffect, useRef, useState } from "react";
import MyButton from "../lib/elements/myButton";
import MyIcons from "../lib/myicons";
import { SpringValues, animated, config, easings, useSpring, useTrail } from "@react-spring/web";
import useIntersection from "../lib/useIntersection";

type params = {
    hideNav: () => void
    nav: boolean
}

export default function MobileNav({
    hideNav,
    nav
}: params) {
    const navigationRef = useRef<HTMLDivElement>(null)

    const isVisible = useIntersection(navigationRef, "0px")


    useEffect(() => {
        const handleClick = (e: any) => {
            // cheking if the user is clicking outside the options container
            if (navigationRef.current! && !navigationRef.current.contains(e.target)) {
                hideNav()
            }
        }
        document.addEventListener("mousedown", handleClick)
        // cleanup
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

    const [springs, api] = useSpring(() => ({
        // the default position of the nav
        from: {
            y: "-50%",
            opacity: "0%"
        },
    }))

    // watching the nav with useeffect to animate it
    useEffect(() => {
        api.start({
            //changing the position and opacity based on the nav boolean value
            to: {
                y: nav ? "0%" : "-50%",
                opacity: nav ? "100%" : "0%"
            },
        });
    }, [nav])

    const [trail, trailApi] = useTrail(4, i => ({
        y: "-100%",
        opacity: "0%",
    }

    ))

    useEffect(() => {
        trailApi.start({
            //changing the position and opacity based on the nav boolean value
            to: {
                y: nav ? "0%" : "-100%",
                opacity: nav ? "100%" : "0%"
            },
        });
    }, [nav])

    return (
        <animated.div
            style={{ ...springs }}
            className={`mobileNav / flex justify-center items-center / fixed top-0 left-0 h-full w-full
          bg-mainColor3/70 backdrop-blur-sm z-40 ${nav ? "pointer-events-auto" : "pointer-events-none"} `}>
            <div ref={navigationRef} className="navigations / flex items-center justify-center flex-col gap-6 / p-24 relative ">

                {trail.map((props, index) => (
                    <AnchorRoute styles={props} key={index} text={index == 1 ? "About Us" : index == 2 ? "Our Services" : "Blogs"} type={index < 3 ? "anchor" : "contact"} />
                ))}
                <div onClick={hideNav} className="closeBtn absolute top-0 right-0 p-6 cursor-pointer">
                    <MyIcons className={"w-12 h-12"} icon={"close"} />
                </div>
            </div>

        </animated.div>
    )
}


export function controlNav() {
    const [nav, setNav] = useState(false)

    function showNav() {
        setNav(true)
    }

    function hideNav() {
        setNav(false)
    }

    return {
        nav,
        showNav,
        hideNav
    };
}


function AnchorRoute({
    text,
    styles,
    type
}: {
    type: string
    styles: any
    text: string
}) {


    switch (type) {
        case "anchor":
            return (
                <animated.a
                    style={styles}
                    href="#" className={`anchorText / text-thirdColor3 font-montserrat text-2xl`}>
                    {text}
                </animated.a>
            )
        case "contact":
            return (
                <animated.div
                    style={styles}
                    className={`anchorText / text-thirdColor3 font-montserrat text-2xl`}>
                    <MyButton text={"Contact Us"} type={""} form={""} className={""} />
                </animated.div>
            )

        default:
            return (
                <animated.a
                    style={styles}
                    href="#" className={`anchorText / text-thirdColor3 font-montserrat text-2xl`}>
                    {text}
                </animated.a>
            )
    }

}


