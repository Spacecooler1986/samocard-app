import Link from 'next/link'

import {
  Button,
  Input,
  BurgerIcon,
  SearchIcon,
  UserIcon,
} from '@/components/common/ui-kit'
import {
  ButtonColor,
  ButtonSize,
  InputSize,
} from '@/types/ui'

interface HeaderAuthorizedProps {
  openMenu: () => void;
}

export function HeaderAuthorized({ openMenu }: HeaderAuthorizedProps) {
  return (
    <header className='relative z-10 shadow-header py-5 text-base'>
      <div className='flex justify-between items-center gap-10 wrapper-main wrapper-max'>
        <button
          className='text-blue-dark w-12 h-12'
          type='button'
          onClick={openMenu}
        >
          <BurgerIcon className='image-cover' />
        </button>

        <Input
          containerClassName='w-[577px]'
          placeholder='Найти шаблон'
          icon={<SearchIcon className='image-cover' />}
          sizeType={InputSize.BASE}
          outlined
        />

        <div className='flex gap-7'>
          <Button
            size={ButtonSize.MD}
            color={ButtonColor.BLUE}
          >
            Создать дизайн
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
