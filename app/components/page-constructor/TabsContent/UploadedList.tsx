'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

const UPLOADED_ITEMS_COUNT = 9

export function UploadedList() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const onItemSelect = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  return (
    <div className='flex flex-wrap gap-5 justify-content-start justify-items-start'>
      {new Array(UPLOADED_ITEMS_COUNT).fill(null).map((_, index) => (
        <UploadedItem
          key={index}
          index={index}
          onClick={onItemSelect}
          isActive={index === activeIndex}
        />
      ))}
    </div>
  )
}

interface UploadedItemProps {
  isActive?: boolean;
  index: number;
  onClick: (index: number) => void;
}

function UploadedItem({
  isActive,
  index,
  onClick,
}: UploadedItemProps) {
  const handleClick = useCallback(() => {
    onClick(index)
  }, [onClick, index])

  return (
    <div
      key={index}
      className={clsx(
        'relative w-[97px] h-[147px] overflow-hidden cursor-pointer transition-all',
        isActive && 'border-4 border-white',
      )}
      onClick={handleClick}
    >
      <Image
        className='image-cover hover:scale-[1.05] transition-all duration-300'
        src='/images/uploaded-image.jpg'
        alt=''
        fill
      />
    </div>
  )
}
