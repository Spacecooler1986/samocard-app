import { useRef, useState, useEffect } from 'react'

export const useStageSize = () => {
  const stageContainerRef = useRef<HTMLDivElement>(null)
  const [stageWidth, setStageWidth] = useState(0)
  const [stageHeight, setStageHeight] = useState(0)

  useEffect(() => {
    const setStageSize = () => {
      const stageContainerWidth = stageContainerRef.current?.offsetWidth

      if (stageContainerWidth) {
        setStageWidth(stageContainerWidth)
      }

      const stageContainerHeight = stageContainerRef.current?.offsetHeight

      if (stageContainerHeight) {
        setStageHeight(stageContainerHeight)
      }
    }

    const onWindowResize = () => {
      setStageSize()
    }

    setStageSize()
    window.addEventListener('resize', onWindowResize)

    return () => {
      window.removeEventListener('resize', onWindowResize)
    }
  }, [])

  return {
    stageContainerRef,
    stageWidth,
    stageHeight,
  }
}
