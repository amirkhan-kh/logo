import CardProduct from '@/ui-elements/card'
import React from 'react'

export const SamarkandCard = ({ activeTab }: { activeTab: string })=> {
  return (
    <div className=''>
      <CardProduct activeTab={activeTab}/>
    </div>
  )
}
