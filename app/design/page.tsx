import {
  DesignCard,
  ArrowRoundedIcon,
  PictureIcon,
  DesignCardHeader,
  DesignCardAddFile,
} from '@/components/common/ui-kit'
import { DesignCardHeaderColor } from '@/types/ui'

interface DesignStep {
  title: string;
  description: string;
  headerColor: DesignCardHeaderColor;
  content: React.ReactNode;
  className: string;
}

const designSteps: DesignStep[] = [
  {
    title: 'Шаг 1 из 2',
    description: 'Загрузите фото товара',
    headerColor: DesignCardHeaderColor.PINK,
    content: <DesignCardAddFile className='w-[calc(100%_-_20px)] m-auto' />,
    className:
      'w-[70%] 3xl:w-[75%] pb-[calc(70%_*_1.25)] 3xl:pb-[calc(75%_*_1.25)] justify-self-end',
  },
  {
    title: 'Шаг 2 из 2',
    description: 'Выберите фон, отредактируйте фото, создайте продающий дизайн',
    headerColor: DesignCardHeaderColor.GRAY,
    content: (
      <div className='w-[220px] h-[220px] text-black-30'>
        <PictureIcon className='image-cover' />
      </div>
    ),
    className:
      'w-[70%] 3xl:w-[75%] pb-[calc(70%_*_1.25)] 3xl:pb-[calc(75%_*_1.25)] justify-self-start',
  },
]

export default function Design() {
  return (
    <div className='grow flex flex-col justify-center w-full wrapper-main wrapper-max'>
      <div className='relative grid grid-cols-2 gap-y-8 3xl:gap-y-12 gap-x-24 pt-8 pb-25 px-20'>
        <h1 className='col-[1_/_span_2] text-3xl 3xl:text-4xl font-medium text-blue text-center'>
          Создайте свой дизайн с нуля
        </h1>

        {designSteps.map((step, index) => (
          <DesignCard
            key={index}
            header={(
              <DesignCardHeader
                title={step.title}
                description={step.description}
              />
            )}
            headerColor={step.headerColor}
            content={step.content}
            className={step.className}
          />
        ))}

        <ArrowRoundedIcon
          color='#7D7D7C'
          className='absolute bottom-5 left-0 right-0 mx-auto'
        />
      </div>
    </div>
  )
}
