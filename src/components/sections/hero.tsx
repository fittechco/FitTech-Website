import { LogoPoly } from "../lib/Polygons/logoPoly";
import MainPoly from "../lib/Polygons/mainPoly";
import { PlaceHolderPoly } from "../lib/Polygons/placeHolderPoly";
import { Polygon } from "../lib/Polygons/polygons";
import { MyText } from "../lib/texts/myText";
import PolysAnimation from "./polysAnimation";

export default function Hero() {


    return (
        // creating hero section wich will take full width and height of the current screen
        <section className="hero flex items-center / w-full h-full  bg-white  relative overflow-hidden z-10 p-20">
            <Polygon className={`-z-[1] absolute top-[3%] transition-all ease-out scale-50 `} />
            <Polygon className={"-z-[1] absolute top-[40%] -left-[4%] scale-100"} />
            <Polygon className={"-z-[1] absolute top-[20%] left-[25%] scale-75"} />
            <Polygon className={"-z-[1] absolute top-[8%] left-[45%] scale-75"} />
            <Polygon className={"-z-[1] absolute top-[70%] left-[10%] scale-[60%]"} />
            <Polygon className={"-z-[1] absolute top-[50%] left-[15%] scale-[50%]"} />
            <Polygon className={"-z-[1] absolute top-[70%] left-[40%] scale-100"} />
            <PolysAnimation />
            <div className="heroInfo / flex flex-col gap-6 md:gap-8 / z-10 ">
                <MyText type={"h1"} className={"text-thirdColor font-bold max-w-xl"} >Fitness meets technology: Solutions for the modern fitness industry</MyText>
                <MyText type={"p"} className={"text-thirdColor3  max-w-md"} >
                    Customized fitness solutions for gym owners, personal trainers,
                    supplement store owners, and fitness enthusiasts. Grow your fitness
                    business with our ecommerce websites, mobile apps, and digital systems.
                </MyText>
                <button className="px-3 py-2 border border-accentColor2 buttonLinear  w-fit backdrop-blur-sm">
                    <MyText type={"h4"} className={"text-accentColor2  font-bold max-w-xl"} >Contact Us</MyText>

                </button>
            </div>
        </section>
    )
}


