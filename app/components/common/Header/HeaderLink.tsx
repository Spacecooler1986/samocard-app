import Link from 'next/link'

interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
}

export function HeaderLink({ href, children }: HeaderLinkProps) {
  return (
    <Link
      href={href}
      className='
        relative leading-none transition-colors hover:text-blue after:absolute after:bottom-0 after:left-0 after:right-0
        after:h-px after:bg-current after:opacity-0 after:transition-opacity hover:after:opacity-100
      '
    >
      {children}
    </Link>
  )
}
