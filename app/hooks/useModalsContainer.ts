import { useEffect, useRef } from 'react'

export const useModalsContainer = (): {modalsContainer: HTMLElement | null} => {
  const modalsContainerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    modalsContainerRef.current = document.getElementById('modals')
  }, [])

  return {
    modalsContainer: modalsContainerRef.current,
  }
}
