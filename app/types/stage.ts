import { ItemData } from './item'

export type StageData = {
  id: string
  // eslint-disable-next-line
  attrs: ItemData // OverrideItemData<HTMLDivElement>
  className?: string
  children?: StageData[]
};

export type CardImage = {
  uri: string
}
