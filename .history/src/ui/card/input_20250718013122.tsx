import React from 'react'

export const CardProduct = () => {
  return (
    <div>
        {card.map((item) => {
            <div key={item}></div>
        })}
    </div>
  )
}
