import { MyText } from "../lib/texts/myText";
import MyButton from "../lib/elements/myButton";
import { useRef } from "react";
import useIntersection from "../lib/useIntersection";
import heroBannerImage from "../../../public/FT-hero-banner.png"
import heroBannerImageMobile from "../../../public/FT-hero-banner-mobile.png"

export default function Hero({ onContactClick }: { onContactClick: (navigate: any) => void }) {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroVisible = useIntersection(heroRef, "0px")

  return (
    <section ref={heroRef} className="hero relative overflow-hidden">
      <div className="hero-banner w-full h-full bg-black absolute top-[0%] right-0">
        <img src={heroBannerImage} alt="heroBannerImage" className="max-md:hidden" />
        <img src={heroBannerImageMobile} alt="heroBannerImageMobile" className="md:hidden" />
        <div
          style={{
            background: "linear-gradient(180deg, rgba(12, 40, 64, 0.30) 7.79%, rgba(12, 40, 64, 0.78) 47.16%, #0C2840 79.92%), #ffffff00 -109.318px 8.247px / 109.572% 79.245% no-repeat "
          }}
          className="gradient-bg absolute top-0 left-0 h-full w-full" />
      </div>
      <div className="hero-wrapper container flex items-end justify-center / w-full h-full relative z-10 min-h-[100vh]">
        <div className="heroInfo / flex flex-col items-center justify-center gap-6 md:gap-8 / z-10 md:mt-6 antialiased pb-8">
          <MyText type={"h2"} className={`text-thirdColor capitalize text-center font-bold md:max-w-md lg:max-w-3xl transition-all
           duration-1000 ease-in-out ${heroVisible ? "translate-x-0 opacity-100" : "-translate-x-1/4 opacity-0"}`}>
            Discover What's Beyond the Limits
          </MyText>
          <MyText type={"p"} className={`text-thirdColor3 antialiased text-center md:max-w-lg transition-all
           ease-in-out duration-1000 delay-200 ${heroVisible ? "translate-x-0 opacity-100" : "-translate-x-1/4 opacity-0"}`}>
            Shopify Ecommerce Websites that Convert for Maximum Business Potential
          </MyText>
          <MyButton onClick={onContactClick} className={`transition-all delay-[400ms] duration-1000
           ease-in-out ${heroVisible ? "translate-x-0 opacity-100" : "-translate-x-1/2 opacity-0"}`} text={"Contact Us"} type={""} form={""} />
        </div>
      </div>

    </section>
  );
}
