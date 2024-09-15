import { IconProps } from './types'

export function TextLeftIcon({ color, className }: IconProps) {
  return (
    <svg
      className={className}
      width='40'
      height='29'
      viewBox='0 0 40 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        width='40'
        height='3'
        fill={color ?? 'currentColor'}
      />
      <rect
        y='13'
        width='20'
        height='3'
        fill={color ?? 'currentColor'}
      />
      <rect
        y='26'
        width='25'
        height='3'
        fill={color ?? 'currentColor'}
      />
    </svg>
  )
}
