import { useEffect, useState, useRef } from 'react'

/**
 * Hook to detect when an element enters/exits the viewport
 * Returns true when element is visible
 */
export const useScrollAnimation = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            {
                threshold,
                rootMargin: '0px 0px -100px 0px' // Trigger slightly before element enters viewport
            }
        )

        const currentRef = ref.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [threshold])

    return [ref, isVisible]
}

/**
 * Hook for staggered animations on multiple elements
 */
export const useStaggeredAnimation = (count, delay = 100) => {
    const [visibleItems, setVisibleItems] = useState(new Set())
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Stagger the appearance of items
                    for (let i = 0; i < count; i++) {
                        setTimeout(() => {
                            setVisibleItems(prev => new Set([...prev, i]))
                        }, i * delay)
                    }
                } else {
                    // Reset when leaving viewport
                    setVisibleItems(new Set())
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        )

        const currentRef = ref.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [count, delay])

    return [ref, visibleItems]
}
