'use client'

import {
  MutableRefObject,
  ReactNode,
  useCallback,
  useState,
} from 'react'
import clsx from 'clsx'
import Konva from 'konva'
import { KonvaEventObject } from 'konva/lib/Node'
import { useDispatch } from 'react-redux'

import {
  DeleteIcon,
  DesignCard,
  ExpandIcon,
  HeatMapIcon,
  PlusIcon,
  RefreshIcon,
  SunIcon,
  HolderIcon,
  DesignCardControl,
  Button,
} from '@/components/common/ui-kit'
import { ButtonSize, DesignCardHeaderColor } from '@/types/ui'
import { cardImageAction } from '@/store/cardImage'
import { useStageSize } from '@/hooks/useStageSize'

import { ConstructorCardStage } from './ConstructorCardStage'

const cardControls = [
  {
    id: 'rotate',
    label: 'Повернуть',
    icon: <RefreshIcon className='image-cover' />,
  },
  {
    id: 'add',
    label: 'Добавить',
    icon: <PlusIcon className='image-cover' />,
  },
  {
    id: 'cut',
    label: 'Обрезать',
    icon: <ExpandIcon className='image-cover' />,
  },
  {
    id: 'brightness',
    label: 'Яркость',
    icon: <SunIcon className='image-cover' />,
  },
  {
    id: 'outline',
    label: 'Контур',
    icon: <HeatMapIcon className='image-cover' />,
  },
  {
    id: 'opacity',
    label: 'Прозрачность',
    icon: <HolderIcon className='image-cover' />,
  },
  {
    id: 'delete',
    label: 'Удалить',
    icon: <DeleteIcon className='image-cover' />,
  },
]

interface ConstructorCardProps {
  stageRef: MutableRefObject<Konva.Stage>
  children: ReactNode
  isEmpty?: boolean
  onSelect: (e?: KonvaEventObject<MouseEvent>, itemList?: Konva.Node[]) => void
}

export default function ConstructorCard({
  children,
  stageRef,
  isEmpty,
  onSelect,
}: ConstructorCardProps) {
  const dispatch = useDispatch()
  const ref = stageRef.current
  const { stageContainerRef, stageHeight, stageWidth } = useStageSize()

  const [activeControlId, setActiveControlId] = useState<string | null>(
    null
  )

  const handleControlClick = useCallback((id: string) => {
    setActiveControlId(id)
  }, [])

  const applyChanges = useCallback(() => {
    dispatch(cardImageAction.setUri(ref?.toDataURL() ?? ''))
  }, [dispatch, ref])

  return (
    <DesignCard
      headerColor={DesignCardHeaderColor.PINK}
      header={(
        <div
          className={clsx(
            'absolute bottom-1/2 translate-y-1/2 left-0 flex gap-5 items-center justify-center',
            'min-w-full py-10 px-6',
          )}
        >
          {cardControls.map((control) => (
            <DesignCardControl
              key={control.id}
              label={control.label}
              icon={control.icon}
              id={control.id}
              onClick={handleControlClick}
              isActive={control.id === activeControlId}
            />
          ))}
        </div>
      )}
      content={(
        <div className='flex flex-col gap-10 items-center w-full'>
          <div
            ref={stageContainerRef}
            className='relative w-[60%] pb-[80%] overflow-hidden'
          >
            <ConstructorCardStage
              className='absolute top-0 left-0 w-full h-full'
              stageRef={stageRef}
              width={stageWidth}
              height={stageHeight}
              onSelect={onSelect}
            >
              {children}
            </ConstructorCardStage>
          </div>
          <Button
            size={ButtonSize.LG}
            onClick={applyChanges}
            disabled={isEmpty}
          >
            Применить
          </Button>
        </div>
      )}
      className='w-[40%] pb-[60%] 3xl:w-[500px] 3xl:h-[750px]'
    />
  )
}
