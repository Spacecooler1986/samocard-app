'use client'

import { Circle, Rect, Transformer } from 'react-konva'
import { MutableRefObject, useCallback } from 'react'
import { Box } from 'konva/lib/shapes/Transformer'
import Konva from 'konva'

import ConstructorCard from '@/components/page-constructor/ConstructorCard'
import ImageItem from '@/components/page-constructor/ImageItem'
import TextItem from '@/components/page-constructor/TextItem'
import { StageData } from '@/types'
import { useDragAndDrop, useItem, useSelection, useTransformer } from '@/hooks'

interface IProps {
  ref: MutableRefObject<Konva.Stage>
}

export default function Card({ ref }: IProps) {
  const { stageData } = useItem()
  const { onDragEndFrame, onDragStart } = useDragAndDrop()
  const transformer = useTransformer()
  const { onSelectItem } = useSelection(transformer)
  const boundBoxFunc = useCallback((_: Box, newBox: Box) => newBox, [])

  const renderItem = useCallback((item: StageData) => {
    const { id, attrs } = item

    if (!attrs['data-item-type']) {
      return null
    }

    switch (attrs['data-item-type']) {
      case 'circle':
        return (
          <Circle
            key={id}
            id={id}
            {...attrs}
            onDragMove={onDragStart}
            onDragEnd={onDragEndFrame}
            onClick={onSelectItem}
          />
        )
      case 'rect':
        return (
          <Rect
            key={id}
            id={id}
            {...attrs}
            onDragMove={onDragStart}
            onDragEnd={onDragEndFrame}
            onClick={onSelectItem}
          />
        )
      case 'image':
        return (
          <ImageItem
            key={id}
            data={item}
            onSelect={onSelectItem}
          />
        )
      case 'text':
        return (
          <TextItem
            key={id}
            data={item}
            onSelect={onSelectItem}
            transformer={transformer}
          />
        )
      default:
        return null
    }
  }, [
    onDragEndFrame,
    onDragStart,
    onSelectItem,
  ])

  return (
    <div className='grow flex flex-col justify-center items-center py-10'>
      <ConstructorCard
        stageRef={ref}
        onSelect={onSelectItem}
        isEmpty={!stageData?.length}
      >
        {stageData?.length > 0 ? stageData.map(renderItem) : null}
        <Transformer
          ref={transformer.transformerRef}
          keepRatio
          // shouldOverdrawWholeArea
          boundBoxFunc={boundBoxFunc}
          onTransformEnd={transformer.onTransformEnd}
        />
      </ConstructorCard>
    </div>
  )
}
