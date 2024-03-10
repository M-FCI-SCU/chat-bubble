import { useEffect, useState } from 'react'

export default function useIsMobile() {

    const [isMobile, setIsMobile] = useState(false)

    const checkScreenWidth = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 640) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        checkScreenWidth();
        window.addEventListener("resize", checkScreenWidth);
        return () => {
            window.removeEventListener("resize", checkScreenWidth);
        };
    }, []);

    return [isMobile]
}

