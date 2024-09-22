import Link from 'next/link'

export function Logo() {
  return (
    <Link
      href='/'
      className='text-2xl font-bold uppercase text-blue-dark'
    >
      Super
      <br />
      Cards
    </Link>
  )
}
