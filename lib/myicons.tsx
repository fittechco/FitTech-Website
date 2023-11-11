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
        case "attach":
            return (
                <svg className={className} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_39_110)">
                        <path d="M22.0002 12.4973L13.0002 21.4973C7.00018 27.4973 -1.99982 18.4973 4.00018 12.4973L13.0002 3.49732C17.0002 -0.502678 23.0002 5.49732 19.0002 9.49732L10.0002 18.4973C8.00018 20.4973 5.00018 17.4973 7.00018 15.4973L16.0002 6.49732" fill="#EDEDED" />
                        <path d="M22.0002 12.4973L13.0002 21.4973C7.00018 27.4973 -1.99982 18.4973 4.00018 12.4973L13.0002 3.49732C17.0002 -0.502678 23.0002 5.49732 19.0002 9.49732L10.0002 18.4973C8.00018 20.4973 5.00018 17.4973 7.00018 15.4973L16.0002 6.49732" stroke="#515151" strokeWidth="2" />
                    </g>
                    <defs>
                        <clipPath id="clip0_39_110">
                            <rect width="24" height="24" fill="white" transform="translate(0 0.497314)" />
                        </clipPath>
                    </defs>
                </svg>
            )
        case "navMenu":
            return (
                <svg className={className} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 7.25C24 7.66421 23.6642 8 23.25 8H0.75C0.335786 8 0 7.66421 0 7.25C0 6.83579 0.335786 6.5 0.75 6.5H23.25C23.6642 6.5 24 6.83579 24 7.25ZM24 19.25C24 19.6642 23.6642 20 23.25 20H0.75C0.335786 20 0 19.6642 0 19.25C0 18.8358 0.335786 18.5 0.75 18.5H23.25C23.6642 18.5 24 18.8358 24 19.25ZM24 13.2441C24 13.6551 23.6668 13.9883 23.2559 13.9883H0.744141C0.333163 13.9883 0 13.6551 0 13.2441C0 12.8332 0.333163 12.5 0.744141 12.5H23.2559C23.6668 12.5 24 12.8332 24 13.2441Z" fill="#EDEDED" />
                </svg>

            )
        case "close":
            return (
                <svg className={className} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.45 8.565C27.3112 8.42594 27.1464 8.31562 26.9649 8.24035C26.7834 8.16508 26.5889 8.12633 26.3925 8.12633C26.196 8.12633 26.0015 8.16508 25.82 8.24035C25.6386 8.31562 25.4737 8.42594 25.335 8.565L18 15.885L10.665 8.55C10.5261 8.41113 10.3612 8.30097 10.1798 8.22581C9.99834 8.15065 9.80387 8.11197 9.60747 8.11197C9.41107 8.11197 9.2166 8.15065 9.03515 8.22581C8.85371 8.30097 8.68884 8.41113 8.54997 8.55C8.4111 8.68887 8.30094 8.85374 8.22578 9.03518C8.15062 9.21663 8.11194 9.4111 8.11194 9.6075C8.11194 9.8039 8.15062 9.99837 8.22578 10.1798C8.30094 10.3613 8.4111 10.5261 8.54997 10.665L15.885 18L8.54997 25.335C8.4111 25.4739 8.30094 25.6387 8.22578 25.8202C8.15062 26.0016 8.11194 26.1961 8.11194 26.3925C8.11194 26.5889 8.15062 26.7834 8.22578 26.9648C8.30094 27.1463 8.4111 27.3111 8.54997 27.45C8.68884 27.5889 8.85371 27.699 9.03515 27.7742C9.2166 27.8493 9.41107 27.888 9.60747 27.888C9.80387 27.888 9.99834 27.8493 10.1798 27.7742C10.3612 27.699 10.5261 27.5889 10.665 27.45L18 20.115L25.335 27.45C25.4738 27.5889 25.6387 27.699 25.8202 27.7742C26.0016 27.8493 26.1961 27.888 26.3925 27.888C26.5889 27.888 26.7833 27.8493 26.9648 27.7742C27.1462 27.699 27.3111 27.5889 27.45 27.45C27.5888 27.3111 27.699 27.1463 27.7742 26.9648C27.8493 26.7834 27.888 26.5889 27.888 26.3925C27.888 26.1961 27.8493 26.0016 27.7742 25.8202C27.699 25.6387 27.5888 25.4739 27.45 25.335L20.115 18L27.45 10.665C28.02 10.095 28.02 9.135 27.45 8.565Z" fill="#339CF8" />
                </svg>


            )
        case "system":
            return (
                <svg className={className} width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M65.1667 3.83334H11.5C9.46671 3.83334 7.51667 4.64108 6.07889 6.07886C4.64111 7.51664 3.83337 9.46668 3.83337 11.5V46H11.5V11.5H65.1667V3.83334Z" fill="#EDEDED" />
                    <path d="M80.5 19.1667H26.8333C24.8 19.1667 22.8499 19.9744 21.4121 21.4122C19.9744 22.8499 19.1666 24.8 19.1666 26.8333V65.1667C19.1666 67.2 19.9744 69.15 21.4121 70.5878C22.8499 72.0256 24.8 72.8333 26.8333 72.8333H48.0316V78.6983H42.1666V84.3333H65.1666V78.66H59.34V72.8333H80.5C82.5333 72.8333 84.4833 72.0256 85.9211 70.5878C87.3589 69.15 88.1666 67.2 88.1666 65.1667V26.8333C88.1666 24.8 87.3589 22.8499 85.9211 21.4122C84.4833 19.9744 82.5333 19.1667 80.5 19.1667ZM80.5 65.1667H26.8333V26.8333H80.5V65.1667Z" fill="#EDEDED" />
                </svg>
            )
        case "app":
            return (
                <svg className={className} width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M66.125 20.125H77.625V31.625H66.125V20.125ZM66.125 37.375H77.625V48.875H66.125V37.375ZM48.875 20.125H60.375V31.625H48.875V20.125ZM48.875 37.375H60.375V48.875H48.875V37.375Z" fill="#EDEDED" />
                    <path d="M41.6875 74.75C44.0692 74.75 46 72.8192 46 70.4375C46 68.0558 44.0692 66.125 41.6875 66.125C39.3058 66.125 37.375 68.0558 37.375 70.4375C37.375 72.8192 39.3058 74.75 41.6875 74.75Z" fill="#EDEDED" />
                    <path d="M60.375 86.25H23C21.4755 86.2485 20.0138 85.6422 18.9358 84.5642C17.8578 83.4862 17.2515 82.0245 17.25 80.5V11.5C17.2515 9.97547 17.8578 8.51382 18.9358 7.43582C20.0138 6.35781 21.4755 5.75152 23 5.75H60.375V11.5H23V80.5H60.375V57.5H66.125V80.5C66.1235 82.0245 65.5172 83.4862 64.4392 84.5642C63.3612 85.6422 61.8995 86.2485 60.375 86.25Z" fill="#EDEDED" />
                </svg>
            )
        case "design":
            return (
                <svg className={className} width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M55.8571 32.8572C59.4864 32.8572 62.4285 29.9151 62.4285 26.2858C62.4285 22.6565 59.4864 19.7144 55.8571 19.7144C52.2278 19.7144 49.2856 22.6565 49.2856 26.2858C49.2856 29.9151 52.2278 32.8572 55.8571 32.8572Z" stroke="#EDEDED" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29.5714 65.714C31.386 65.714 32.8571 64.2429 32.8571 62.4283C32.8571 60.6136 31.386 59.1426 29.5714 59.1426C27.7567 59.1426 26.2856 60.6136 26.2856 62.4283C26.2856 64.2429 27.7567 65.714 29.5714 65.714Z" stroke="#EDEDED" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29.5714 42.7141C33.2007 42.7141 36.1429 39.772 36.1429 36.1427C36.1429 32.5134 33.2007 29.5713 29.5714 29.5713C25.9421 29.5713 23 32.5134 23 36.1427C23 39.772 25.9421 42.7141 29.5714 42.7141Z" stroke="#EDEDED" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M62.56 80.6971C62.4868 79.4224 62.0438 78.1967 61.2852 77.1697C60.5267 76.1428 59.4854 75.359 58.2886 74.9142C55.3163 73.9373 52.7901 71.9322 51.164 69.2593C49.5379 66.5865 48.9187 63.4212 49.4176 60.3326C49.9165 57.244 51.5009 54.4346 53.8859 52.4097C56.2708 50.3848 59.2999 49.277 62.4286 49.2857H74.7171C76.8248 49.2915 78.903 48.7904 80.7763 47.8246C82.6497 46.8588 84.2633 45.4566 85.481 43.7363C86.6987 42.016 87.4849 40.0281 87.7731 37.9402C88.0613 35.8524 87.8432 33.7258 87.1371 31.7399C84.5234 24.36 79.9317 17.8404 73.8636 12.8934C67.7955 7.94637 60.4845 4.76227 52.7293 3.68896C44.9741 2.61565 37.0731 3.69442 29.8895 6.80741C22.7059 9.9204 16.5161 14.9479 11.9962 21.3405C7.47642 27.7331 4.80048 35.2451 4.2608 43.0555C3.72112 50.866 5.33845 58.6746 8.93609 65.6281C12.5337 72.5817 17.9733 78.4127 24.6605 82.4841C31.3476 86.5555 39.0252 88.7107 46.8543 88.7142C50.7207 88.725 54.5695 88.1942 58.2886 87.1371C59.6545 86.7543 60.8374 85.8934 61.6215 84.7112C62.4056 83.529 62.7387 82.1044 62.56 80.6971Z" stroke="#EDEDED" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            )

        default:
            return <h1>404 NOT FOUND</h1>
    }
}