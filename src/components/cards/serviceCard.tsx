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
}: service) {
    const cardref = useRef<HTMLDivElement>(null)
    const visible = useIntersection(cardref, "-5px")

    return (
        <div
            style={{
                boxShadow: "0px 4px 6px 3px rgba(0, 0, 0, 0.16)"
            }}
            ref={cardref}
            className={`serviceCard card-shadow / rounded-3xl flex-1 w-auto h-[520px] md:h-[640px] overflow-hidden 
             relative transition-all duration-1000 ease-in-out delay-200
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/4"} `}>

            <img className="h-full w-full  object-cover top-0 left-0 absolute" src={image} alt="" />

            <div className="filterLayer / absolute top-0 left-0 h-full w-full bg-mainColor/60 "></div>

            <div className=" / flex flex-col  justify-between gap-20 / min-h-[400px]  h-full  w-full p-3 md:p-6">
                <div className="cardIcon / py-3 px-5 md:py-6 md:px-6 bg-mainColor/40 backdrop-blur-sm w-fit rounded-2xl  ">
                    <MyIcons className={" w-16 h-16 md:w-20 md:h-20"} icon={icon} />
                </div>
                <div className="serviceInfo / w-full flex flex-col gap-2 p-2 / bg-mainColor/40 backdrop-blur-sm rounded-2xl ">
                    <div className="w-full space-y-2">
                        <MyText type={"h4"} className={"text-thirdColor font-bold"}>{title}</MyText>
                        <hr className="border-thirdColor rounded border-[1px] " />
                    </div>
                    <MyText type={"p"} className={"text-thirdColor3 "}>{description}</MyText>
                </div>
            </div>
        </div >
    )
}