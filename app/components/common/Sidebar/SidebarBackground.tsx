import { motion } from 'framer-motion'

import { ANIMATION_DURATION, BG_ANIMATION_DELAY } from './constants'

interface SidebarBackgroundProps {
  close: () => void;
}

export function SidebarBackground({ close }: SidebarBackgroundProps) {
  return (
    <motion.div
      className='absolute top-0 left-0 w-full h-full bg-blackout'
      onClick={close}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: ANIMATION_DURATION,
          ease: 'easeOut',
          delay: 0,
        },
      }}
      transition={{
        duration: ANIMATION_DURATION,
        ease: 'easeOut',
        delay: BG_ANIMATION_DELAY,
      }}
    />
  )
}
