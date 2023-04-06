import { MyText } from "../lib/texts/myText";
import ecoStore from "../../assets/eco store.png"
import MyIcons from "../lib/myicons";

export default function Services() {
    return (
        <div className="services / flex flex-col gap-3 md:gap-10  / m-4 md:m-6 ">
            <MyText type={"h2"} className={"text-thirdColor font-bold"}  >Our Services</MyText>
            <ServiceCards />
        </div>
    )
}


function ServiceCards() {
    return (
        <div className="seviceCardsContainer / flex flex-wrap gap-4 md:gap-6 /  ">
            <div className="seviceCard /   / rounded-2xl  max-w-[680px] overflow-hidden h-full min-h-[520px] bg-accentColor relative  ">
                <img className="h-full w-full object-cover" src={ecoStore} alt="" />
                <div className=" / flex flex-col justify-between / absolute top-0 left-0 bg-black/60 h-full w-full p-4 md:p-6">
                    <div className="cardIcon / py-6 px-8 bg-mainColor/40 backdrop-blur-sm w-fit rounded-2xl  ">
                        <MyIcons className={"w-24 h-24"} icon={"ecom"}/>
                    </div>
                    <div className="serviceInfo / flex flex-col gap-2 p-2 / bg-mainColor/40 backdrop-blur-sm rounded-lg ">
                        <div className="w-fit">
                            <MyText type={"h3"} className={"text-thirdColor font-bold"}>Ecommerce Stores</MyText>
                            <hr className="border-thirdColor rounded border-[1px] " />
                        </div>
                        <MyText type={"p"} className={"text-thirdColor3 "}>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</MyText>

                    </div>
                </div>
            </div>
        </div>
    )
}