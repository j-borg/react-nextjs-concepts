import * as React from 'react'
import { useTranslation } from 'react-i18next'

import { Error } from '@/foundation/components/interface/Error'
import { Loader } from '@/foundation/components/interface/Loader'
import { Paragraph } from '@/foundation/components/typography/Paragraph'
import { User } from '@/types/types.user'

export interface UserViewProps {
  isError: boolean
  isLoading: boolean
  user: User | undefined
}

export const UserView: React.FC<UserViewProps> = ({ isError, isLoading, user }) => {
  const { t } = useTranslation(['user'])

  const { firstName, lastName } = user ?? {}

  if (isLoading) return <Loader />

  if (isError) return <Error />

  return (
    <div data-testid='user-view'>
      <Paragraph>
        {t('name')}: {firstName} {lastName}
      </Paragraph>
    </div>
  )
}
