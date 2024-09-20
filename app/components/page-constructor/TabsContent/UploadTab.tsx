import {
  Tabs,
  SearchIcon,
  Input,
  TabsList,
  Tab,
  TabContent,
  DownloadFile,
} from '@/components/common/ui-kit'
import { InputSize } from '@/types/ui'

import { uploadedContentTabs } from './tabs'
import { UploadedList } from './UploadedList'

const INITIAL_TAB_VALUE = uploadedContentTabs[0].value

export function UploadTab() {
  return (
    <div className='flex flex-col gap-12'>
      <form className='flex flex-col gap-5'>
        <Input
          placeholder='Поиск в загрузках'
          icon={<SearchIcon className='image-cover' />}
          sizeType={InputSize.SM}
        />
        <DownloadFile className='w-full' />
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
