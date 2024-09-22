'use client'

import clsx from 'clsx'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

import { DesignCardHeaderColor } from '@/types/ui'

import styles from './DesignCard.module.scss'

import 'overlayscrollbars/overlayscrollbars.css'

interface DesignCardProps {
  headerColor: DesignCardHeaderColor;
  header: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

export function DesignCard({
  headerColor,
  header,
  content,
  className,
}: DesignCardProps) {
  return (
    <article
      className={clsx(
        'relative overflow-hidden rounded-20 border border-black-50',
        className
      )}
    >
      <div className='absolute top-0 left-0 flex flex-col w-full h-full'>
        <OverlayScrollbarsComponent
          className={clsx(
            'relative min-h-[116px]',
            styles[headerColor]
          )}
          element='header'
          options={{
            paddingAbsolute: false,
            overflow: {
              x: 'scroll',
              y: 'hidden',
            },
            scrollbars: {
              theme: 'os-theme-light',
            },
          }}
          defer
        >
          {header}
        </OverlayScrollbarsComponent>
        <div className='grow flex flex-col justify-center items-center overflow-y-auto'>
          {content}
        </div>
      </div>
    </article>
  )
}
