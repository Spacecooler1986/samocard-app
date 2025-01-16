'use client'

import { useRef } from 'react'

import { ButtonColor, ButtonSize } from '@/types/ui'
import { Button } from '@/components/common/ui-kit'

interface DownloadFileProps {
  className?: string
  onDownload: () => void
}

export function DownloadFile({ className, onDownload }: DownloadFileProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

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
        onClick={onDownload}
      >
        Загрузить файлы
      </Button>
    </div>
  )
}
