import Link from 'next/link'

import {
  Button,
  BurgerIcon,
  DownloadIcon,
  UndoIcon,
  UploadIcon,
  UserIcon,
} from '@/components/common/ui-kit'
import { ButtonColor, ButtonSize } from '@/types/ui'

interface HeaderConstructorProps {
  openMenu: () => void;
}

export function HeaderConstructor({ openMenu }: HeaderConstructorProps) {
  return (
    <header className='relative z-10 shadow-header py-5 text-base'>
      <div className='flex justify-between items-center gap-10 wrapper-main wrapper-max'>
        <div className='flex gap-15 items-center'>
          <button
            className='text-blue-dark w-12 h-12'
            type='button'
            onClick={openMenu}
          >
            <BurgerIcon className='image-cover' />
          </button>

          <Link
            className='transition-colors hover:text-blue-dark'
            href='/'
          >
            Главная
          </Link>
        </div>

        <div className='flex gap-7 mr-[93px] ml-auto'>
          <button
            className='w-8 h-8 transition-colors disabled:text-black-30 hover:text-black-real'
            type='button'
            disabled
          >
            <UndoIcon className='-scale-x-100 image-cover' />
          </button>
          <button
            className='w-8 h-8 transition-colors disabled:text-black-30 hover:text-black-real'
            type='button'
          >
            <UndoIcon className='image-cover' />
          </button>
        </div>

        <div className='flex gap-7'>
          <Button
            className='min-w-[220px]'
            size={ButtonSize.MD}
            outlined
            icon={(
              <span className='w-7 h-7'>
                <UploadIcon className='image-cover' />
              </span>
            )}
          >
            Поделиться
          </Button>
          <Button
            className='min-w-[220px]'
            size={ButtonSize.MD}
            color={ButtonColor.BLUE}
            icon={(
              <span className='w-7 h-7'>
                <DownloadIcon className='image-cover' />
              </span>
            )}
          >
            Скачать
          </Button>
          <Link
            className='w-12 h-12 text-black hover:text-blue transition-colors'
            href='#'
          >
            <UserIcon className='image-cover' />
          </Link>
        </div>
      </div>
    </header>
  )
}
