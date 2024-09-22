'use client'

import { ReactNode, useContext, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'

import { useModalsContainer } from '@/hooks'
import { HumanIcon } from '@/components/common/ui-kit/icons'
import { ModalContext } from '@/providers/modalProvider'

function ModalContainer({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className='fixed z-100 top-0 bottom-0 w-full h-full flex flex-col items-center justify-center'
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: 'easeOut',
        },
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}

function ModalBackground() {
  const { close } = useContext(ModalContext)

  const handleWindowClose = useCallback(() => {
    close()
  }, [close])

  return (
    <div
      className='absolute top-0 left-0 w-full h-full bg-blackout'
      onClick={handleWindowClose}
    />
  )
}

interface AuthModalProps {
  children: ReactNode;
}

export function AuthModal({ children }: AuthModalProps) {
  const { modalsContainer } = useModalsContainer()
  const { isOpen } = useContext(ModalContext)

  const modal = (
    <AnimatePresence>
      {isOpen ? (
        <ModalContainer>
          <ModalBackground />
          <div
            className='
              relative flex flex-col gap-5 items-center min-w-[532px] min-h-[600px] pt-6 pb-8 px-19 bg-white
            '
          >
            <div className='w-[150px] h-[150px] mx-auto -mb-2'>
              <HumanIcon className='image-cover' />
            </div>
            {children}
          </div>
        </ModalContainer>
      ) : null}
    </AnimatePresence>
  )

  return Boolean(modalsContainer) && createPortal(modal, modalsContainer)
}
