'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { BackgroundFillIcon } from '@/components/common/ui-kit'

import 'swiper/css'

export function BackgroundsSlider() {
  return (
    <div className='flex gap-4 items-center w-full sidebar-content-width'>
      <div className='flex items-center justify-center w-14 h-14 text-white'>
        <div className='w-8 h-8'>
          <BackgroundFillIcon className='image-cover' />
        </div>
      </div>

      <div className='min-w-0'>
        <Swiper
          spaceBetween={16}
          slidesPerView={4}
          grabCursor
        >
          <SwiperSlide>
            <div className='w-14 h-14 rounded-10 bg-white' />
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-14 h-14 rounded-10 bg-black' />
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-14 h-14 rounded-10 bg-blue' />
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-14 h-14 rounded-10 bg-pink' />
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-14 h-14 rounded-10 bg-black-20' />
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-14 h-14 rounded-10 bg-blue-dark' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
