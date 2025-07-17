import { card } from '@/db/card'
import Image from 'next/image'
import React from 'react'

const CardProduct:FC = () => {
  return (
    <div>
        {card.map((item) => {
            <div key={item.id}>
                <Image/>
            </div>
        })}
    </div>
  )
}
export default Card