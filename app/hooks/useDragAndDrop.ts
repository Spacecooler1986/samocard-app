import { useCallback } from 'react'
import { KonvaEventObject } from 'konva/lib/Node'

import { StageData } from '@/types/stage'

import { useItem } from './useItem'

export function useDragAndDrop() {
  const { updateItem } = useItem()

  const onDragStart = useCallback((e: KonvaEventObject<DragEvent>) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
    updateItem(e.target.id?.() || e.target.attrs?.id, (item: StageData) => ({
      ...item?.attrs,
      updatedAt: Date.now(),
    }))
  }, [updateItem])

  const onDragEndFrame = useCallback((e: KonvaEventObject<DragEvent>): void => {
    e.evt.preventDefault()
    e.evt.stopPropagation()
    console.log('DRAG END', e.target.id?.(), e.target.attrs)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-unsafe-assignment
    const { image: _, ...newAttrs } = e.target.attrs

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-return
    updateItem(e.target.id?.() || e.target.attrs.id, (item?: StageData) => ({
      ...item?.attrs,
      ...newAttrs,
      updatedAt: Date.now(),
    }))
    e.target.getLayer()?.batchDraw()
  }, [updateItem])

  return {
    onDragStart,
    onDragEndFrame,
  }
}
