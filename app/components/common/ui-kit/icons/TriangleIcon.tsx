import { IconProps } from './types'

export function TriangleIcon({ color, className }: IconProps) {
  return (
    <svg
      className={className}
      width='67'
      height='66'
      viewBox='0 0 67 66'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M34 5L66.476 61.25H1.52405L34 5Z'
        fill={color ?? 'currentColor'}
      />
    </svg>
  )
}
