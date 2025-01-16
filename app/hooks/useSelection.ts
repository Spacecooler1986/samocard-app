import { useCallback, useState } from 'react'
import Konva from 'konva'
import { KonvaEventObject, Node } from 'konva/lib/Node'

import { StageData } from '@/types/stage'

import useTransformer from './useTransformer'
import { useItem } from './useItem'

export function useSelection(transformer: ReturnType<typeof useTransformer>) {
  const [selectedItems, setSelectedItems] = useState<Konva.Node | null>()
  const { updateItem } = useItem()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSelectItem = useCallback((e?: KonvaEventObject<MouseEvent>, _itemList?: Node[]) => {
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

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    updateItem(String(target.id() || target.attrs.id), (item: StageData) => ({
      ...item?.attrs,
      updatedAt: Date.now(),
    }))
  }, [transformer, updateItem])

  return {
    selectedItems,
    setSelectedItems,
    onSelectItem,
  }
}
