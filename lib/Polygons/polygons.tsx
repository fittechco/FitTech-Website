export function Polygon({ className }: { className: string }) {
    return (
        <svg className={className + " w-[152px] h-[176px] bg-transparent"} width="185" height="213" viewBox="0 0 185 213" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_135_287)">
                <path d="M92.5 0L184.732 53.25V159.75L92.5 213L0.268295 159.75V53.25L92.5 0Z" fill="#133E63" />
            </g>
            <path d="M0.768295 53.5387L92.5 0.57735L184.232 53.5387V159.461L92.5 212.423L0.768295 159.461V53.5387Z" stroke="#5CB0F9" />
            <defs>
                <filter id="filter0_i_135_287" x="0.268066" y="0" width="184.464" height="220" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="7" />
                    <feGaussianBlur stdDeviation="3.5" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_135_287" />
                </filter>
            </defs>
        </svg>

    )
}