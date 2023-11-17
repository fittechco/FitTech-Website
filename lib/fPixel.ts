export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

declare global {
    interface Window {
        fbq: (
            type: "track",
            name: string,
            options?: Record<string, unknown>,
        ) => void;
    }
}

export const pageview = () => {
    window.fbq('track', 'PageView')
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}) => {
    window.fbq('track', name, options)
}