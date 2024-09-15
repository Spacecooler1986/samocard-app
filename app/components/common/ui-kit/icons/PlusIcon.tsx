import { IconProps } from './types'

export function PlusIcon({ color, className }: IconProps) {
  return (
    <svg
      className={className}
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.0625 2.75H14.9375C15.1042 2.75 15.1875 2.83333 15.1875 3V25C15.1875 25.1667 15.1042 25.25 14.9375 25.25H13.0625C12.8958 25.25 12.8125 25.1667 12.8125 25V3C12.8125 2.83333 12.8958 2.75 13.0625 2.75Z'
        fill={color ?? 'currentColor'}
      />
      <path
        d='M3.5 12.8125H24.5C24.6667 12.8125 24.75 12.8958 24.75 13.0625V14.9375C24.75 15.1042 24.6667 15.1875 24.5 15.1875H3.5C3.33333 15.1875 3.25 15.1042 3.25 14.9375V13.0625C3.25 12.8958 3.33333 12.8125 3.5 12.8125Z'
        fill={color ?? 'currentColor'}
      />
    </svg>
  )
}
