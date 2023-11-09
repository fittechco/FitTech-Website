import { useRef } from "react"
import ecoStore from "../../assets/fitEom.png"
import useIntersection from "../useIntersection"
import Image from "next/image"
import { MyText } from "../texts/myText"

type service = {
    title: string,
    description: string,
    icon: string,
    image: string,

}

export default function ServiceCard({
    title,
    description,
    icon,
    image
}: service) {
    const cardref = useRef<HTMLDivElement>(null)
    const visible = useIntersection(cardref, "-5px")

    return (
        <div
            style={{
                boxShadow: "0px 4px 6px 3px rgba(0, 0, 0, 0.16)",
                height: "calc(100vh - 100px)"
            }}
            ref={cardref}
            className={`serviceCard card-shadow / rounded-3xl border border-mainColor2 flex-1 w-auto overflow-hidden 
             relative transition-all duration-1000 ease-in-out delay-200
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/4"} `}>
            <Image
                height={1080}
                width={1920}
                className="h-full w-full object-cover top-0 left-0 absolute" src={image} alt="" />
            <div
                style={{
                    background: "linear-gradient(180deg, rgba(12, 40, 64, 0.30) 7.79%, rgba(12, 40, 64, 0.83) 48.3%, rgba(12, 40, 64, 0.98) 65.22%, #0C2840 100%)"
                }}
                className="filterLayer / absolute top-0 left-0 h-full w-full" />
            <div className="service-info-wrapper / flex flex-col  justify-end items-center gap-20 / min-h-[400px]  h-full  w-full py-3 md:py-6">
                <div className="service-info / w-full flex flex-col justify-center items-center gap-2 p-2 / z-10 rounded-2xl ">
                    <div className="w-full space-y-2">
                        <MyText type={"h3"} className={"text-thirdColor font-bold text-center"}>{title}</MyText>
                    </div>
                    <MyText type={"p"} className={"text-thirdColor3 max-w-prose text-center"}>{description}</MyText>
                </div>
            </div>
        </div >
    )
}