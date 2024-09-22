import {
  Logo,
  Button,
} from '@/components/common/ui-kit'
import { ButtonColor, ButtonSize } from '@/types/ui'

import { HeaderLink } from './HeaderLink'

interface HeaderDefaultProps {
  openAuthModal: () => void;
  openRegModal: () => void;
}

export function HeaderDefault({
  openAuthModal,
  openRegModal,
}: HeaderDefaultProps) {
  return (
    <header className='relative z-10 shadow-header py-5 text-base'>
      <div className='flex justify-between items-center gap-10 wrapper-main wrapper-max'>
        <Logo />

        <nav className='flex gap-15'>
          <HeaderLink href='/constructor'>Конструктор</HeaderLink>
          <HeaderLink href='/rates'>Тарифы</HeaderLink>
          <HeaderLink href='/contacts'>Контакты</HeaderLink>
        </nav>

        <div className='flex gap-10'>
          <Button
            className='min-w-45'
            size={ButtonSize.MD}
            color={ButtonColor.BLUE}
            onClick={openRegModal}
          >
            Регистрация
          </Button>
          <Button
            className='min-w-45'
            size={ButtonSize.MD}
            color={ButtonColor.GRAY}
            onClick={openAuthModal}
          >
            Вход
          </Button>
        </div>
      </div>
    </header>
  )
}
