import {
  SearchIcon,
  Tabs,
  RangeSlider,
  Input,
  TabsList,
  Tab,
  TabContent,
} from '@/components/common/ui-kit'
import { InputSize } from '@/types/ui'
import { EffectsType } from '@/types/constructor'

import { effectsContentTabs } from './tabs'
import { BackgroundsSlider } from './BackgroundsSlider'

function OpacityForm() {
  return (
    <div className='flex flex-col gap-7'>
      <RangeSlider
        id='opacity-slider'
        label='Прозрачность'
        max={100}
        value={50}
      />
    </div>
  )
}

function OutlineForm() {
  return (
    <div className='flex flex-col gap-7'>
      <RangeSlider
        id='blur-slider-1'
        label='Размытие'
        max={100}
        value={20}
      />
      <RangeSlider
        id='width-slider'
        label='Толщина'
        max={100}
        value={50}
      />
    </div>
  )
}

function ShadowForm() {
  return (
    <div className='flex flex-col gap-7'>
      <RangeSlider
        id='blur-slider'
        label='Размытие'
        max={100}
        value={20}
      />
      <RangeSlider
        id='axis-x-slider'
        label='Ось X'
        max={100}
        value={40}
      />
      <RangeSlider
        id='axis-y-slider'
        label='Ось Y'
        max={100}
        value={80}
      />
    </div>
  )
}

interface EffectsContent {
  type: EffectsType;
}

function EffectsContent({ type }: EffectsContent) {
  return (
    <div className='flex flex-col gap-12'>
      {type !== EffectsType.OPACITY && <BackgroundsSlider />}
      {type === EffectsType.OPACITY && <OpacityForm />}
      {type === EffectsType.OUTLINE && <OutlineForm />}
      {type === EffectsType.SHADOW && <ShadowForm />}
    </div>
  )
}

export function EffectsTab() {
  const defaultTabValue = effectsContentTabs[0].value

  return (
    <div className='flex flex-col gap-12'>
      <Input
        placeholder='Поиск эффекта'
        icon={<SearchIcon className='image-cover' />}
        sizeType={InputSize.SM}
      />

      <Tabs
        defaultValue={defaultTabValue}
        className='content-tabs-container'
      >
        <TabsList className='gap-7 text-white'>
          {effectsContentTabs.map((tab) => (
            <Tab
              key={tab.value}
              value={tab.value}
            >
              {tab.title}
            </Tab>
          ))}
        </TabsList>
        {effectsContentTabs.map((tab) => (
          <TabContent
            key={tab.value}
            value={tab.value}
          >
            {tab.value in EffectsType
              ? <EffectsContent type={tab.value as EffectsType} />
              : null}
          </TabContent>
        ))}
      </Tabs>
    </div>
  )
}
