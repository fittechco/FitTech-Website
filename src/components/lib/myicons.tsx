export default function MyIcons({
    icon,
    className
}: {
    className: string
    icon: string
}) {
    switch (icon) {
        case "ecom":
            return (
                <svg className={className} width="95" height="92" viewBox="0 0 95 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50.4348 69H62.3018V80.5H50.4348V69Z" fill="#EDEDED" />
                    <path d="M71.2021 69H83.0692V80.5H71.2021V69Z" fill="#EDEDED" />
                    <path d="M50.4348 48.875H62.3018V60.375H50.4348V48.875Z" fill="#EDEDED" />
                    <path d="M71.2021 48.875H83.0692V60.375H71.2021V48.875Z" fill="#EDEDED" />
                    <path d="M83.0692 31.625H65.2686V20.125C65.2686 15.2375 61.4118 11.5 56.3684 11.5H38.5678C33.5243 11.5 29.6676 15.2375 29.6676 20.125V31.625H11.867C10.087 31.625 8.90027 32.775 8.90027 34.5V35.075L14.5371 69.8625C14.8338 72.7375 17.5039 74.75 20.4706 74.75H44.5013V69H20.4706L15.4271 37.375H83.0692V31.625ZM35.6011 20.125C35.6011 18.4 36.7878 17.25 38.5678 17.25H56.3684C58.1484 17.25 59.3351 18.4 59.3351 20.125V31.625H35.6011V20.125Z" fill="#EDEDED" />
                </svg>

            )

        default:
            return <h1>404 NOT FOUND</h1>
    }
}