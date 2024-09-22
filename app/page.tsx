import { Button } from '@/components/common/ui-kit/Button'
import { PromoCard } from '@/components/page-index'
import { ButtonColor, ButtonSize } from '@/types/ui'

const promoCards = [
  {
    image: {
      alt: '',
      url: '/images/promo-card-1.jpg',
    },
    className: '-top-[135px] -right-[185px] opacity-80 rotate-[4.5deg]',
  },
  {
    image: {
      alt: '',
      url: '/images/promo-card-2.jpg',
    },
    className: '-bottom-[35px] right-[20px] rotate-[17.1deg]',
  },
]

export default function Home() {
  return (
    <div className='grow flex flex-col w-full overflow-hidden'>
      <div className='relative grow w-full py-28 pb-20 wrapper-main wrapper-max'>
        <div className='relative z-20 flex flex-col gap-9 max-w-[747px]'>
          <h1 className='text-4xl font-medium text-blue'>
            Продающие карточки
            <br />
            для маркетплейсов
          </h1>

          <p className='text-lg'>
            Проверяйте продуктовые гипотезы, создавайте карточки для
            маркетплейсов,
            <br />
            заходите в акции с классной инфографикой быстро, экономно и со
            вкусом!
          </p>
        </div>

        <Button
          className='relative z-20 mt-40 font-semibold'
          size={ButtonSize.XL}
          color={ButtonColor.BLUE}
        >
          Попробовать бесплатно
        </Button>

        {promoCards.map((card, index) => (
          <PromoCard
            key={index}
            image={card.image}
            className={card.className}
          />
        ))}
      </div>
    </div>
  )
}
