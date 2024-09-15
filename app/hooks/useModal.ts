import { useCallback, useEffect, useState } from 'react'

export const useModal = () => {
  const [isOpen, setOpen] = useState(false)

  const open = useCallback((): void => {
    setOpen(true)
  }, [])

  const close = useCallback((): void => {
    setOpen(false)
  }, [])

  const handleEscKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
      }
    },
    [close]
  )

  useEffect(() => {
    document.addEventListener('keyup', handleEscKey, false)

    return () => {
      document.removeEventListener('keyup', handleEscKey, false)
    }
  }, [handleEscKey])

  return {
    isOpen,
    open,
    close,
  }
}
