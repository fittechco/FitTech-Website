import { useRef } from "react";
import data from "@/data.json"
import UseIntersection from "../useIntersection";
import { MyText } from "../texts/myText";
import ServiceCard from "../cards/serviceCard";


export default function Services() {
    const serviceContaienerRef = useRef<HTMLDivElement>(null)
    const visible = UseIntersection(serviceContaienerRef, "0px")
    return (
        <div
            ref={serviceContaienerRef}
            className="services container  / space-y-6 md:space-y-8  / mx-auto">
            <MyText
                type={"h2"} className={`text-thirdColor3 w-full text-center font-bold transition-all duration-1000 ease-in-out
              ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"} `}>
                {`What We Can `}
                <span className='text-accentColor'>Build</span>
                {` For You`}
            </MyText>
            <ServiceCardsGrid />
        </div>
    )
}

function ServiceCardsGrid() {
    return (
        <div className="seviceCardsContainer / grid grid-cols-1  justify-center gap-4 md:gap-6 /  ">
            {data.services.map((service) => (
                <ServiceCard key={service.title} image={service.image} title={service.title} description={service.description} icon={service.icon} />
            ))}
        </div>
    )
}