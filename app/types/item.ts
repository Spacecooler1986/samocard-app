import Konva from 'konva'
import { KonvaEventObject } from 'konva/lib/Node'

import { StageData } from './stage'

export type ItemData = {
  'data-item-type': string
  id?: string
  x: number
  y: number
  width?: number
  height?: number
  fill?: string
  draggable?: boolean
  zIndex?: number
  updatedAt?: number
  scaleX?: number
  scaleY?: number
  opacity?: number
  rotation?: number
  src?: string
} & Record<string, unknown>

export type ItemProps = {
  key: string
  data: ItemData
  e?: Event
} & Record<string, unknown>

export type ITEMS_CONTEXT = {
  selectedItems: Konva.Node[]
  onCreate: (newItem: StageData) => void
  onDelete: (targetItemId: string | string[]) => void
  onSelect: (e?: KonvaEventObject<MouseEvent>, itemList?: Konva.Node[]) => void
  onClear: () => void
  onAlter: (dataList: StageData[]) => void
}

export type OverrideItemProps<T> = Omit<ItemProps, keyof T> & T & Pick<ITEMS_CONTEXT, 'onSelect'>

export type OverrideItemData<T> = Omit<ItemData, keyof T> & T
// export type OverrideItemData = ItemData

