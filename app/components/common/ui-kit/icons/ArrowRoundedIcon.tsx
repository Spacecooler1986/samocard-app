import { IconProps } from './types'

export function ArrowRoundedIcon({ color, className }: IconProps) {
  return (
    <svg
      className={className}
      width='115'
      height='75'
      viewBox='0 0 115 75'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M102.313 23.48C99.1136 35.3275 91.9288 45.723 81.983 52.895C72.0373 60.0671 59.9461 63.5721 47.7695 62.8127C35.593 62.0534 24.0845 57.0767 15.205 48.7306C10.8786 44.6641 7.3068 39.9204 4.60186 34.72'
        stroke={color ?? 'currentColor'}
        strokeWidth='7'
        strokeLinejoin='round'
      />
      <path
        d='M110.851 48.5641L104.112 23.0066L78.6095 29.9491'
        stroke={color ?? 'currentColor'}
        strokeWidth='7'
        strokeLinejoin='round'
      />
    </svg>
  )
}
