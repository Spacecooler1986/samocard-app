import { IconProps } from './types'

export function StarIcon({ color, className }: IconProps) {
  return (
    <svg
      className={className}
      width='76'
      height='71'
      viewBox='0 0 76 71'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M38 0L46.756 26.9483H75.0912L52.1676 43.6033L60.9236 70.5517L38 53.8967L15.0764 70.5517L23.8324 43.6033L0.908794 26.9483H29.244L38 0Z'
        fill={color ?? 'currentColor'}
      />
    </svg>
  )
}
