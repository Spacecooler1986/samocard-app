import { IconProps } from './types'

export function FormatUnderlineIcon({
  color,
  className,
}: IconProps) {
  return (
    <svg
      className={className}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20 20H4C2.9 20 2 20.9 2 22C2 23.1 2.9 24 4 24H20C21.1 24 22 23.1 22 22C22 20.9 21.1 20 20 20Z'
        fill={color ?? 'currentColor'}
      />
      <path
        d='M7.10999 17C7.58999 17 8.01999 16.7 8.16999 16.25L9.17999 13.42H14.83L15.82 16.24C15.98 16.7 16.41 17 16.89 17C17.68 17 18.22 16.21 17.94 15.48L13.69 4.17C13.43 3.47 12.75 3 12 3C11.25 3 10.57 3.47 10.31 4.17L6.05999 15.48C5.77999 16.21 6.32999 17 7.10999 17ZM11.94 5.6H12.06L14.09 11.39H9.90999L11.94 5.6Z'
        fill={color ?? 'currentColor'}
      />
    </svg>
  )
}
