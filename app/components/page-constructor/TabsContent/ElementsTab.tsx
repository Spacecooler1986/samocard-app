import { useCallback } from 'react'
import { nanoid } from '@reduxjs/toolkit'

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
import { useItem } from '@/hooks'
import { StageData } from '@/types'

import { elementsContentTabs } from './tabs'

function ElementsContent() {
  const { createItem } = useItem()
  const dataItemTypeKey = 'data-item-type'

  const addCircle = useCallback(() => {
    const newCircle = {
      id: nanoid(),
      attrs: {
        [dataItemTypeKey]: 'circle',
        x: 20,
        y: 20,
        stroke: 'black',
        radius: 20,
        fill: '#000',
        draggable: true,
      },
      className: '',
    }

    createItem(newCircle as unknown as StageData)
  }, [createItem])

  const addRect = useCallback(() => {
    const newRect = {
      id: nanoid(),
      attrs: {
        [dataItemTypeKey]: 'rect',
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        fill: '#f00',
        draggable: true,
      },
      className: '',
    }

    createItem(newRect as unknown as StageData)
  }, [createItem])

  return (
    <div className='flex flex-wrap gap-x-5 gap-y-7 justify-content-start justify-items-start py-2.5'>
      <button
        className='w-16 h-16 text-white cursor-pointer [&.active]:scale-135 transition-transform duration-300'
        type='button'
        onClick={addRect}
      >
        <ReactangleIcon className='image-cover' />
      </button>
      <button
        className='w-16 h-16 text-white cursor-pointer [&.active]:scale-135 transition-transform duration-300'
        type='button'
        onClick={addCircle}
      >
        <EllipseIcon className='image-cover' />
      </button>
      <div className='w-16 h-16 text-white cursor-pointer [&.active]:scale-135 transition-transform duration-300'>
        <TriangleIcon className='image-cover' />
      </div>
      <div className='grup w-16 h-16 text-white cursor-pointer [&.active]:scale-135 transition-transform duration-300 active'>
        <StarIcon className='image-cover group-[&.active]:shadow-xl' />
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
