import { motion } from 'framer-motion'

import { ANIMATION_DURATION } from './constants'

export function SidebarContainer({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className='fixed z-100 top-0 bottom-0 w-full h-full flex flex-col items-center justify-center overflow-hidden'
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      exit={{
        scale: 0,
        transition: {
          duration: 0,
          delay: ANIMATION_DURATION,
        },
      }}
      transition={{
        duration: 0,
      }}
    >
      {children}
    </motion.div>
  )
}
