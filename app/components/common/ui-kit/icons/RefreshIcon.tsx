import { IconProps } from './types'

export function RefreshIcon({ color, className }: IconProps) {
  return (
    <svg
      className={className}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.66663 12.3628L7.51468 7.51472C9.68625 5.34315 12.6863 4 16 4C21.7109 4 26.49 7.98936 27.7026 13.3333M2.66663 12.3628V5.33333M2.66663 12.3628H9.33329M4.29731 18.6667C5.50993 24.0106 10.2891 28 16 28C19.3137 28 22.3137 26.6569 24.4852 24.4853L29.3333 19.6372M29.3333 19.6372V26.6667M29.3333 19.6372H22.6666'
        stroke={color ?? 'currentColor'}
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
