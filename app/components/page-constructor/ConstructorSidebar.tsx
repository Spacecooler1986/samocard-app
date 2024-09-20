import clsx from 'clsx'

import {
  TabContent,
  Tabs,
  TabsList,
  TabWidthIcon,
} from '@/components/common/ui-kit'
import { TabsDirection } from '@/types/ui'

import { tabs } from './sidebarTabs'

interface ConstructorSidebarProps {
  className?: string;
}

const INITIAL_TAB_VALUE = tabs[5].value

export function ConstructorSidebar({ className }: ConstructorSidebarProps) {
  return (
    <div
      className={clsx(
        className,
        'grow flex items-stretch bg-blue-dark text-white'
      )}
    >
      <Tabs
        defaultValue={INITIAL_TAB_VALUE}
        className='sidebar-tabs-container'
      >
        <TabsList direction={TabsDirection.VERTICAL}>
          {tabs.map((tab) => (
            <TabWidthIcon
              key={tab.value}
              value={tab.value}
              icon={tab.icon({
                className: 'image-cover',
              })}
            >
              {tab.title}
            </TabWidthIcon>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabContent
            key={tab.value}
            value={tab.value}
            className='py-9 px-constructorSidebarContentX'
          >
            {Boolean(tab.content) && tab.content({})}
          </TabContent>
        ))}
      </Tabs>
    </div>
  )
}

