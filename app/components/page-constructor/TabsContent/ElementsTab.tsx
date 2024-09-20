import {
  Tab,
  TabContent,
  TabsList,
  Tabs,
  EllipseIcon,
  ReactangleIcon,
  SearchIcon,
  StarIcon,
  TriangleIcon,
  Input,
} from '@/components/common/ui-kit'
import { InputSize } from '@/types/ui'

import { elementsContentTabs } from './tabs'

function ElementsContent() {
  return (
    <div className='flex flex-wrap gap-x-5 gap-y-7 justify-content-start justify-items-start py-2.5'>
      <div className='w-16 h-16 text-white cursor-pointer [&.active]:scale-135 transition-transform duration-300'>
        <ReactangleIcon className='image-cover' />
      </div>
      <div className='w-16 h-16 text-white cursor-pointer [&.active]:scale-135 transition-transform duration-300'>
        <EllipseIcon className='image-cover' />
      </div>
      <div className='w-16 h-16 text-white cursor-pointer [&.active]:scale-135 transition-transform duration-300'>
        <TriangleIcon className='image-cover' />
      </div>
      <div className='grup w-16 h-16 text-white cursor-pointer [&.active]:scale-135 transition-transform duration-300 active'>
        <StarIcon className='image-cover group-[&.active]:shadow-xl' />
      </div>
      <div className='w-16 h-16 text-white cursor-pointer [&.active]:scale-135 transition-transform duration-300'>
        <ReactangleIcon className='image-cover' />
      </div>
      <div className='w-16 h-16 text-white cursor-pointer [&.active]:scale-135 transition-transform duration-300'>
        <EllipseIcon className='image-cover' />
      </div>
      <div className='w-16 h-16 text-white cursor-pointer [&.active]:scale-135 transition-transform duration-300'>
        <TriangleIcon className='image-cover' />
      </div>
      <div className='grup w-16 h-16 text-white cursor-pointer [&.active]:scale-135 transition-transform duration-300'>
        <StarIcon className='image-cover' />
      </div>
    </div>
  )
}

export function ElementsTab() {
  const defaultTabValue = elementsContentTabs[0].value

  return (
    <div className='flex flex-col gap-12'>
      <Input
        placeholder='Поиск элемента'
        icon={<SearchIcon className='image-cover' />}
        sizeType={InputSize.SM}
      />

      <Tabs
        defaultValue={defaultTabValue}
        className='content-tabs-container'
      >
        <TabsList className='gap-7 text-white'>
          {elementsContentTabs.map((tab) => (
            <Tab
              key={tab.value}
              value={tab.value}
            >
              {tab.title}
            </Tab>
          ))}
        </TabsList>
        {elementsContentTabs.map((tab) => (
          <TabContent
            key={tab.value}
            value={tab.value}
          >
            <ElementsContent />
          </TabContent>
        ))}
      </Tabs>
    </div>
  )
}
