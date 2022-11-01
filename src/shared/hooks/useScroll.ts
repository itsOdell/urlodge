import {useState, useEffect} from "react"

export const useScroll = (): number => {
    const [scrolled, setScrolled] = useState<number>(0)
    useEffect(() => {
        window.addEventListener("scroll", function(): void {
            setScrolled(window.pageYOffset)
        })
    }, [])
    return scrolled;
}