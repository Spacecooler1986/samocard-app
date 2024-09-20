import { Button, Input, PlusIcon, SearchIcon } from '@/components/common/ui-kit'
import { ButtonColor, ButtonSize, InputSize } from '@/types/ui'
import { TextEditor } from '@/components/page-constructor/TextEditor'

export function TextTab() {
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
      >
        Добавить текст
      </Button>
      <TextEditor className='mt-7' />
    </div>
  )
}
