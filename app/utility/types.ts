import { EffectsType } from '@/types/constructor'

export function isEffectsType(value: string): value is EffectsType {
  return Object.values(EffectsType).includes(value as EffectsType)
}
