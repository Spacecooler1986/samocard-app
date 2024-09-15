import Image from 'next/image'
import clsx from 'clsx'

import { IImage } from '@/types/common'

interface PromoCardProps {
  image: IImage;
  className: string;
}

export function PromoCard({
  image,
  className,
}: PromoCardProps) {
  return (
    <div
      className={clsx(
        'absolute overflow-hidden w-[32.8%] 3xl:w-[calc(theme("screens.3xl")*0.328] pb-[44%]',
        '3xl:pb-[calc(theme("screens.3xl")*0.44] rounded-40',
        className
      )}
    >
      <Image
        className='absolute z-10 top-0 left-0 image-cover'
        src={image.url}
        alt={image.alt ?? ''}
        fill
      />
    </div>
  )
}
