import CardProduct from '@/ui-elements/card'
import React from 'react'

export const ArchiveCard = ({ activeTab }: { activeTab: string }) => {
  return (
    <div>
      <CardProduct activeTab={activeTab}/>
    </div>
  )
}
