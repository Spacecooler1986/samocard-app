'use client'

import { useCallback, useState } from 'react'
import clsx from 'clsx'

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
} from '@/components/common/ui-kit'
import { DesignCardHeaderColor } from '@/types/ui'

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

export function ConstructorCard() {
  const [activeControlId, setActiveControlId] = useState<string | null>(
    null
  )

  const handleControlClick = useCallback((id: string) => {
    setActiveControlId(id)
  }, [])

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
      content={null}
      className='w-[40%] pb-[60%] 3xl:w-[500px] 3xl:h-[750px]'
    />
  )
}
