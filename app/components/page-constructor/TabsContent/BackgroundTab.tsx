import {
  Input,
  SearchIcon,
  Tab,
  TabContent,
  Tabs,
  TabsList,
} from '@/components/common/ui-kit'
import { InputSize } from '@/types/ui'

import { backgroundContentTabs } from './tabs'
import { BackgroundsList } from './BackgroundsList'
import { BackgroundsSlider } from './BackgroundsSlider'

export function BackgroundTab() {
  const defaultTabValue = backgroundContentTabs[0].value

  return (
    <div className='flex flex-col gap-12'>
      <Input
        placeholder='Поиск фона'
        icon={<SearchIcon className='image-cover' />}
        sizeType={InputSize.SM}
      />

      <BackgroundsSlider />

      <Tabs
        defaultValue={defaultTabValue}
        className='content-tabs-container'
      >
        <TabsList className='gap-7 text-white'>
          {backgroundContentTabs.map((tab) => (
            <Tab
              key={tab.value}
              value={tab.value}
            >
              {tab.title}
            </Tab>
          ))}
        </TabsList>
        {backgroundContentTabs.map((tab) => (
          <TabContent
            key={tab.value}
            value={tab.value}
          >
            <BackgroundsList />
          </TabContent>
        ))}
      </Tabs>
    </div>
  )
}
