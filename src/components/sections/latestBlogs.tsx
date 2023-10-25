import { useRef } from "react";
import { MyText } from "../lib/texts/myText";
import useIntersection from "../lib/useIntersection";
import blogImg from "../../../public/blogimg.png"

export default function LatestBlogs() {
    const blogRef = useRef<HTMLDivElement>(null)
    const visible = useIntersection(blogRef, "-80px")
    return (
        <div
            ref={blogRef}
            className={`latestBlogs container / flex flex-col gap-5 md:gap-12 / mx-auto w-full `}>
            <MyText type={"h2"} className={`font-bold text-thirdColor3 transition-all duration-1000 ease-in-out${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"} `} >Latest Blogs</MyText>
            <div className="blogContainer / flex justify-center items-center /  ">
                <div
                    className={`flex justify-start items-end / max-w-5xl max-h-96 overflow-hidden w-full h-full relative rounded-3xl card-shadow 
                     transition-all duration-1000 ease-in-out delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/4"} `}>
                    <div className={`blogCard bg-mainColor/60 absolute top-0  z-10 rounded-3xl w-full h-96 `}></div>
                    <img src={blogImg} alt="" className="object-cover object-top z-0 rounded-3xl" />
                    <div className="blogInfo / flex flex-col gap-4 justify-start items-start / z-20  absolute m-5 ">
                        {/* <MyText type={"p"} className={`font-light text-thirdColor transition-all duration-1000 ease-in-out delay-500 ${visible? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/4"} `} ></MyText> */}
                        <MyText type={"h3"} className={`font-bold text-thirdColor transition-all duration-1000 ease-in-out delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/4"} `} >Coming Soon</MyText>
                        {/* <MyText type={"p"} className={`font-light text-thirdColor max-w-2xl transition-all duration-1000 ease-in-out delay-[900ms] ${visible? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/4"} `} ></MyText> */}
                    </div>
                </div>
            </div>
        </div>
    )
} ``