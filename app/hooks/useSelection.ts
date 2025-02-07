import { useCallback, useState } from 'react'
import Konva from 'konva'
import { KonvaEventObject } from 'konva/lib/Node'

import { StageData } from '@/types/stage'

import useTransformer from './useTransformer'
import { useItem } from './useItem'

export function useSelection(transformer: ReturnType<typeof useTransformer>) {
  const [selectedItems, setSelectedItems] = useState<Konva.Node | null>()
  const { updateItem } = useItem()

  const onSelectItem = useCallback((e?: KonvaEventObject<MouseEvent>) => {
    if (!transformer.transformerRef.current || !e) {
      return
    }

    if (e?.target.getType() === 'Stage') {
      transformer.transformerRef.current.nodes([])
      transformer.setTransformerConfig(transformer.transformerRef.current)
      setSelectedItems(null)
      return
    }

    setSelectedItems(e?.target as Konva.Node)
    transformer.transformerRef.current?.nodes([e?.target as Konva.Node])
    transformer.setTransformerConfig(transformer.transformerRef.current)

    const target = e?.target as Konva.Node

    if (target) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
      updateItem(target.id() || target.attrs.id, (item: StageData) => ({
        ...item?.attrs,
        updatedAt: Date.now(),
      }))
    }
  }, [transformer, updateItem])

  return {
    selectedItems,
    setSelectedItems,
    onSelectItem,
  }
}
