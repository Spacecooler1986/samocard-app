import { IconProps } from './types'

export function TextRightIcon({ color, className }: IconProps) {
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
        x='20'
        y='13'
        width='20'
        height='3'
        fill={color ?? 'currentColor'}
      />
      <rect
        x='15'
        y='26'
        width='25'
        height='3'
        fill={color ?? 'currentColor'}
      />
    </svg>
  )
}
