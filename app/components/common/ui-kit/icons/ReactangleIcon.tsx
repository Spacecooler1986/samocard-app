import { IconProps } from './types'

export function ReactangleIcon({ color, className }: IconProps) {
  return (
    <svg
      className={className}
      width='63'
      height='62'
      viewBox='0 0 63 62'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.5 0H62.5V62H0.5V0Z'
        fill={color ?? 'currentColor'}
      />
    </svg>
  )
}
