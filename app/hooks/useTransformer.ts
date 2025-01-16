import Konva from 'konva'
import { KonvaEventObject } from 'konva/lib/Node'
import { RefObject, useRef } from 'react'
import { Stage } from 'konva/lib/Stage'

import transformerList from '@/config/transformer.json'

import { useItem } from './useItem'

export const useTransformer = () => {
  const transformerRef = useRef() as RefObject<Konva.Transformer>
  const { updateItem } = useItem()

  const onTransformEnd = (e: KonvaEventObject<Event>) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    updateItem(e.target.id(), () => ({
      ...e.target.attrs,
      updatedAt: Date.now(),
    }))

    const stage = e.target.getStage()

    if (stage && stage instanceof Stage) {
      stage.batchDraw()
    }
  }

  const setTransformerConfig = (transformer: Konva.Transformer) => {
    let nodeStatus = 'default'

    if (transformer.nodes().length === 1) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
      nodeStatus = transformer.getNode().attrs['data-item-type']
    }

    for (const field in (transformerList as Record<string, Konva.TransformerConfig>)[nodeStatus]) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
      transformer.attrs[field] = (transformerList as Record<string, Konva.TransformerConfig>)[
        nodeStatus
      ][field]
    }

    transformer.update()
  }

  return {
    transformerRef,
    onTransformEnd,
    setTransformerConfig,
  }
}

export default useTransformer
