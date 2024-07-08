import { useEffect, useState, useRef } from "react"

export default function useNearScreen ({ distance = '100px', externalRef, once = true } = {}) {
    const elementRef = useRef()
    const [isNearScreen, setIsNearScreen] = useState(false)
    const element = externalRef ? externalRef.current : elementRef.current

    useEffect(() => {
        const onChange = (entries, observer) => {
            const elementSeleted = entries[0]

            if (elementSeleted.isIntersecting) {
                setIsNearScreen(true)
                once && observer.disconnect()
            } else {
                !once && setIsNearScreen(false)
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: distance
        })

        element && observer.observe(element)
        return () => observer.disconnect()
    })

    return { isNearScreen, element }
}
