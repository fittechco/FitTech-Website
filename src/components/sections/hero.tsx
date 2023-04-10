import { LogoPoly } from "../lib/Polygons/logoPoly";
import MainPoly from "../lib/Polygons/mainPoly";
import { PlaceHolderPoly } from "../lib/Polygons/placeHolderPoly";
import { Polygon } from "../lib/Polygons/polygons";
import { MyText } from "../lib/texts/myText";
import PolysAnimation from "./polysAnimation";
import MyButton from "../lib/elements/myButton";

export default function Hero() {
  return (
    // creating hero section wich will take full width and height of the current screen
    <section className="hero flex items-center / w-full h-full  bg-white  relative overflow-x-hidden z-10 px-6 md:px-20 min-h-screen">
      <Polygon className={`-z-[1] absolute top-[3%] left-0 transition-all ease-out scale-50 `}/>
      <Polygon className={"-z-[1] absolute top-[40%] left-[0%] lg:-left-[4%] hidden md:block scale-75 lg:scale-100"} />
      <Polygon className={"-z-[1] absolute top-[20%] left-[20%] lg:left-[25%] scale-50 lg:scale-75"} />
      <Polygon className={"-z-[1] absolute top-[8%]  left-[60%] lg:left-[45%] scale-75 lg:scale-75"} />
      <Polygon className={"-z-[1] absolute top-[70%] left-[10%] lg:left-[10%] scale-[60%]"} />
      <Polygon className={"-z-[1] absolute top-[50%] left-[30%] lg:left-[15%] scale-[50%]"} />
      <Polygon className={"-z-[1] absolute top-[70%] left-[55%] lg:left-[40%] scale-75 lg:scale-100"} />
      <Polygon className={"-z-[1] absolute top-[40%] left-[70%]  md:block lg:hidden scale-50 md:scale-75"} />
      <PolysAnimation />
      <div className="heroInfo / flex flex-col gap-6 md:gap-8 / z-10 md:mt-6 antialiased ">
        <MyText type={"h2"} className={"text-thirdColor font-bold  md:max-w-md lg:max-w-3xl"}>
          Fitness meets technology: Solutions for the modern fitness industry
        </MyText>
        <MyText type={"p"} className={"text-thirdColor3 antialiased  md:max-w-lg"}>
          Customized fitness solutions for gym owners, personal trainers,
          supplement store owners, and fitness enthusiasts. Grow your fitness
          business with our ecommerce websites, mobile apps, and digital
          systems.
        </MyText>
        <MyButton text={"Contact Us"} />
      </div>
    </section>
  );
}
