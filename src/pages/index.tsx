import * as React from 'react'
import classnames from 'classnames'
import Head from 'next/head'
import { Open_Sans } from 'next/font/google'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

import { Heading } from '@/foundation/components/typography/Heading'
import { UserDeleteButtonPresenter } from '@/domains/user/components/UserDeleteButtonPresenter'
import { UserPresenter } from '@/domains/user/components/UserPresenter'
import { userServerState } from '@/domains/user/state/user.server-state'
import { USER_GUID } from '@/domains/user/user.settings'

const openSans = Open_Sans({
  weight: ['400', '600'],
  subsets: ['latin']
})

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()

  await userServerState.prefetch({ query: { guid: USER_GUID }, queryClient }).catch(() => {})

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

const Page = () => {
  const { t } = useTranslation(['common'])

  return (
    <div className={classnames('p-8', openSans.className)}>
      <Head>
        <title>{t('title')}</title>
      </Head>

      <main className='bg-white flex flex-col mx-auto px-8 py-6 rounded-xl space-y-6 w-full max-w-3xl'>
        <header>
          <Heading isBold>{t('title')}</Heading>

          <Heading level={2}>{t('subtitle')}</Heading>
        </header>

        <section className='border border-slate-200 flex items-center justify-between p-4 rounded-xl'>
          <UserPresenter />

          <UserDeleteButtonPresenter />
        </section>
      </main>
    </div>
  )
}

export default Page
