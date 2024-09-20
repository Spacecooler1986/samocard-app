import {
  BackgroundType,
  EffectsType,
  ElementsType,
  UploadedType,
  IConstructorContentTab,
} from '@/types/constructor'

export const uploadedContentTabs: IConstructorContentTab[] = [
  {
    value: UploadedType.IMAGE,
    title: 'Изображения',
  },
  {
    value: UploadedType.VIDEO,
    title: 'Видео',
  },
]

export const effectsContentTabs: IConstructorContentTab[] = [
  {
    value: EffectsType.SHADOW,
    title: 'Тень',
  },
  {
    value: EffectsType.OUTLINE,
    title: 'Контур',
  },
  {
    value: EffectsType.OPACITY,
    title: 'Прозрачность',
  },
]

export const backgroundContentTabs: IConstructorContentTab[] = [
  {
    value: BackgroundType.GRADIENT,
    title: 'Градиент',
  },
  {
    value: BackgroundType.ABSTRACT,
    title: 'Абстрактный',
  },
  {
    value: BackgroundType.PHOTO,
    title: 'Фото',
  },
  {
    value: BackgroundType.UPLOADS,
    title: 'Загрузки',
  },
]

export const elementsContentTabs: IConstructorContentTab[] = [
  {
    value: ElementsType.FIGURES,
    title: 'Фигуры',
  },
  {
    value: ElementsType.OBJECTS,
    title: 'Объекты',
  },
  {
    value: ElementsType.EMOJI,
    title: 'Эмодзи',
  },
]
