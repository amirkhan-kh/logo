import { card } from '@/db/card'
import Image from 'next/image'
import React from 'react'

const CardProduct:React.FC = () => {
  return (
    <div>
      {
        card.map((i))
      }
    </div>
  )
}
export default CardProduct