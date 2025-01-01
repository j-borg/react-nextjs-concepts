import * as React from 'react'

import { QueryMutationType } from '@/types/types.queries'
import { useMutationUser } from '../hooks/useMutationUser'
import { USER_GUID } from '../user.fixtures'
import { UserDeleteButtonView } from './UserDeleteButtonView'

export const UserDeleteButtonPresenter: React.FC = () => {
  const { isError, isPending, mutate } = useMutationUser({ guid: USER_GUID, type: QueryMutationType.DELETE })

  const handleClick = React.useCallback(() => {
    mutate({ guid: USER_GUID })
  }, [mutate])

  return <UserDeleteButtonView handleClick={handleClick} isError={isError} isPending={isPending} />
}
