export default function MainPoly(
    {
        className,
         title
}:{
    className:string
    title:string
}) {
    return (
        <div className= {className+" mainPoly w-fit h-fit  "}>
            <div className="flex justify-center items-center w-fit h-fit relative">
                <svg className={"w-[156px] h-[177px]"} width="187" height="215" viewBox="0 0 187 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.902267 54.0387L93.5 0.57735L186.098 54.0387V160.961L93.5 214.423L0.902267 160.961V54.0387Z" fill="#339CF8" stroke="#133E63" />
                </svg>
                <span className="font-montserrat font-bold text-thirdColor text-xl absolute text-center p-4">{title}</span>
            </div>
        </div>
    )
}