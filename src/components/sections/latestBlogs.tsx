import { useRef } from "react";
import { MyText } from "../lib/texts/myText";
import useIntersection from "../lib/useIntersection";

export default function LatestBlogs() {
    const blogRef = useRef<HTMLDivElement>(null)
    const visible = useIntersection(blogRef, "0px")
    return (
        <div 
        ref={blogRef}
        className={`latestBlogs / flex flex-col gap-5 md:gap-12 / px-6 md:px-20 w-full `}>
            <MyText type={"h2"} className={`font-bold text-thirdColor3 transition-all duration-500 ease-in-out${visible? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"} `} >Latest Blogs</MyText>
            <div className="blogContainer / flex justify-center items-center /  ">
                <div className=" / flex justify-start items-end / max-w-5xl w-full h-full relative ">
                    <div className={`blogCard bg-black  rounded-lg w-full h-96 transition-all duration-500 ease-in-out delay-200 ${visible? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/4"}`}></div>
                    <div className="blogInfo / flex flex-col gap-4 justify-start items-start /  absolute m-5 ">
                        <MyText type={"p"} className={`font-light text-thirdColor transition-all duration-500 ease-in-out delay-500 ${visible? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/4"} `} >Ali Fouani - 20 Jan 2022</MyText>
                        <MyText type={"h3"} className={`font-bold text-thirdColor transition-all duration-500 ease-in-out delay-700 ${visible? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/4"} `} >How to start coding</MyText>
                        <MyText type={"p"} className={`font-light text-thirdColor max-w-2xl transition-all duration-500 ease-in-out delay-[900ms] ${visible? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/4"} `} >In this blog Ali clearly explain how to start coding with no background in computer’s needed</MyText>
                    </div>
                </div>
            </div>
        </div>
    )
}``