'use client'

import { ReactNode, useCallback, useContext } from 'react'
import clsx from 'clsx'

import { TabsContext } from './TabsContext'

interface TabWidthIconProps {
  value: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function TabWidthIcon({
  value,
  children,
  className,
  icon,
}: TabWidthIconProps) {
  const { activeValue, setActiveValue } = useContext(TabsContext)
  const isActive = value === activeValue

  const onTabClick = useCallback(() => {
    setActiveValue(value)
  }, [setActiveValue, value])

  return (
    <div className='flex justify-stretch'>
      <button
        className={clsx(
          'relative w-full flex flex-col gap-2 items-center px-4 py-3.5 text-xs font-bold text-white',
          'transition-colors duration-300',
          isActive && 'bg-blue-dark',
          className
        )}
        type='button'
        onClick={onTabClick}
      >
        <span
          className={clsx(
            'absolute z-10 top-0 right-0 w-[9px] h-[9px] -translate-y-full bg-blue-dark',
            'transition-opacity duration-300',
            isActive ? 'opacity-100' : 'opacity-0'
          )}
        >
          <span className='absolute top-0 left-0 w-full h-full bg-black-50 rounded-br-[75px]' />
        </span>
        <span
          className={clsx(
            'absolute z-10 bottom-0 right-0 w-[9px] h-[9px] translate-y-full bg-blue-dark',
            'transition-opacity duration-300',
            isActive ? 'opacity-100' : 'opacity-0'
          )}
        >
          <span className='absolute top-0 left-0 w-full h-full bg-black-50 rounded-tr-[75px]' />
        </span>
        {Boolean(icon) && (
          <div className='w-[40px] h-[40px]'>
            {icon}
          </div>
        )}
        {children}
      </button>
    </div>
  )
}
