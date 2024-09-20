'use client'

import { InputHTMLAttributes } from 'react'
// @ts-expect-error no types for library
import ReactRangeSlider from 'react-range-slider-input'

import 'react-range-slider-input/dist/style.css'

interface RangeSliderProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function RangeSlider({
  label,
  id,
  max,
  value,
  ...props
}: RangeSliderProps) {
  return (
    <div className='flex flex-col gap-4'>
      {Boolean(label) && (
        <label htmlFor={id}>
          {label}
        </label>
      )}

      <ReactRangeSlider
        className='range-slider-custom'
        id={id}
        thumbsDisabled={[true, false]}
        rangeSlideDisabled
        defaultValue={[0, max]}
        value={[0, value]}
        {...props}
      />
    </div>
  )
}
