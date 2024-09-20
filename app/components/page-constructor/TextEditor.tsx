'use client'

import { FormEvent, useCallback, useState } from 'react'
import clsx from 'clsx'

import {
  BulletedListIcon,
  FormatBoldIcon,
  FormatItalicIcon,
  FormatLetterCaseIcon,
  FormatStrikeIcon,
  FormatUnderlineIcon,
  NumberedListIcon,
  TextCenterIcon,
  TextLeftIcon,
  TextRightIcon,
} from '@/components/common/ui-kit'

const DEFAULT_FONT_SIZE = 20

interface TextEditorProps {
  className?: string;
}

export function TextEditor({ className }: TextEditorProps) {
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE)

  const incrementFontSize = useCallback(() => {
    setFontSize((oldSize) => oldSize + 1)
  }, [])

  const decrementFontSize = useCallback(() => {
    setFontSize((oldSize) => (oldSize === 0 ? 0 : oldSize - 1))
  }, [])

  const changeFontSize = useCallback((event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement
    const value = Number(input.value)

    setFontSize((oldSize) => (!isNaN(value) ? value : oldSize))
  }, [])

  return (
    <div className={clsx('flex flex-col gap-20', className)}>
      <section className='flex flex-col gap-9'>
        <h3 className='relative self-start after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-pink'>
          Шрифт
        </h3>
        <div className='flex flex-col gap-8'>
          <div className='flex gap-2'>
            <select
              className='
                block w-full text-base text-black bg-white rounded-10 border-black-70 disabled:cursor-not-allowed disabled:bg-black-10
              '
              value='arial'
              name=''
              id=''
            >
              <option value='arial'>Arial</option>
              <option value='helvetica'>Helvetica</option>
              <option value='times new roman'>Times New Roman</option>
              <option value='verdana'>Verdana</option>
            </select>

            <div className='flex text-black font-arial'>
              <button
                className='
                  flex justify-center items-center w-[46px] h-[46px] text-xl bg-white
                  border border-black-70 rounded-l-10 disabled:text-black-30
                '
                type='button'
                onClick={decrementFontSize}
                disabled={fontSize === 0}
              >
                -
              </button>
              <input
                className='flex justify-center items-center w-[46px] h-[46px] py-3 px-[14px] text-base bg-white border-y border-y-black-70'
                type='text'
                value={fontSize}
                onInput={changeFontSize}
              />
              <button
                className='flex justify-center items-center w-[46px] h-[46px] text-xl bg-white border border-black-70 rounded-r-10'
                type='button'
                onClick={incrementFontSize}
              >
                +
              </button>
            </div>
          </div>
          <div className='flex flex-wrap'>
            <button
              className='
                flex items-center justify-center w-[46px] h-[46px] text-black border border-black-70 rounded-10 bg-white
                [&.active]:bg-white-30
              '
              type='button'
            >
              <span className='w-6 h-6 text-black-70'>
                <FormatBoldIcon className='image-cover' />
              </span>
            </button>
            <button
              className='
                flex items-center justify-center w-[46px] h-[46px] text-black border border-black-70 rounded-10 bg-white
              '
              type='button'
            >
              {' '}
              <span className='w-6 h-6 text-black-70'>
                <FormatItalicIcon className='image-cover' />
              </span>
            </button>
            <button
              className='
                flex items-center justify-center w-[46px] h-[46px] text-black border border-black-70 rounded-10 bg-white
              '
              type='button'
            >
              {' '}
              <span className='w-6 h-6 text-black-70'>
                <FormatUnderlineIcon className='image-cover' />
              </span>
            </button>
            <button
              className='
                flex items-center justify-center w-[46px] h-[46px] text-black border border-black-70 rounded-10 bg-white
              '
              type='button'
            >
              <span className='w-6 h-6 text-black-70'>
                <FormatStrikeIcon className='image-cover' />
              </span>
            </button>
            <button
              className='
                flex items-center justify-center w-[46px] h-[46px] text-black border border-black-70 rounded-10 bg-white
              '
              type='button'
            >
              <span className='w-6 h-6 text-black-70'>
                <FormatLetterCaseIcon className='image-cover' />
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className='flex flex-col gap-9'>
        <h3 className='relative self-start after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-pink'>
          Выравнивание
        </h3>
        <div className='flex flex-wrap gap-12'>
          <button
            className='w-10 h-7'
            type='button'
          >
            <TextLeftIcon className='image-cover' />
          </button>
          <button
            className='w-10 h-7'
            type='button'
          >
            <TextCenterIcon className='image-cover' />
          </button>
          <button
            className='w-10 h-7'
            type='button'
          >
            <TextRightIcon className='image-cover' />
          </button>
        </div>
      </section>
      <section className='flex flex-col gap-9'>
        <h3 className='relative self-start after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-pink'>
          Список
        </h3>
        <div className='flex flex-wrap gap-12 items-center'>
          <button
            className='w-[35px] h-[34px]'
            type='button'
          >
            <BulletedListIcon className='image-cover' />
          </button>
          <button
            className='w-9 h-10'
            type='button'
          >
            <NumberedListIcon />
          </button>
        </div>
      </section>
    </div>
  )
}
