import { useEffect, useState } from "react";

export default function UseIntersection(element: any, rootMargin: string) {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const elementCurrent = element.current;
        if (elementCurrent == null) {
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setState(entry.isIntersecting);
                }
            }, { rootMargin }
        );

        element.current && observer.observe(element.current);

        return () => observer.unobserve(elementCurrent);
    }, [element, rootMargin]);

    return isVisible;
};