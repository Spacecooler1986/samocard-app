import { motion } from 'framer-motion'

import {
  Button,
  Logo,
  CloseIcon,
  PlusIcon,
} from '@/components/common/ui-kit'
import { ButtonColor, ButtonSize } from '@/types/ui'

import { ANIMATION_DURATION } from './constants'
import { menuItems } from './menuItems'
import { SidebarMenuLink } from './SidebarMenuLink'

interface SidebarPanelProps {
  close: () => void;
}

export function SidebarPanel({ close }: SidebarPanelProps) {
  return (
    <motion.div
      className='
          absolute top-0 left-0 w-[416px] h-full flex flex-col gap-5 bg-white
        '
      initial={{
        translateX: '-100%',
      }}
      animate={{
        translateX: '0%',
      }}
      exit={{
        translateX: '-100%',
        transition: {
          duration: ANIMATION_DURATION,
          ease: 'easeOut',
        },
      }}
      transition={{
        duration: ANIMATION_DURATION,
        ease: 'easeOut',
      }}
    >
      <header className='flex items-start justify-between pt-4 pb-4.5 px-5 shadow-header'>
        <Logo />
        <button
          className='w-8 h-8 text-black hover:text-blue transition-colors'
          onClick={close}
        >
          <CloseIcon className='image-cover' />
        </button>
      </header>

      <main className='grow overflow-auto flex flex-col gap-15 px-3 pb-10'>
        <Button
          icon={<PlusIcon />}
          size={ButtonSize.MD}
          color={ButtonColor.BLUE}
          className='w-full'
        >
          Создать дизайн
        </Button>

        <ul className='flex flex-col items-start gap-10 px-12'>
          {menuItems.map((menuItem) => (
            <li key={menuItem.id}>
              <SidebarMenuLink link={menuItem} />
            </li>
          ))}
        </ul>
      </main>
    </motion.div>
  )
}
