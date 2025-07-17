import { card } from '@/db/card'
import React from 'react'

const CardProduct:React.FC = () => {
  return (
    <div>
      {
        card.map((item) => (
          <div key={item.id}>
            <Image/>
          </div>
        ))
      }
    </div>
  )
}
export default CardProduct