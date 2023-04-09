import { MyText } from "../lib/texts/myText";
import MyButton from "../lib/elements/myButton";

export default function About() {
  return (
    <div className="m-4 md:m-20">
      <div className="about / flex flex-col gap-3 md:gap-10 / md:mb-10">
        <MyText type={"h2"} className={"text-thirdColor font-bold"}>
          About Us
        </MyText>
      </div>
      <div className="flex w-full gap-14">
        <div className="bg-gray-300 h- w-full flex-1"></div>
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <MyText type={"h2"} className={"text-thirdColor font-bold border-b border-accentColor w-fit pb-3"}>
              Who we are
            </MyText>
            <MyText type={"p"} className={"text-thirdColor3"}>
                FitTech is a startup agency that specializes in providing
                technology and services to the fitness industry. Founded by
                Mohamad Hamoud and Ali Fouani, our company is driven by a passion
                for helping gym businesses and supplement stores succeed. At
                FitTech, we believe that technology can help bridge the gap
                between the fitness world and the digital world. We work
                tirelessly to provide our clients with innovative solutions that
                make it easier to manage their businesses, sell their products,
                and reach their goals.
            </MyText>
          </div>
            <MyButton text={"Learn more"} />
        </div>
      </div>
    </div>
  );
}
