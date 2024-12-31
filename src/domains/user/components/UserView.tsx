import * as React from 'react'
import { useTranslation } from 'react-i18next'

import { Paragraph } from '@/foundation/components/typography/Paragraph'
import { User } from '@/types/types.user'

export interface UserViewProps {
  user: User | undefined
}

export const UserView: React.FC<UserViewProps> = ({ user }) => {
  const { t } = useTranslation(['user'])

  const { firstName, lastName } = user ?? {}

  return (
    <div data-testid='user-view'>
      <Paragraph>
        {t('name')}: {firstName} {lastName}
      </Paragraph>
    </div>
  )
}
