'use client'

import { ReactNode, useContext } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import { TabsContext } from './TabsContext'

interface TabContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function TabContent({
  value,
  children,
  className,
}: TabContentProps) {
  const { activeValue } = useContext(TabsContext)
  const isActive = value === activeValue

  return (
    <motion.div
      className={clsx(className, isActive ? 'block' : 'hidden')}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: isActive ? 1 : 0,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: 'easeIn',
        },
      }}
      transition={{
        duration: 0.3,
        ease: 'easeIn',
      }}
    >
      {children}
    </motion.div>
  )
}
