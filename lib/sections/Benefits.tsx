import React, { useCallback, useEffect, useRef } from 'react';
import loadTimeImage from "../../../public/loadtime.png"
import { MyText } from '../texts/myText';
import UseIntersection from '../useIntersection';
import data from "@/data.json"
import Image from 'next/image';

function BenefitsCard(props: {
    benefit: {
        title: string,
        description: string,
        image: string
    }
    index: number
}) {
    const { benefit, index } = props
    const benefitCardRef = useRef<HTMLDivElement | null>(null);
    const benefitCardVisible = UseIntersection(benefitCardRef, "0px")
    const translateX = index % 2 === 0 ? "-translate-x-1/4" : "translate-x-1/4"
    return (
        <div
            ref={benefitCardRef}
            style={{
                boxShadow: "0px 4px 9px 2px rgba(0, 0, 0, 0.15)",
            }}
            className={`benefits-card flex flex-col ${props.index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} overflow-hidden gap-5 h-full border border-mainColor2
             bg-mainColorLight py-5 px-5 md:py-10 md:px-10 rounded-3xl transition-all ease-in-out duration-1000 delay-200
              ${benefitCardVisible ? "translate-x-0 opacity-100" : `${translateX} opacity-0`}`}>
            <div className="media rounded-3xl flex-1">
                <Image
                    width={800}
                    height={800}
                    src={benefit.image} className="w-full rounded-3xl" alt={benefit.title} />
            </div>
            <div
                className="info h-full transition-all ease-out duration-200 flex-1">
                <div className="info-card flex flex-col gap-3 md:gap-5">
                    <MyText className="font-bold text-thirdColor" type={'h3'} >{benefit.title}</MyText>
                    <MyText type='p' className="text- text-thirdColor3">{benefit.description}</MyText>
                </div>
            </div>
        </div>
    )
}

export default function Benefits() {
    const benefitsRef = useRef<HTMLDivElement | null>(null);
    const benefits = data.benefits
    const benefitsVisible = UseIntersection(benefitsRef, "0px")
    return (
        <div
            ref={benefitsRef}
            className='benefits-container container overflow-hidden space-y-6 md:space-y-8'>
            <MyText
                type={"h2"}
                className={`text-thirdColor3 font-bold transition-all w-full text-center duration-1000 ease-in-out 
                 ${benefitsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"} `}>
                {`Our Websites are `}
                <span className='text-accentColor'>Loaded</span>
                {` with`}
            </MyText>
            <div className="benefits-wrapper flex flex-col gap-4 md:gap-6">
                {
                    benefits.map((benefit, index) => {
                        return (
                            <BenefitsCard key={benefit.title} index={index} benefit={benefit} />
                        )
                    })
                }
            </div>
        </div>
    );
}
