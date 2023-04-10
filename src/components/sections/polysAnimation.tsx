import { LogoPoly } from "../lib/Polygons/logoPoly";
import MainPoly from "../lib/Polygons/mainPoly";
import { PlaceHolderPoly } from "../lib/Polygons/placeHolderPoly";

export default function PolysAnimation() {
    return (
        <div className="polyContainer hidden lg:block absolute top-[12%] right-0 w-fit h-fit scale-50 lg:scale-100">
            <div className="polyWrapper relative">
                <PlaceHolderPoly className="  w-[620px]" />
                <MainPoly title="Landing Pages" className="absolute " mainPos={{
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
                <MainPoly title="Gyms" className="absolute " mainPos={{
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
                <MainPoly title="Digital Systems" className="absolute " mainPos={{
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
                <MainPoly title="Mobile Apps" className="absolute" mainPos={{
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
                <MainPoly title="Ecommerce Website" className="absolute " mainPos={{
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
                <MainPoly title="Supplements stores" className="absolute " mainPos={{
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
                <LogoPoly className="absolute top-[25.5%] left-[24.5%]" />
            </div>
        </div>
    )
}