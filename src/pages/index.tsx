import React from 'react'
import { useTranslation } from 'react-i18next'

import { Heading } from '@/foundation/components/typography/Heading'
import { UserPresenter } from '@/domains/user/components/UserPresenter'

const Home = () => {
  const { t } = useTranslation(['common'])

  return (
    <div className='font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col h-lvh items-center justify-center space-y-1 w-lvw'>
        <Heading>{t('title')}</Heading>

        <UserPresenter />
      </main>
    </div>
  )
}

export default Home
