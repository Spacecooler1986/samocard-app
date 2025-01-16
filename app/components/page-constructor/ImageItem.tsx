'use client'

import { useEffect, useState } from 'react'
import Konva from 'konva'
import { Image as KonvaImage } from 'react-konva'

import { ItemData, OverrideItemProps } from '@/types/item'
import { useDragAndDrop } from '@/hooks/useDragAndDrop'

type IProps = OverrideItemProps<{
  data: { attrs: ItemData, id: string }
  e?: DragEvent
}>

const IMAGE_WIDTH_DEFAULT = 256
const IMAGE_HEIGHT_DEFAULT = 256

export default function ImageItem({ data, onSelect }: IProps) {
  const [imageSrc, setImageSrc] = useState<CanvasImageSource>(new Image())
  const [width, setWidth] = useState(IMAGE_WIDTH_DEFAULT)
  const [height, setHeight] = useState(IMAGE_HEIGHT_DEFAULT)
  const { onDragStart, onDragEndFrame } = useDragAndDrop()
  const { attrs } = data

  useEffect(() => {
    const newImage = new Image()

    newImage.onload = () => {
      setImageSrc(newImage)
    }

    newImage.crossOrigin = 'Anonymous'

    let source

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (typeof attrs.src === 'string' && attrs.src.startsWith('find:')) {
      source = attrs.src
    } else {
      source = attrs.src
    }

    if (typeof source === 'string' && source.startsWith('data:')) {
      Konva.Image.fromURL(source, (imageNode: Konva.Image) => {
        if (imageNode.width() > imageNode.height()) {
          setHeight(width * (imageNode.height() / imageNode.width()))
        } else {
          setWidth(height * (imageNode.width() / imageNode.height()))
        }

        imageNode.width(width)
        imageNode.height(height)
        newImage.src = imageNode.toDataURL({
          x: 0,
          y: 0,
          width,
          height,
          pixelRatio: 5,
        })
      })
      return
    }

    newImage.src = source as string
  }, [attrs.src])

  return (
    <KonvaImage
      image={imageSrc}
      name='label-target'
      data-item-type='image'
      data-frame-type='image'
      id={data.id}
      x={Number(attrs.x)}
      y={Number(attrs.y)}
      width={width}
      height={height}
      scaleX={Number(attrs.scaleX)}
      scaleY={Number(attrs.scaleY)}
      fill={attrs.fill ?? 'transparent'}
      opacity={attrs.opacity ?? 1}
      rotation={attrs.rotation ?? 0}
      draggable
      onDragMove={onDragStart}
      onDragEnd={onDragEndFrame}
      onClick={onSelect}
    />
  )
}
