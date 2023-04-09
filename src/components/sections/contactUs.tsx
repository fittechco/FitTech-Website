import MyIcons from "../lib/myicons";
import { MyText } from "../lib/texts/myText";

export default function ContactUs() {
    return (
        <div className="contact / flex flex-col gap-6 / p-6 md:p-20">
            <MyText type={"h2"} className={"text-thirdColor font-bold  "} >Contact Us</MyText>
            <div className="contactWrapper /  flex flex-col md:flex-row justify-center items-center  gap-5 / w-full ">
                <div className="info flex-1 flex flex-col gap-6">
                    <MyText type={"h2"} className={"text-thirdColor font-bold "} >Tell us about your Idea and we will be with you asap!</MyText>
                    <div className="">
                        <MyText type={"p"} className={"text-thirdColor3   "} >fittechnologiesco@gmail.com</MyText>
                        <MyText type={"p"} className={"text-thirdColor3   "} >Beirut-Lebanon</MyText>
                    </div>

                </div>
                <div className="contactForm / flex-1 flex flex-col gap-20 / hero formShadow p-6 rounded-lg">
                    <MyText type={"h2"} className={" text-thirdColor font-bold text-center"} >Contact Form</MyText>
                    <form className="ContactFormWrapper / flex flex-col gap-4 md:gap-6 / ">
                        <input type="text" name="name" placeholder="Your name"
                            className="border-b text-2xl placeholder:text-thirdColor3 text-thirdColor
                         border-thirdColor bg-transparent focus:outline-none " />

                        <input type="text" name="email" placeholder="Your email"
                            className="border-b text-2xl placeholder:text-thirdColor3 text-thirdColor
                         border-thirdColor bg-transparent focus:outline-none " />
                        <textarea name="description" placeholder="Tell us about your project"
                            className="border-b text-2xl placeholder:text-thirdColor3 text-thirdColor
                         border-thirdColor bg-transparent focus:outline-none " />
                    </form>

                    <label htmlFor="file ">
                        <div className="flex gap-4">
                            <MyIcons className={""} icon={"attach"} />
                            <MyText type={"p"} className={"text-thirdColor3  font-bold "} >Add Attachment</MyText>
                        </div>
                        <input id="file" type="file" name="file" className="hidden" />
                    </label>
                </div>
            </div>
        </div>
    )
}