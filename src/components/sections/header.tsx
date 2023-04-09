import { useState, useEffect } from "react";
import { MyText } from "../lib/texts/myText";

export default function HeaderNav() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setScrollPosition(window.pageYOffset);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };  
    }, []);
    
    console.log(scrollPosition);

    return (
        <div className={`headerNav / flex justify-between items-center / transition-all duration-300  ${scrollPosition > 80? " bgLinear backdrop-blur-sm " : " bgLinearOff  backdrop-blur-0 "} w-full h-20 px-20 fixed top-0 z-20`}>
            <div className="agencyName">
                <MyText type={"h3"} className={"font-bold text-thirdColor"} >FitTech</MyText>
            </div>
            <div className="navigations / flex gap-8 /">
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
        </div>
    )
}