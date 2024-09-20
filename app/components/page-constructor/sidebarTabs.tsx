import {
  BorderIcon,
  CloudUploadIcon,
  FontSizeIcon,
  PictureIcon,
  SunIcon,
  WindowsIcon,
} from '@/components/common/ui-kit'
import { ConstructorSections, IConstructorTab } from '@/types/constructor'

import {
  TemplatesTab,
  UploadTab,
  EffectsTab,
  BackgroundTab,
  ElementsTab,
  TextTab,
} from './TabsContent'

export const tabs: IConstructorTab[] = [
  {
    value: ConstructorSections.TEMPLATES,
    title: 'Шаблоны',
    icon: PictureIcon,
    content: TemplatesTab,
  },
  {
    value: ConstructorSections.UPLOAD,
    title: 'Загрузить',
    icon: CloudUploadIcon,
    content: UploadTab,
  },
  {
    value: ConstructorSections.EFFECTS,
    title: 'Эффекты',
    icon: SunIcon,
    content: EffectsTab,
  },
  {
    value: ConstructorSections.BACKGROUND,
    title: 'Фон',
    icon: WindowsIcon,
    content: BackgroundTab,
  },
  {
    value: ConstructorSections.ELEMENTS,
    title: 'Элементы',
    icon: BorderIcon,
    content: ElementsTab,
  },
  {
    value: ConstructorSections.TEXT,
    title: 'Текст',
    icon: FontSizeIcon,
    content: TextTab,
  },
]
