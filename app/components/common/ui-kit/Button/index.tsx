import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

import { ButtonColor, ButtonSize } from '@/types/ui'

import styles from './Button.module.scss'

const DEFAULT_COLOR = ButtonColor.BLUE
const DEFAULT_SIZE = ButtonSize.MD

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  size?: ButtonSize;
  icon?: ReactNode;
  outlined?: boolean;
  isVertical?: boolean;
}

export function Button({
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
  icon,
  outlined,
  className,
  children,
  isVertical,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        'transition-all',
        outlined ? [styles.outlined] : styles[color],
        styles[size],
        {
          [styles.vertical]: icon && !isVertical,
        },
      )}
    >
      {Boolean(icon) && icon}
      {children}
    </button>
  )
}
