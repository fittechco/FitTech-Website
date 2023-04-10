import { useEffect, useState } from "react";

export default function useIntersection(element: any, rootMargin: string) {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setState(entry.isIntersecting);
                }
            }, { rootMargin }
        );

        element.current && observer.observe(element.current);

        return () => element.current && observer.unobserve(element.current);
    }, []);

    return isVisible;
};