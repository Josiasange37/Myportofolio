import { useEffect } from 'react'

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

export const useKonamiCode = (callback) => {
  useEffect(() => {
    let keySequence = []

    const handleKeyDown = (e) => {
      keySequence.push(e.key)
      keySequence = keySequence.slice(-KONAMI_CODE.length)

      if (keySequence.join(',') === KONAMI_CODE.join(',')) {
        callback()
        keySequence = []
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [callback])
}
