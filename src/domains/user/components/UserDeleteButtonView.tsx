import * as React from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/foundation/components/buttons/Button'
import { Error } from '@/foundation/components/interface/Error'

export interface UserDeleteButtonViewProps {
  handleClick: () => void
  isError: boolean
  isPending: boolean
}

export const UserDeleteButtonView: React.FC<UserDeleteButtonViewProps> = ({ handleClick, isError, isPending }) => {
  const { t } = useTranslation(['user'])

  if (isError) return <Error />

  return (
    <Button handleClick={handleClick} isLoading={isPending}>
      {t('button')}
    </Button>
  )
}
