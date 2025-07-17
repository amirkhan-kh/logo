import { card } from '@/db/card'
import React from 'react'

export const CardProduct = () => {
  return (
    <div>
        {card.map((item) => {
            <div key={item.id}>
                <Image></Image>
            </div>
        })}
    </div>
  )
}
