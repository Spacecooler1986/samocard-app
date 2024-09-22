'use client'

import { useCallback, useRef } from 'react'
import clsx from 'clsx'

import { Button } from '@/components/common/ui-kit'
import { ButtonColor, ButtonSize } from '@/types/ui'

interface AddFileProps {
  className?: string;
}

export function DesignCardAddFile({ className }: AddFileProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onAddFileClick = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  return (
    <div
      className={clsx(
        'flex flex-col gap-13 items-center pt-19 pb-7 border border-black-20 border-dashed rounded-20',
        className
      )}
    >
      <input
        ref={fileInputRef}
        type='file'
        className='sr-only'
      />
      <Button
        size={ButtonSize.LG}
        color={ButtonColor.BLUE}
        type='button'
        onClick={onAddFileClick}
      >
        Выбрать файл
      </Button>
      <p className='text-xs font-arial font-bold'>
        Можно загружать файл в jpg, png или gif
      </p>
    </div>
  )
}
