import Link from 'next/link'

import { MenuLinkConfig } from './menuItems'

interface MenuLinkProps {
  link: MenuLinkConfig;
}

export function SidebarMenuLink({ link }: MenuLinkProps) {
  const { title, icon, to } = link

  return (
    <Link
      className='flex gap-6 items-center text-black hover:text-blue transition-colors'
      href={to}
    >
      <span className='w-7 h-7'>
        {icon({
          className: 'image-cover',
        })}
      </span>
      {title}
    </Link>
  )
}
