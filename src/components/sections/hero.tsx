import { LogoPoly } from "../lib/Polygons/logoPoly";
import MainPoly from "../lib/Polygons/mainPoly";
import { PlaceHolderPoly } from "../lib/Polygons/placeHolderPoly";
import { Polygon } from "../lib/Polygons/polygons";
import { MyText } from "../lib/texts/myText";
import PolysAnimation from "./polysAnimation";
import MyButton from "../lib/elements/myButton";
import { useRef } from "react";
import useIntersection from "../lib/useIntersection";

export default function Hero({onContactClick} : {onContactClick:(navigate:any) => void}) {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroVisible = useIntersection(heroRef, "0px")

  return (
    // creating hero section wich will take full width and height of the current screen
    <section ref={heroRef} className="hero flex items-center / w-full h-full  bg-white  relative overflow-hidden z-10 px-6 md:px-20 min-h-[112vh]">
      <Polygon className={`-z-[1] absolute top-[3%] left-0 transition-all duration-1000 ease-in-out  ${heroVisible? "scale-50":"scale-0"}   `}/>
      <Polygon className={`-z-[1] absolute top-[40%] left-[0%]  lg:-left-[4%]  transition-all duration-1000 ease-in-out  md:block delay-100 ${heroVisible? "scale-75 lg:scale-100":"scale-0"} `} />
      <Polygon className={`-z-[1] absolute top-[20%] left-[20%] lg:left-[25%] transition-all duration-1000  ease-in-out  delay-150 ${heroVisible? "scale-50 lg:scale-75":"scale-0"}`} />
      <Polygon className={`-z-[1] absolute top-[8%]  left-[60%] lg:left-[45%] transition-all duration-1000 ease-in-out  delay-200 hidden md:static  ${heroVisible? "scale-50 lg:scale-75 ":"scale-0"}`} />
      <LogoPoly visible={heroVisible} className={`-z-[1] absolute md:hidden top-[15%]  left-[60%] lg:left-[45%] w-[92px] h-[92px] `}/>
      <Polygon className={`-z-[1] absolute top-[70%] left-[10%] lg:left-[10%] transition-all duration-1000 ease-in-out delay-[250] ${heroVisible? "scale-[60%]":"scale-0"} `} />
      <Polygon className={`-z-[1] absolute top-[50%] left-[30%] lg:left-[15%] transition-all duration-1000 ease-in-out delay-300  ${heroVisible? "scale-[50%]":"scale-0"}`} />
      <Polygon className={`-z-[1] absolute top-[70%] left-[55%] lg:left-[40%]  transition-all delay-[350] duration-500 ease-in-out ${heroVisible? "scale-75 lg:scale-100":"scale-0"}`} />
      <Polygon className={`-z-[1] absolute top-[40%] left-[70%]  md:block lg:hidden transition-all duration-1000 ease-in-out delay-[400] ${heroVisible? "scale-50 md:scale-75":"scale-0"}`} />
      <PolysAnimation visible={heroVisible} />
      <div className="heroInfo / flex flex-col gap-6 md:gap-8 / z-10 md:mt-6 antialiased ">
        <MyText type={"h2"} className={`text-thirdColor font-bold  md:max-w-md lg:max-w-3xl transition-all duration-1000 ease-in-out ${heroVisible? "translate-x-0 opacity-100" : "-translate-x-1/4 opacity-0"}`}>
        DIGITAL SOLUTIONS THAT DRIVE RESULTS: UNLEASH YOUR BUSINESS POTENTIAL WITH FITTECH
        </MyText>
        <MyText type={"p"} className={`text-thirdColor3 antialiased  md:max-w-lg transition-all ease-in-out duration-1000 delay-200 ${heroVisible? "translate-x-0 opacity-100" : "-translate-x-1/4 opacity-0"}`}>
          Customized fitness solutions for gym owners, personal trainers,
          supplement store owners, and fitness enthusiasts. Grow your fitness
          business with our ecommerce websites, mobile apps, and digital
          systems.
        </MyText>
        <MyButton onClick={onContactClick} className={`transition-all delay-[400ms] duration-1000 ease-in-out ${heroVisible? "translate-x-0 opacity-100" : "-translate-x-1/2 opacity-0"}`} text={"Contact Us"} type={""} form={""} />
      </div>
    </section>
  );
}
