'use client'

import { RefObject, useRef } from 'react'
import Konva from 'konva'
import { Text } from 'react-konva'

import { OverrideItemProps } from '@/types/item'
import { StageData } from '@/types/stage'
import { useDragAndDrop } from '@/hooks/useDragAndDrop'

export type TextItemProps = OverrideItemProps<{
  data: StageData
  e?: DragEvent
}>

export default function TextItem({ data, onSelect }: TextItemProps) {
  const { onDragStart, onDragEndFrame } = useDragAndDrop()
  const textRef = useRef() as RefObject<Konva.Text>

  return (
    <Text
      ref={textRef}
      id={data.id}
      {...data.attrs}
      onDragMove={onDragStart}
      onDragEnd={onDragEndFrame}
      onClick={onSelect}
    />
  )
}
