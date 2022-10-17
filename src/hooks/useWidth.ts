import { useState, useEffect } from "react";

export const useWidth = (): number => {
    const [width, setWidth] = useState<number>(0)
    useEffect(() => {
        window.addEventListener("resize", function(): void {
            setWidth(document.documentElement.clientWidth)
        })
    }, [])
    return width;
}