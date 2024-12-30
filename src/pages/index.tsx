import React from 'react'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation('common')

  return (
    <div className='font-[family-name:var(--font-geist-sans)]'>
      <main className='flex h-lvh items-center justify-center w-lvw'>{t('title')}</main>
    </div>
  )
}

export default Home
