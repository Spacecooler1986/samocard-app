import clsx from 'clsx'

import { InputColor, InputSize } from '@/types/ui'

import { EyeSlashIcon } from '../icons'

import styles from './Input.module.scss'

const DEFAULT_COLOR = InputColor.WHITE
const DEFAULT_SIZE = InputSize.BASE

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: InputColor;
  outlined?: boolean;
  sizeType?: InputSize;
  icon?: React.ReactNode;
  label?: string;
  containerClassName?: string;
}

export function Input({
  id,
  type,
  label,
  outlined,
  icon,
  color = DEFAULT_COLOR,
  sizeType = DEFAULT_SIZE,
  className,
  containerClassName,
  ...props
}: InputProps) {
  const withIcon = Boolean(icon)

  return (
    <div
      className={clsx(
        'flex flex-col',
        styles[color],
        styles[sizeType],
        {
          [styles.outlined]: outlined,
        },
        {
          [styles.withIcon]: withIcon,
        },
      )}
    >
      {Boolean(label) && (
        <label htmlFor={id}>
          {label}
        </label>
      )}
      <div className={clsx(containerClassName, 'relative')}>
        <input
          className={clsx(
            'block w-full py-4 text-base rounded-10',
            className
          )}
          type={type ?? 'text'}
          id={id}
          {...props}
        />
        {withIcon && (
          <span
            className={clsx(
              'absolute top-0 bottom-0 my-auto w-8 h-8',
              styles.icon,
            )}
          >
            {icon}
          </span>
        )}
        {type === 'password' && (
          <button
            className={clsx(
              'absolute top-0 bottom-0 w-6 h-6 my-auto',
              styles.passwordButton,
            )}
            type='button'
          >
            <EyeSlashIcon className='image-cover' />
          </button>
        )}
      </div>
    </div>
  )
}
