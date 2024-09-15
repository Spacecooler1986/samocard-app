import {
  Input,
  Button,
} from '@/components/common/ui-kit'
import {
  ButtonColor,
  ButtonSize,
  InputColor,
  InputSize,
} from '@/types/ui'

import Socials from './Socials'

export default function AuthForm() {
  return (
    <form className='flex flex-col gap-5 w-full'>
      <h2 className='text-3xl font-medium text-center'>Вход</h2>
      <Input
        className='font-medium'
        placeholder='Email'
        sizeType={InputSize.BASE}
        color={InputColor.GRAY}
      />
      <Input
        className='font-medium'
        placeholder='Пароль'
        sizeType={InputSize.BASE}
        color={InputColor.GRAY}
        type='password'
      />
      <Button
        color={ButtonColor.BLUE}
        size={ButtonSize.MD}
        className='w-full font-semibold'
      >
        Войти
      </Button>
      <div
        className='
          relative grid w-full grid-cols-[1fr,_auto,_1fr] gap-x-7 items-center mt-5 font-medium tracking-02
          before:w-full before:h-px before:bg-gray-platinum
          after:w-full after:h-px after:bg-gray-platinum
        '
      >
        или с помощью
      </div>
      <Socials />
      <p className='mt-5 text-sm font-500 tracking-02 text-black-50'>
        Еще нет аккаунта?
        {' '}
        <a
          className='text-blue hover:underline'
          href='#'
        >
          Зарегистрируйтесь
        </a>
      </p>
    </form>
  )
}
