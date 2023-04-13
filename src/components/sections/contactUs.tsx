import MyIcons from "../lib/myicons";
import { MyText } from "../lib/texts/myText";
import MyButton from "../lib/elements/myButton";
import emailjs from 'emailjs-com';
import { RefObject, useEffect, useRef, useState } from "react";
import useIntersection from "../lib/useIntersection";

export default function ContactUs({myRef}: {myRef: RefObject<HTMLDivElement>}) {
  const SERVICE_ID = "service_lzdo1qu";
  const TEMPLATE_ID = "template_shr24zk";
  const USER_ID = "bKJefEiNRnoGbJflQ";
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)
  const contactRef = useRef<HTMLDivElement>(null)

  const visible = useIntersection(contactRef, "-200px")

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    MyText(e.target);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        setSuccess(true)
        setTimeout(() => {
          setSuccess(false)
        }, 2000);
      }, (error) => {
        setFailed(true)
        setTimeout(() => {
          setFailed(false)
        }, 2000);
        console.log(error.text);
      });
    e.target.reset()
    console.log(e.target);
  };
  
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const handleHeight = () => {
        textAreaRef.current!.style.height = textAreaRef.current?.scrollHeight + "px"
    } 
     textAreaRef.current! && textAreaRef.current!.addEventListener("keyup", handleHeight)
    return () => {
        textAreaRef.current && textAreaRef.current!.removeEventListener("keyup", handleHeight)
    } 
} ,[])

  return (
    <div
      ref={myRef}
      id="contact-section"
      className={`contact / flex flex-col gap-5 md:gap-12 / px-6 md:px-20 `}>
      <MyText type={"h2"} className={`text-thirdColor3 font-bold transition-all duration-1000 ease-in-out  ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/4"}  `}>
        Contact Us
      </MyText>
      <div ref={contactRef} className="contactWrapper /  flex flex-col md:flex-row justify-center items-center  gap-5 /  w-full  relative">
        <div className={`info flex-1 md:flex flex-col gap-6 / hidden transition-all duration-1000 ease-in-out delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/3"}`}>
          <MyText type={"h2"} className={"text-thirdColor font-bold "}>
            Tell us about your Idea and we will be with you asap!
          </MyText>
          <div className="">
            <MyText type={"p"} className={"text-thirdColor3   "}>
              fittechnologiesco@gmail.com
            </MyText>
            <MyText type={"p"} className={"text-thirdColor3   "}>
              Beirut-Lebanon
            </MyText>
          </div>
        </div>
        <div className={`contactForm / flex-1 flex flex-col gap-20 / hero h-full w-full formShadow p-6 rounded-lg
          mx-auto relative z-40 transition-all duration-1000 ease-in-out delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/4"}`}>
          <MyText
            type={"h3"}
            className={" text-thirdColor font-bold text-center"}
          >
            Contact Form
          </MyText>
          <form onSubmit={handleOnSubmit} className="ContactFormWrapper / flex flex-col gap-4 md:gap-6 / validate "
            id="contactForm">
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="border-b text-lg md:text-2xl placeholder:text-thirdColor3 text-thirdColor
                         border-thirdColor bg-transparent focus:outline-none rounded"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="border-b text-lg md:text-2xl  placeholder:text-thirdColor3 text-thirdColor
                         border-thirdColor bg-transparent focus:outline-none rounded"
            />
            <textarea
              name="message"
              required
              ref={textAreaRef}
              placeholder="Tell us about your project"
              className="border-b text-lg md:text-2xl h-8 overflow-hidden placeholder:text-thirdColor3 text-thirdColor
                         border-thirdColor bg-transparent focus:outline-none rounded"
            />

          </form>

          <div className="flex flex-col gap-6">
            {/* <label htmlFor="file" className="cursor-pointer hover:-translate-y-1 transition-all w-fit ">
              <div className="flex gap-4">
                <MyIcons className={""} icon={"attach"} />
                <MyText type={"p"} className={"text-thirdColor3  font-bold "}>
                  Add Attachment
                </MyText>
              </div>
              <input form="contactForm" id="file" type="file" name="file" className="hidden" />
            </label> */}
            <MyButton text={"Submit"} type={""} form={"contactForm"} className={""} />
          </div>
          <SuccessPopUp success={success} failed={failed} />
        </div>
      </div>
    </div>
  );
}



function SuccessPopUp({ success, failed }: { success: boolean, failed: boolean }) {
  return (
    <div className={`successPopup / flex justify-center items-center  / transition-all ease-in-out duration-500 ${success || failed ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} absolute w-full h-full bg-mainColor/70 backdrop-blur-sm top-0 left-0 `}>
      <div className="relative">
        <div className={`wrapper / flex items-center justify-center   / transition-all ease-in-out duration-500 ${success ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}  `}>
          <MyText type={"h2"} className={"font-bold text-accentColor"}>Success!</MyText>
        </div>
        <div className={`wrapper / flex items-center justify-center   / absolute top-0 transition-all ease-in-out duration-500 ${failed ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}  `}>
          <MyText type={"h2"} className={"font-bold text-red-600"}>Failed!</MyText>
        </div>
      </div>
    </div>
  )
}



