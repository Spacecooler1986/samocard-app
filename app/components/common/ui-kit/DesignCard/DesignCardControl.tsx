'use client'

import {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'

import styles from './DesignCard.module.scss'

interface ControlProps {
  id: string;
  icon: ReactNode;
  label?: string;
  isActive?: boolean;
  onClick: (id: string) => void;
}

const DEFAULT_CONTROL_WIDTH = 32
const DEFAULT_CONTROL_PADDING_X = 10

export function DesignCardControl({
  id,
  icon,
  label,
  isActive,
  onClick,
}: ControlProps) {
  const labelRef = useRef<HTMLSpanElement>(null)
  const [width, setWidth] = useState(DEFAULT_CONTROL_WIDTH)

  useEffect(() => {
    if (!isActive) {
      setWidth(DEFAULT_CONTROL_WIDTH)
      return
    }

    const labelWidth = Math.max(
      labelRef.current?.offsetWidth ?? 0,
      DEFAULT_CONTROL_WIDTH
    )

    setWidth(labelWidth + 2 * DEFAULT_CONTROL_PADDING_X)
  }, [isActive])

  const handleClick = useCallback(() => {
    onClick(id)
  }, [id, onClick])

  return (
    <button
      className={clsx(
        'flex flex-col gap-2.5 items-center text-sm leading-none text-blue rounded-10',
        'transition-transform card-control-transition duration-300',
        isActive
          ? styles.activeControlButton
          : styles.inactiveControlButton
      )}
      style={{
        width,
      }}
      type='button'
      aria-label={label}
      onClick={handleClick}
    >
      <span className='w-8 h-8'>
        {icon}
      </span>
      {Boolean(label) && (
        <AnimatePresence>
          {isActive && (
            <motion.span
              ref={labelRef}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.2,
                  delay: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.2,
                  delay: 0.3,
                },
              }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      )}
    </button>
  )
}
