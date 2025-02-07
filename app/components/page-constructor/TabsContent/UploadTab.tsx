import { useCallback } from 'react'
import { nanoid } from '@reduxjs/toolkit'

import {
  Tabs,
  SearchIcon,
  Input,
  TabsList,
  Tab,
  TabContent,
  DownloadFile,
} from '@/components/common/ui-kit'
import { useItem } from '@/hooks'
import { StageData, InputSize } from '@/types'

import { uploadedContentTabs } from './tabs'
import { UploadedList } from './UploadedList'

const INITIAL_TAB_VALUE = uploadedContentTabs[0].value

export function UploadTab() {
  const { createItem } = useItem()

  const addImage = useCallback(() => {
    const fileReader = new FileReader()

    fileReader.onload = () => {
      const dataItemTypeKey = 'data-item-type'
      const filtersKey = '_filters'

      const newImage = {
        id: nanoid(),
        attrs: {
          [dataItemTypeKey]: 'image',
          x: 0,
          y: 0,
          draggable: true,
          src: fileReader.result as string,
          zIndex: 0,
          brightness: 0,
          [filtersKey]: ['Brighten'],
          updatedAt: Date.now(),
        },
        className: '',
      }

      createItem(newImage as unknown as StageData)
    }

    const file = document.createElement('input')

    file.type = 'file'
    file.accept = 'image/png, image/jpeg'

    file.onchange = (e) => {
      const event = e

      if (event.target && (event.target as HTMLInputElement).files) {
        Object.values((event.target as HTMLInputElement).files).forEach((file) => {
          fileReader.readAsDataURL(file)
        })
      }
    }

    file.click()
  }, [createItem])

  return (
    <div className='flex flex-col gap-12'>
      <form className='flex flex-col gap-5'>
        <Input
          placeholder='Поиск в загрузках'
          icon={<SearchIcon className='image-cover' />}
          sizeType={InputSize.SM}
        />
        <DownloadFile
          className='w-full'
          onDownload={addImage}
        />
      </form>

      <Tabs
        defaultValue={INITIAL_TAB_VALUE}
        className='content-tabs-container'
      >
        <TabsList className='gap-7 text-white'>
          {uploadedContentTabs.map((tab) => (
            <Tab
              key={tab.value}
              value={tab.value}
            >
              {tab.title}
            </Tab>
          ))}
        </TabsList>
        {uploadedContentTabs.map((tab) => (
          <TabContent
            key={tab.value}
            value={tab.value}
          >
            <UploadedList />
          </TabContent>
        ))}
      </Tabs>
    </div>
  )
}
