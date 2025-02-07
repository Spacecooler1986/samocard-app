import { useEffect, useState } from 'react'
import Konva from 'konva'
import { Image as KonvaImage } from 'react-konva'

import { OverrideItemProps } from '@/types/item'
import { StageData } from '@/types/stage'
import { useDragAndDrop } from '@/hooks/useDragAndDrop'

type IProps = OverrideItemProps<{
  data: StageData
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

    const source = attrs.src
    // if (typeof attrs.src === 'string' && attrs.src.startsWith('find:')) {
    //   source = attrs.src
    // } else {
    //   source = attrs.src
    // }

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

    if (source && typeof source === 'string') {
      newImage.src = source
    }
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
      opacity={Number(attrs.opacity) ?? 1}
      rotation={Number(attrs.rotation) ?? 0}
      draggable
      onDragMove={onDragStart}
      onDragEnd={onDragEndFrame}
      onClick={onSelect}
    />
  )
}
