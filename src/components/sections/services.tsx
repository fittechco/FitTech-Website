import { MyText } from "../lib/texts/myText";
import useIntersection from "../lib/useIntersection";
import { useRef } from "react";
import ServiceCard from "../cards/serviceCard";
import data from "../../data.json"


export default function Services() {
    const serviceContaienerRef = useRef<HTMLDivElement>(null)
    const visible = useIntersection(serviceContaienerRef, "0px")
    return (
        <div
            ref={serviceContaienerRef}
            className="services container  / flex flex-col gap-3 md:gap-10  / mx-auto">
            <MyText type={"h2"} className={`text-thirdColor3 font-bold transition-all duration-1000 ease-in-out  ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"} `}  >Our Services</MyText>
            <ServiceCards />
        </div>
    )
}


function ServiceCards() {
    return (
        <div className="seviceCardsContainer / grid grid-cols-1  justify-center gap-4 md:gap-6 /  ">
            {data.services.map((service) => (
                <ServiceCard image={service.image} title={service.title} description={service.description} icon={service.icon} />
            ))}
        </div>
    )
}