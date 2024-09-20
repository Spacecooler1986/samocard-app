import { ConstructorCard, ConstructorSidebar } from '@/components/page-constructor'

export default function Home() {
  return (
    <div className="grow grid grid-cols-[theme('width.constructorSidebar'),_1fr]">
      <ConstructorSidebar className='w-full max-w-full' />

      <div className='grow flex flex-col justify-center items-center py-10'>
        <ConstructorCard />
      </div>
    </div>
  )
}

