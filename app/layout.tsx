import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from '@/components/common/Header'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Самокард',
  description: 'Генератор карточек для маркетплейсов',
}

export default function RootLayout({ children }: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <div className='grow flex flex-col'>
          <Header
            isAuthorized
            isConstructor
          />

          <main className='grow flex flex-col'>
            {children}
          </main>
        </div>

        <div id='modals' />
        <div id='sidebar' />
      </body>
    </html>
  )
}
