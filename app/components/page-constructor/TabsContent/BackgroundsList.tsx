'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

const BACKGROUND_ITEMS_COUNT = 7

export function BackgroundsList() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const onBackgroundItemClick = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  return (
    <div className='grid grid-cols-3 gap-1'>
      {new Array(BACKGROUND_ITEMS_COUNT).fill(null).map((_, index) => (
        <BackgroundItem
          key={index}
          index={index}
          onClick={onBackgroundItemClick}
          isActive={index === activeIndex}
        />
      ))}
    </div>
  )
}

interface BackgroundItemProps {
  isActive?: boolean;
  index: number;
  onClick: (index: number) => void;
}

function BackgroundItem({
  isActive,
  index,
  onClick,
}: BackgroundItemProps) {
  const handleClick = useCallback(() => {
    onClick(index)
  }, [onClick, index])

  return (
    <div
      key={index}
      className={clsx(
        'relative w-full pb-[85%] overflow-hidden cursor-pointer',
        'after:absolute after:top-0 after:left-0 after:w-full after:h-full after:transition-all',
        isActive && 'after:border-4 after:border-white',
      )}
      onClick={handleClick}
    >
      <Image
        className='absolute top-0 left-0 image-cover'
        src='/images/gradient-1.png'
        alt=''
        fill
      />
    </div>
  )
}
