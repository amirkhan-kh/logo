import { card } from '@/db/card'
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import React from 'react'

const CardProduct:React.FC = () => {
  const t = useTranslations("Tab");
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-5'>
      {
        card.map((item) => (
          <div key={item.id} className='w-full bg-amber-500'>
            <div className="w-full h-[210px] relative">
            <Image height={210} src={item.img} alt={item.author}  className='object-cover'/>
            </div>
            <div className='p-[12px]'>
              <p className='text-[#FF9A50] text-[12px] leading-[150%] font-medium tracking-[0%] mb-1.5'>
                {item.title}
              </p>
              <p className='text-[#211F2E] font-normal leading-[140%] tracking-[150%] text-[16px]'>
                {t(item.description)}
              </p>
              <p>{item.author}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default CardProduct