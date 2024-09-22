import { IconProps } from './types'

export function EllipseIcon({ color, className }: IconProps) {
  return (
    <svg
      className={className}
      width='67'
      height='66'
      viewBox='0 0 67 66'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='33.5'
        cy='33'
        r='33'
        fill={color ?? 'currentColor'}
      />
    </svg>
  )
}
