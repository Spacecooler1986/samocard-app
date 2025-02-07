import Konva from 'konva'
import { FC, MutableRefObject } from 'react'

export enum ConstructorSections {
  TEMPLATES = 'templates',
  UPLOAD = 'upload',
  EFFECTS = 'effects',
  BACKGROUND = 'background',
  ELEMENTS = 'elements',
  TEXT = 'text',
}

export enum BackgroundType {
  GRADIENT = 'gradient',
  ABSTRACT = 'abstract',
  PHOTO = 'photo',
  UPLOADS = 'uploads',
}

export enum ElementsType {
  FIGURES = 'figures',
  OBJECTS = 'objects',
  EMOJI = 'emoji',
}

export enum UploadedType {
  IMAGE = 'image',
  VIDEO = 'video',
}

export enum EffectsType {
  SHADOW = 'shadow',
  OUTLINE = 'outline',
  OPACITY = 'opacity',
}

export interface IConstructorTab {
  value: ConstructorSections;
  title: string;
  icon: FC;
  content: FC<{ stageRef?: MutableRefObject<Konva.Stage> }>
}

export interface IConstructorContentTab {
  value: BackgroundType | ElementsType | UploadedType | EffectsType;
  title: string;
  icon?: FC;
  content?: FC;
}
