import { useState, useEffect, useRef } from "react";
import { MyText } from "../lib/texts/myText";
import MyIcons from "../lib/myicons";

type params = {
    showNav: () => void
    nav: boolean
}

export default function HeaderNav({
    showNav,
    nav
}: params) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('none');
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleScroll() {
            setScrollPosition(window.pageYOffset);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const previousScrollY = scrollYRef.current;
            if (currentScrollY > previousScrollY && currentScrollY > 100) {
                setScrollDirection('down');
            } else if (currentScrollY < previousScrollY && currentScrollY > 100) {
                setScrollDirection('up');
            }

            scrollYRef.current = currentScrollY;
        };

        const scrollYRef = { current: 0 };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    
    return (
        <div className={`headerNav / flex justify-between items-center / transition-all duration-300 
         ${scrollPosition > 80 ? " bgLinear backdrop-blur-sm " : " bgLinearOff  backdrop-blur-0 "} ${scrollDirection === "down"?  "-translate-y-full" : "translate-y-0"} w-full h-20 p-6 md:px-20 fixed top-0 z-20`}>
            <div className="agencyName">
                <MyText type={"h3"} className={"font-bold text-thirdColor"} >FitTech</MyText>
            </div>
            <div className="navigations / md:flex gap-8 / hidden  ">
                <a href="#" className="anchorText / text-thirdColor3 font-montserrat text-xl ">
                    About Us
                </a>
                <a href="#" className="anchorText / text-thirdColor3 font-montserrat text-xl ">
                    Our Services
                </a>
                <a href="#" className="anchorText / text-thirdColor3 font-montserrat text-xl ">
                    Blogs
                </a>
            </div>
            <div onClick={() => showNav()} className="navMenu // cursor-pointer md:hidden">
                <MyIcons className={""} icon={"navMenu"} />
            </div>
        </div>
    )
}