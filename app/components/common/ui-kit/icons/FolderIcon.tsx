import { IconProps } from './types'

export function FolderIcon({ color, className }: IconProps) {
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
        d='M25.5 7.325H14.2813L10.6156 3.81875C10.569 3.77509 10.5076 3.75055 10.4438 3.75H2.5C1.94688 3.75 1.5 4.19687 1.5 4.75V23.25C1.5 23.8031 1.94688 24.25 2.5 24.25H25.5C26.0531 24.25 26.5 23.8031 26.5 23.25V8.325C26.5 7.77187 26.0531 7.325 25.5 7.325ZM24.25 22H3.75V6H9.64063L13.3781 9.575H24.25V22Z'
        fill={color ?? 'currentColor'}
      />
    </svg>
  )
}
