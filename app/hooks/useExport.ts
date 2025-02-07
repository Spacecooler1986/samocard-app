import { useCallback } from 'react'

export function useExport(uri: string) {
  const handleExport = useCallback(() => {
    const link = document.createElement('a')

    if (!uri) {
      return
    }

    link.download = 'export.png'
    link.href = uri
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [uri])

  return {
    handleExport,
  }
}
