"use client"
import { MyText } from "@/lib/texts/myText";
import { useRef } from "react";
import UseIntersection from "@/lib/useIntersection";

export default function Blogs() {
    const blogsRef = useRef<HTMLDivElement>(null);
    const visible = UseIntersection(blogsRef, "-80px");
    return (
        <div
            ref={blogsRef}
            className={`blog /  transition-all duration-1000 ease-in-out
             ${visible ? "translate-x-0 opacity-100" : "-translate-x-1/4 opacity-0"} flex justify-center items-center / min-h-screen`}>
            <MyText type={"h2"} className={"text-thirdColor font-bold "} >Blogs are coming soon!</MyText>
        </div>
    )
}