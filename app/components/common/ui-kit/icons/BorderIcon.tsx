import { IconProps } from './types'

export function BorderIcon({ color, className }: IconProps) {
  return (
    <svg
      className={className}
      width='41'
      height='41'
      viewBox='0 0 41 41'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M36.9286 2.64282H4.07145C3.28128 2.64282 2.64288 3.28122 2.64288 4.07139V36.9285C2.64288 37.7187 3.28128 38.3571 4.07145 38.3571H36.9286C37.7188 38.3571 38.3572 37.7187 38.3572 36.9285V4.07139C38.3572 3.28122 37.7188 2.64282 36.9286 2.64282ZM35.1429 35.1428H5.85717V5.85711H35.1429V35.1428Z'
        fill={color ?? 'currentColor'}
      />
    </svg>
  )
}
