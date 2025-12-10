import { useState, useEffect } from 'react'

export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const updateMousePosition = ev => {
            setMousePosition({
                x: (ev.clientX / window.innerWidth) * 2 - 1,
                y: -(ev.clientY / window.innerHeight) * 2 + 1
            })
        }
        window.addEventListener('mousemove', updateMousePosition)
        return () => window.removeEventListener('mousemove', updateMousePosition)
    }, [])

    return mousePosition
}

export const useScrollProgress = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scroll = totalScroll / windowHeight
            setProgress(scroll)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return progress
}
