'use client'

import { ReactNode, useState } from 'react'

import { TabsContext } from './TabsContext'

interface TabsProps {
  className?: string;
  children: ReactNode;
  defaultValue: string;
}

export function Tabs({ className, children, defaultValue }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return (
    <TabsContext.Provider
      value={{
        activeValue: activeTab,
        setActiveValue: setActiveTab,
      }}
    >
      <div className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}
