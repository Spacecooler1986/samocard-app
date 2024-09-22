import { IconProps } from './types'

export function BulletedListIcon({ color, className }: IconProps) {
  return (
    <svg
      className={className}
      width='35'
      height='34'
      viewBox='0 0 35 34'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='3'
        cy='3'
        r='3'
        fill={color ?? 'currentColor'}
      />
      <rect
        x='10'
        y='1.5'
        width='25'
        height='3'
        fill={color ?? 'currentColor'}
      />
      <circle
        cx='3'
        cy='17'
        r='3'
        fill={color ?? 'currentColor'}
      />
      <rect
        x='10'
        y='15.5'
        width='25'
        height='3'
        fill={color ?? 'currentColor'}
      />
      <circle
        cx='3'
        cy='31'
        r='3'
        fill={color ?? 'currentColor'}
      />
      <rect
        x='10'
        y='29.5'
        width='25'
        height='3'
        fill={color ?? 'currentColor'}
      />
    </svg>
  )
}
