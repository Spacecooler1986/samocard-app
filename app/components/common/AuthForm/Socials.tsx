import {
  GoogleIcon,
  OdnoklassnikiIcon,
  VkIcon,
} from '@/components/common/ui-kit/icons'

export default function Socials() {
  return (
    <ul className='flex flex-wrap justify-center gap-7'>
      <li>
        <a
          className='block py-3 px-7 bg-white-real border border-gray-antiflash rounded-10'
          href='#'
        >
          <div className='w-8 h-8'>
            <VkIcon className='image-cover' />
          </div>
        </a>
      </li>
      <li>
        <a
          className='block py-3 px-7 bg-white-real border border-gray-antiflash rounded-10'
          href='#'
        >
          <div className='w-8 h-8'>
            <GoogleIcon className='image-cover' />
          </div>
        </a>
      </li>
      <li>
        <a
          className='block py-3 px-7 bg-white-real border border-gray-antiflash rounded-10'
          href='#'
        >
          <div className='w-8 h-8'>
            <OdnoklassnikiIcon className='image-cover' />
          </div>
        </a>
      </li>
    </ul>
  )
}
