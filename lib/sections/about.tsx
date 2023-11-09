import { useRef } from "react";
import aboutUsImg from "../../../public/aboutUsImg.png";
import Image from "next/image";
import Link from "next/link";
import MyButton from "../myButton";
import { MyText } from "../texts/myText";
import useIntersection from "../useIntersection";
export default function About() {
  const aboutUsRef = useRef<HTMLDivElement>(null);

  const visible = useIntersection(aboutUsRef, "-80px");

  return (
    <div
      ref={aboutUsRef}
      className={`container mx-auto w-full flex flex-col gap-5 md:gap-12 `}
    >
      <div className="about /   / ">
        <MyText
          type={"h2"}
          className={`text-thirdColor3 font-bold transition-all duration-1000 ease-in-out  ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"
            }`}
        >
          About Us
        </MyText>
      </div>
      <div className="flex w-full gap-14 relative p-6 md:p-0">
        <div
          className={`absolute md:static card-shadow rounded-3xl overflow-hidden top-0 left-0 bg-accentColor3 h-full md:h-auto w-full flex-1 -z-10 md:z-0 transition-all duration-1000 ease-in-out delay-200 md:max-h-[450px] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/4"
            }`}
        >
          <div className="filterLayer md:hidden absolute top-0 left-0 h-full w-full bg-mainColor/80"></div>
          <Image src={aboutUsImg} className="w-full h-full object-cover" alt="" />
        </div>
        <div
          className={`flex-1 flex flex-col gap-6 transition-all duration-1000 ease-in-out delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/4"
            }`}
        >
          <div className={`flex flex-col gap-6 `}>
            <MyText
              type={"h3"}
              className={
                "text-thirdColor font-bold border-b border-accentColor w-fit pb-3"
              }
            >
              Who we are
            </MyText>
            <MyText type={"p"} className={"text-thirdColor3"}>
              FitTech is an innovative agency specializing in crafting tailored
              Shopify eCommerce websites that empower businesses in the beauty
              and fitness industry. Our founders, Mohamad Hamoud and Ali Fouani,
              are driven by a passion for helping businesses transform their
              online presence and maximize their potential.
            </MyText>
          </div>
          <Link href={"/about"} className="w-fit">
            <MyButton text={"Learn more"} type={""} form={""} className={""} />
          </Link>
        </div>
      </div>
    </div>
  );
}
