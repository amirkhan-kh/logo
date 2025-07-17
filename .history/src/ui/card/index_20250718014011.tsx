import { card } from '@/db/card'
import Image from 'next/image'
import React from 'react'

const CardProduct:React.FC = () => {
  return (
    <div>
      {
        card.map((item) => (
          <div key={item.id}>
            <Image width={209} height={208} src={item.img} alt={item.author}/>
            <div>
              
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default CardProduct