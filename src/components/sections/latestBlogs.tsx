import { MyText } from "../lib/texts/myText";

export default function LatestBlogs() {

    return (
        <div className="latestBlogs / flex flex-col gap-12 / p-6 md:p-20 w-full ">
            <MyText type={"h2"} className={"font-bold text-thirdColor "} >Latest Blogs</MyText>
            <div className="blogContainer / flex justify-center items-center /  ">
                <div className=" / flex justify-start items-end / max-w-5xl w-full h-full relative ">
                    <div className="blogCard bg-black  rounded-lg w-full h-96"></div>
                    <div className="blogInfo / flex flex-col gap-4 justify-start items-start /  absolute m-5 ">
                        <MyText type={"p"} className={"font-light text-thirdColor "} >Ali Fouani - 20 Jan 2022</MyText>
                        <MyText type={"h3"} className={"font-bold text-thirdColor "} >How to start coding</MyText>
                        <MyText type={"p"} className={" font-light text-thirdColor max-w-2xl "} >In this blog Ali clearly explain how to start coding with no background in computer’s needed</MyText>

                    </div>
                </div>
            </div>
        </div>
    )
}