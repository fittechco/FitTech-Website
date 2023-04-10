import { MyText } from "../lib/texts/myText";

export default function Footer() {
    return (
        <div className="footer w-full h-full bg-mainColor3 mt-20">
            <div className="footerWrapper / flex items-center flex-wrap gap-6 md:gap-8 justify-between / w-full h-full p-20">
                <div className="agencyName">
                    <MyText type={"h3"} className={"font-bold text-thirdColor"} >FitTech</MyText>
                </div>
                <div className="flex gap-6 md:gap-10 flex-wrap">
                    <div className="navigations flex flex-col  gap-2">
                        <MyText type={"h4"} className={"font-bold text-thirdColor"} >Navigations</MyText>
                        <a href="#" className="font-montserrat text-lg md:text-2xl text-thirdColor3">Home</a>
                        <a href="#" className="font-montserrat text-lg md:text-2xl text-thirdColor3">About Us</a>
                        <a href="#" className="font-montserrat text-lg md:text-2xl text-thirdColor3">Blogs</a>
                    </div>
                    <div className="recources flex flex-col  gap-2">
                        <MyText type={"h4"} className={"font-bold text-thirdColor"} >Resources</MyText>
                        <a href="#" className="font-montserrat text-lg md:text-2xl text-thirdColor3">Support</a>
                        <a href="#" className="font-montserrat text-lg md:text-2xl text-thirdColor3">Blogs</a>
                    </div>
                    <div className="social flex flex-col  gap-2">
                        <MyText type={"h4"} className={"font-bold text-thirdColor"} >Social</MyText>
                        <a href="#" className="font-montserrat text-lg md:text-2xl text-thirdColor3">Instagram</a>
                        <a href="#" className="font-montserrat text-lg md:text-2xl text-thirdColor3">Linkedin</a>
                    </div>
                </div>
            </div>
        </div>
    )
}




