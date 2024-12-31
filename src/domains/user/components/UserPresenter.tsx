import * as React from 'react'

import { useQueryUser } from '../hooks/useQueryUser'
import { UserView } from './UserView'

export const UserPresenter: React.FC = () => {
  const { data } = useQueryUser({ guid: 'abc' })

  return <UserView user={data} />
}
