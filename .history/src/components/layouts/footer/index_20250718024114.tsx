import TopButton from '@/ui/button'
import { useTranslations } from 'next-intl'
import React from 'react'

export const Footer = () => {
  const t = useTranslations("Footer")
  return (
    <footer className='bg-[#120E0F] w-full'>
      <div className="container mx-auto">
        <div className="flex ">
          <div></div>
          <ul></ul>
          <ul></ul>
          <TopButton className='text-[#FF9A50] '>
            {t("footerBtn")}
          </TopButton>
        </div>


        <div className='border-[#F3742D] border-t'>
        <p>© 2025 — Copyright</p>
        </div>
      </div>
    </footer>
  )
}
