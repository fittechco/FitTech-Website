"use client";
import { useRef } from "react";
import { MyText } from "../texts/myText";
import UseIntersection from "../useIntersection";
import Link from "next/link";

export default function Footer() {
    const footerRef = useRef<HTMLDivElement>(null)
    const visible = UseIntersection(footerRef, "-80px")

    return (
        <div
            ref={footerRef}
            className="footer  w-full h-full bg-mainColor3 mt-20">
            <div className="footerWrapper container mx-auto / flex items-center flex-wrap gap-6 md:gap-8 justify-between / w-full h-full py-20">
                <div className={`agencyName transition-all duration-500 ease-in-out  ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"}`}>
                    <MyText type={"h3"} className={`font-bold text-thirdColor transition-all duration-500 ease-in-out  ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"}`} >FitTech</MyText>
                </div>
                <div className="flex gap-6 md:gap-10 flex-wrap">
                    <div className={`navigations flex flex-col  gap-2 transition-all duration-500 ease-in-out delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"}`}>
                        <MyText type={"h4"} className={"font-bold text-thirdColor"} >Navigations</MyText>
                        <Link href="/" className="font-montserrat text-lg md:text-2xl text-thirdColor3">Home</Link>
                        <Link href="/about" className="font-montserrat text-lg md:text-2xl text-thirdColor3">About Us</Link>
                        <Link href="/blogs" className="font-montserrat text-lg md:text-2xl text-thirdColor3">Blogs</Link>
                    </div>
                    <div className={`recources flex flex-col  gap-2 transition-all duration-500 ease-in-out delay-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"}`}>
                        <MyText type={"h4"} className={"font-bold text-thirdColor"} >Resources</MyText>
                        <a href="/blogs" className="font-montserrat text-lg md:text-2xl text-thirdColor3">Blogs</a>
                    </div>
                    <div className={`social flex flex-col  gap-2 transition-all duration-500 ease-in-out delay-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"}`}>
                        <MyText type={"h4"} className={"font-bold text-thirdColor"} >Social</MyText>
                        <Link href="https://www.instagram.com/fit.tech.co/" className="font-montserrat text-lg md:text-2xl text-thirdColor3">Instagram</Link>
                        <Link href="/" className="font-montserrat text-lg md:text-2xl text-thirdColor3">Linkedin</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}




