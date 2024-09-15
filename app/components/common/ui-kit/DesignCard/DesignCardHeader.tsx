interface CardHeaderProps {
  title: string;
  description: string;
}

export function DesignCardHeader({
  title,
  description,
}: CardHeaderProps) {
  return (
    <div className='flex flex-col gap-2 w-full py-3 px-5 3xl:px-7 text-black-real'>
      <h2 className='text-2xl 3xl:text-3xl font-arial font-bold'>
        {title}
      </h2>
      <p className='text-base 3xl:text-lg font-arial font-bold leading-[1.3]'>
        {description}
      </p>
    </div>
  )
}
