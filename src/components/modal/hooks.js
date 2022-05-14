import { useState, useEffect } from 'react'

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)

  const toggle = () => setIsShowing(!isShowing)

  return {
    isShowing,
    toggle
  }
}

export const useClickOutside = (ref, handler) => {
  useEffect(
    () => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }

        handler(event)
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    }, []
  )
}
