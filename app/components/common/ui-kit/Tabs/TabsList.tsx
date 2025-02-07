import clsx from 'clsx'

import { TabsDirection } from '@/types/ui'

interface TabsListProps {
  children: React.ReactNode;
  direction?: TabsDirection;
  className?: string;
}

export function TabsList({
  direction = TabsDirection.HORIZONTAL,
  children,
  className,
}: TabsListProps) {
  return (
    <div
      className={clsx(
        direction === TabsDirection.VERTICAL && 'bg-black-50',
        direction === TabsDirection.HORIZONTAL && 'tabs-list-container no-scrollbar'
      )}
    >
      <div
        className={clsx(
          'flex',
          direction === TabsDirection.VERTICAL && 'flex-col',
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
