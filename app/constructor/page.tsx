'use client'

import dynamic from 'next/dynamic'

import { useStage } from '@/hooks'

const ConstructorSidebar = dynamic(
  () => import('../components/page-constructor/ConstructorSidebar'),
  {
    ssr: false,
  }
)

const Card = dynamic(
  () => import('./card'),
  {
    ssr: false,
  }
)

export default function Home() {
  const { stageRef } = useStage()

  return (
    <div className="grow grid grid-cols-[theme('width.constructorSidebar'),_1fr]">
      <ConstructorSidebar
        stageRef={stageRef}
        className='w-full max-w-full'
      />
      <Card stageRef={stageRef} />
    </div>
  )
}

