import { useCallback } from 'react'
import { nanoid } from '@reduxjs/toolkit'

import {
  Button,
  Input,
  PlusIcon,
  SearchIcon,
} from '@/components/common/ui-kit'
import {
  ButtonColor,
  ButtonSize,
  InputSize,
} from '@/types/ui'
import { TextEditor } from '@/components/page-constructor'
import { useItem } from '@/hooks'
import { StageData } from '@/types'

export function TextTab() {
  const { createItem } = useItem()

  const handleAddText = useCallback(() => {
    const newText = {
      id: nanoid(),
      attrs: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'data-item-type': 'text',
        'x': 100,
        'y': 100,
        'text': 'Замените этот текст',
        'fill': '#000',
        'draggable': true,
      },
      className: '',
    }

    createItem(newText as unknown as StageData)
  }, [createItem])

  return (
    <div className='flex flex-col gap-5'>
      <Input
        placeholder='Поиск шрифта'
        icon={<SearchIcon className='image-cover' />}
        sizeType={InputSize.SM}
      />

      <Button
        type='button'
        size={ButtonSize.MD}
        color={ButtonColor.PINK}
        icon={<PlusIcon color='white' />}
        onClick={handleAddText}
      >
        Добавить текст
      </Button>
      <TextEditor className='mt-7' />
    </div>
  )
}
