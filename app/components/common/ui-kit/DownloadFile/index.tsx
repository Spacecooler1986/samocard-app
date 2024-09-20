'use client'

import { useCallback, useRef } from 'react'

import { ButtonColor, ButtonSize } from '@/types/ui'
import { Button } from '@/components/common/ui-kit'

interface DownloadFileProps {
  className?: string;
}

export function DownloadFile({ className }: DownloadFileProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onButtonClick = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  return (
    <div className={className}>
      <input
        className='sr-only'
        type='file'
        ref={fileInputRef}
      />

      <Button
        size={ButtonSize.MD}
        color={ButtonColor.PINK}
        className='w-full max-w-full'
        type='button'
        onClick={onButtonClick}
      >
        Загрузить файлы
      </Button>
    </div>
  )
}
