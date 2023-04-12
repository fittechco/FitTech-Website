import codeVid from "../../../../public/codingVid.mp4"
import { LogoPoly } from '../../lib/Polygons/logoPoly'
import MainPoly from '../../lib/Polygons/mainPoly'
import { MyText } from '../../lib/texts/myText'


export default function Hero({ visible }: { visible: boolean }) {
    return (
        <div className="aboutHero / flex justify-start items-center  / mt-24 md:mt-0 md:min-h-screen w-full relative hero ">
            <video className=" w-full h-full " width="2200" height="2200" autoPlay muted loop>
                <source src={codeVid} className='' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="herowrapper / flex items-center justify-center md:justify-between  / w-full h-full absolute px-6 md:px-20 ">

                <div className="fitlerLayer / absolute top-0 left-0 h-full w-full bg-mainColor/70 z-10 "></div>

                <div className="aboutHeroInfo / flex flex-col gap-4 md:gap-6 / z-30 ">
                    <MyText
                        type={"h2"}
                        className={`text-thirdColor font-bold transition-all duration-1000 delay-200 ease-in-out    ${visible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-1/4"
                            }`}
                    >
                        About Us
                    </MyText>
                    <MyText
                        type={"p"}
                        className={`text-thirdColor3  transition-all duration-1000 ease-in-out delay-300  max-w-xl  ${visible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-1/4"
                            }`}
                    >
                        Our About page is where you can learn more about our agency and our passion for providing tech solutions to the fitness industry. Discover our team, mission, and services.
                    </MyText>
                </div>
                <LogoPoly visible={visible} className={'md:w-[290px] md:h-[290px] absolute md:static md:mr-[10%] md:z-20  '} />
            </div>
        </div>
    )
}