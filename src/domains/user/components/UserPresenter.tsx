import * as React from 'react'

import { useQueryUser } from '../hooks/useQueryUser'
import { USER_GUID } from '../user.settings'
import { UserView } from './UserView'

export const UserPresenter: React.FC = () => {
  const { data, isError, isLoading } = useQueryUser({ guid: USER_GUID })

  return <UserView isError={isError} isLoading={isLoading} user={data} />
}
