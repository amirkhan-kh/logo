import { card } from '@/db/card'
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import React from 'react'

const CardProduct:React.FC = () => {
  const t = useTranslations("Tab");
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-7'>
      {
        card.map((item) => (
          <div key={item.id} className='w-[209px]'>
            <Image width={209} height={208} src={item.img} alt={item.author}/>
            <div>
              <p>{item.title}</p>
              <p>{t(item.description)}</p>
              <p>{item.author}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default CardProduct