import { card } from '@/db/card'
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
              <p>{}</p>
              <p></p>
              <p></p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default CardProduct