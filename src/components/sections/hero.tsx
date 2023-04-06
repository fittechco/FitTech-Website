import { LogoPoly } from "../lib/Polygons/logoPoly";
import MainPoly from "../lib/Polygons/mainPoly";
import { PlaceHolderPoly } from "../lib/Polygons/placeHolderPoly";
import { Polygon } from "../lib/Polygons/polygons";

export default function Hero() {
    return (
        // creating hero section wich will take full width and height of the current screen
        <div className="hero / w-full h-full  bg-white  relative overflow-hidden">
            <Polygon className={"absolute top-[3%] scale-50"} />
            <Polygon className={"absolute top-[40%] -left-[4%] scale-100"} />
            <Polygon className={"absolute top-[20%] left-[25%] scale-75"} />
            <Polygon className={"absolute top-[8%] left-[45%] scale-75"} />
            <Polygon className={"absolute top-[70%] left-[10%] scale-[60%]"} />
            <Polygon className={"absolute top-[50%] left-[15%] scale-[50%]"} />
            <Polygon className={"absolute top-[70%] left-[40%] scale-100"} />
            <div className="polyContainer absolute top-[12%] right-0 w-fit h-fit">
                <div className="polyWrapper relative">
                    <PlaceHolderPoly className="  w-[620px]" />
                    <MainPoly title="Landing Pages" className="absolute top-[6.5%] left-[14%]" />
                    <MainPoly title="Gyms" className="absolute top-[6.5%] left-[38.3%]" />
                    <MainPoly title="Digital Systems" className="absolute top-[26.6%] left-[50.7%]" />
                    <MainPoly title="Mobile Apps" className="absolute top-[46.7%] left-[38%]" />
                    <MainPoly title="Ecommerce Website" className="absolute top-[46.7%] left-[13.8%]" />
                    <MainPoly title="Digital Systems" className="absolute top-[26.6%] left-[1.5%]" />
                    <LogoPoly className="absolute top-[25.5%] left-[24.5%]"/>
                </div>
            </div>
        </div>
    )}