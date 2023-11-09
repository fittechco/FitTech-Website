import { animated, useSpring } from "@react-spring/web"
import { useEffect, useState } from "react"

type position = {
    x: number,
    y: number
}


type props = {
    className: string
    title: string
    mainPos: position
    scatter: position
    scatter2: position
    scatter3: position
    shape: position
    shape2: position
    visible: boolean
}


export default function MainPoly(
    {
        className,
        title,
        mainPos,
        scatter,
        shape,
        scatter2,
        shape2,
        scatter3,
        visible

    }: props) {

    const [changeShape, setChangeShape] = useState("")
    const shapeShift = [
        mainPos,
        scatter,
        shape,
        scatter2,
        shape2,
        scatter3,
    ]

    const [springs, api] = useSpring(() => ({
        from: {
            top: mainPos && mainPos.y + "%",
            left: mainPos && mainPos.x + "%",
        },
    }))
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            const shape = shapeShift[index];
            api.start({
                to: {
                    top: shape.y + "%",
                    left: shape.x + "%",
                },
            });
            index = (index + 1) % shapeShift.length;
        }, 2000);

        return () => clearInterval(interval);
    }, []);



    return (
        <animated.div
            style={{
                ...springs
            }}
            className={ "absolute mainPoly w-fit h-fit bg-transparent "}>
            <div className={`" flex justify-center items-center w-fit h-fit relative transition-all ease-in-out duration-500  ${className} ${visible ? "scale-100" : "scale-0"}`}>
                <svg className={"w-[156px] h-[177px]"} width="187" height="215" viewBox="0 0 187 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.902267 54.0387L93.5 0.57735L186.098 54.0387V160.961L93.5 214.423L0.902267 160.961V54.0387Z" fill="#339CF8" stroke="#133E63" />
                </svg>
                <span className="font-montserrat font-bold text-thirdColor text-xl absolute text-center p-4">{title}</span>
            </div>
        </animated.div>
    )
}