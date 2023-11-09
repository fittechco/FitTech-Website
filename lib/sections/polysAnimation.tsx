import { LogoPoly } from "../Polygons/logoPoly";
import MainPoly from "../Polygons/mainPoly";
import { PlaceHolderPoly } from "../Polygons/placeHolderPoly";

export default function PolysAnimation({ visible }: { visible: boolean }) {
    return (
        <div className="polyContainer hidden lg:block absolute top-[12%] right-0 w-fit h-fit scale-50 lg:scale-100">
            <div className="polyWrapper relative">
                <PlaceHolderPoly className="  w-[620px]" />
                <MainPoly visible={visible} title="Shopify eCommerce Websites" className="delay-[200ms]  " mainPos={{
                    x: 14,
                    y: 6.5
                }} scatter={{
                    x: 12,
                    y: 3.5
                }} scatter2={{
                    x: 26.3,
                    y: 71.4
                }} scatter3={{
                    x: 67.6,
                    y: 51.4,
                }} shape={{
                    x: 26.4,
                    y: 66.3
                }} shape2={{
                    x: 62.6,
                    y: 46.4
                }} />
                <MainPoly visible={visible} title="Web Design" className="delay-[400ms] " mainPos={{
                    x: 38.3,
                    y: 6.5
                }} scatter={{
                    x: 38.3,
                    y: 3.5
                }} scatter2={{
                    x: 66.6,
                    y: 49.4
                }} scatter3={{
                    x: 38.3,
                    y: 3.5
                }} shape={{
                    x: 62.6,
                    y: 46.4
                }} shape2={{
                    x: 38.3,
                    y: 6.5
                }} />
                <MainPoly visible={visible} title="Shopify App Integration" className="delay-[600ms] " mainPos={{
                    x: 50.7,
                    y: 26.6
                }} scatter={{
                    x: 54.7,
                    y: 26.6
                }} scatter2={{
                    x: 54.7,
                    y: 26.6
                }} scatter3={{
                    x: 54.7,
                    y: 26.6
                }} shape={{
                    x: 50.7,
                    y: 26.6
                }} shape2={{
                    x: 50.7,
                    y: 26.6
                }} />
                <MainPoly visible={visible} title="Shopify Mobile Apps" className="delay-[800ms]" mainPos={{
                    x: 38,
                    y: 46.7
                }} scatter={{
                    x: 41,
                    y: 49.7
                }} scatter2={{
                    x: 41,
                    y: 49.7
                }} scatter3={{
                    x: 41,
                    y: 49.7
                }} shape={{
                    x: 38,
                    y: 46.7
                }} shape2={{
                    x: 38,
                    y: 46.7
                }} />
                <MainPoly visible={visible} title="Shopify SEO Optimization" className="delay-[1000ms]" mainPos={{
                    x: 13.8,
                    y: 46.7
                }} scatter={{
                    x: 11.8,
                    y: 48.7
                }} scatter2={{
                    x: 11.8,
                    y: 48.7
                }} scatter3={{
                    x: 65.7,
                    y: 3.5
                }} shape={{
                    x: 13.8,
                    y: 46.7
                }} shape2={{
                    x: 62.7,
                    y: 6.5
                }} />
                <MainPoly visible={visible} title="Shopify Storefront Setup" className="delay-[1200ms] " mainPos={{
                    x: 1.5,
                    y: 26.6
                }} scatter={{
                    x: -1,
                    y: 26.6
                }} scatter2={{
                    x: -1,
                    y: 26.6
                }} scatter3={{
                    x: 12,
                    y: 3.5
                }} shape={{
                    x: 1.5,
                    y: 26.6
                }} shape2={{
                    x: 14,
                    y: 6.5
                }} />
                <LogoPoly visible={visible} className="absolute top-[25.5%] left-[24.5%]" />
            </div>
        </div>
    )
}