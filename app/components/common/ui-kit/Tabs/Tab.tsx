'use client'

import { ReactNode, useCallback, useContext } from 'react'
import clsx from 'clsx'

import { TabsContext } from './TabsContext'

interface TabProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function Tab({ value, children, className }: TabProps) {
  const { activeValue, setActiveValue } = useContext(TabsContext)
  const isActive = value === activeValue

  const onTabClick = useCallback(() => {
    setActiveValue(value)
  }, [setActiveValue, value])

  return (
    <button
      type='button'
      className={clsx(
        'relative cursor-pointer after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5',
        'after:bg-pink after:scale-x-0 after:transition-transform after:duration-300',
        isActive && 'after:scale-x-100',
        className
      )}
      onClick={onTabClick}
    >
      {children}
    </button>
  )
}
