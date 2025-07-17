import { card } from '@/db/card'
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import React from 'react'

const CardProduct:React.FC = () => {
  const t = useTranslations("Tab");
  return (
    <div>
      {
        card.map((item) => (
          <div key={item.id}>
            <Image width={209} height={208} src={item.img} alt={item.author}/>
            <div>
              <p>{t(item.title)}</p>
              <p>{t(item.description)}</p>
              <p>{t(item.author.slice(, 0))}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default CardProduct