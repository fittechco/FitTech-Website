import About from "../about";
import { MyText } from "../../lib/texts/myText";
import MyButton from "../../lib/elements/myButton";
import { useRef } from "react";
import useIntersection from "../../lib/useIntersection";
import Hero from "./hero";
import data from "../../../data.json"

export default function AboutUs() {
  const aboutUsRef = useRef<HTMLDivElement>(null);

  const visible = useIntersection(aboutUsRef, "00px");
  console.log(visible);
  return (
    <div className="aboutUs / flex / w-full h-full / ">
      <div
        ref={aboutUsRef}
        className="flex flex-col  gap-20">
        <Hero visible={visible} />
        <div
          className={`flex flex-col gap-32 w-full px-6 md:px-20`}>

          {data.AboutUs.map((section, i:number) => (
            <DisplayAbout index={i} title={section.title} description={section.description} />
          ))}
        </div>
      </div>
    </div>
  );
}


function DisplayAbout({
  index,
  title,
  description
}: {
  index: number,
  title: string
  description: string
}) {
  const displayAboutUsRef = useRef<HTMLDivElement>(null)
  const visible = useIntersection(displayAboutUsRef, "00px");
  const infoRight = index % 2 == 0

  return (
    <div
      ref={displayAboutUsRef}
      className="flex w-full gap-14 relative p-6 md:p-0">
      <div
        className={`absolute md:static top-0 left-0 bg-accentColor3 ${infoRight ? "order-1" : "order-2"} h-full md:h-auto w-full flex-1 -z-10 md:z-0 transition-all duration-1000 ease-in-out delay-200 ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-1/4"
          }`}
      ></div>
      <div
        className={`flex-1 flex flex-col gap-6 transition-all duration-1000 ease-in-out delay-500 ${infoRight ? "order-2" : "order-1"}  ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-1/4"
          }`}
      >
        <div className={`flex flex-col gap-6 `}>
          <MyText
            type={"h2"}
            className={
              "text-thirdColor font-bold border-b border-accentColor w-fit pb-3"
            }
          >
            {title}
          </MyText>
          <MyText type={"p"} className={"text-thirdColor3"}>
            {description}
          </MyText>
        </div>
      </div>
    </div>
  )
}
