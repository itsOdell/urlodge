import { useState, useEffect } from "react";

export const useWidth = (): number | boolean => {
    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        setWidth(document.documentElement.clientWidth)
        window.onresize = (): void => setWidth(document.documentElement.clientWidth)
    }, [])
    return width;
}