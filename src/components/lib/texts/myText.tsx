export function MyText({
    type,
    className,
    children
}: {
    type: "h1" | "h2" | "h3" | "h4" | "span" | "p" | "p2"
    className: string
    children: JSX.Element | string
}) {
    switch (type) {
        case "h1":
            return (
                <h1 className={className + " mainText / font-montserrat text-4xl md:text-5xl lg:text-6xl "}>{children}</h1>
            )
        case "h2":
            return (
                <h2 className={className + " h2Text / font-montserrat text-2xl md:text-4xl lg:text-5xl "}>{children}</h2>
            )
        case "h3":
            return (
                <h1 className={className + " h3Text / font-montserrat text-2xl md:text-3xl lg:text-4xl "}>{children}</h1>
            )
        case "h4":
            return (
                <h1 className={className + " h3Text / font-montserrat text-xl md:text-2xl lg:text-3xl "}>{children}</h1>
            )
        case "span":
            return (
                <h1 className={className + " h3Text / font-montserrat text-lg md:text-2xl "}>{children}</h1>
            )
        case "p":
            return (
                <p className={className + " h3Text / font-montserrat text-lg md:text-lg lg:text-xl "}>{children}</p>
            )
        case "p2":
            return (
                <p className={className + " h3Text / font-montserrat text-base md:text-lg lg:text-xl "}>{children}</p>
            )
        default:
            return <h1 className={className}>{children}</h1>
    }
}