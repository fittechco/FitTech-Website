import { useRef } from "react"
import ecoStore from "../../assets/fitEom.png"
import MyIcons from "../lib/myicons"
import { MyText } from "../lib/texts/myText"
import useIntersection from "../lib/useIntersection"

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
} : service) {
    const cardref = useRef<HTMLDivElement>(null)
    const visible = useIntersection(cardref, "-5px")
    
    return(
        <div 
        ref={cardref}
        className={`seviceCard /   / rounded-2xl  max-w-[580px] max-h-[640px] overflow-hidden h-full relative transition-all duration-1000 ease-in-out delay-200 ${visible? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/4"} `}>
        <img className="h-full w-full  object-cover" src={image} alt="" />
        <div className=" / flex flex-col justify-between / absolute top-0 left-0 bg-black/40     h-full w-full p-4 md:p-6">
            <div className="cardIcon / py-4 px-6 md:py-6 md:px-8 bg-mainColor/40 backdrop-blur-sm w-fit rounded-2xl  ">
                <MyIcons className={" w-16 h-16 md:w-24 md:h-24"} icon={icon}/>
            </div>
            <div className="serviceInfo / flex flex-col gap-2 p-2 / bg-mainColor/40 backdrop-blur-sm rounded-lg ">
                <div className="w-fit">
                    <MyText type={"h3"} className={"text-thirdColor font-bold"}>{title}</MyText>
                    <hr className="border-thirdColor rounded border-[1px] " />
                </div>
                <MyText type={"p"} className={"text-thirdColor3 "}>{description}</MyText>
            </div>
        </div>
    </div>
    )
}