import { useQuery } from '@tanstack/react-query'

import { getUserQueryKey } from '../user.utilities'
import { User } from '@/types/types.user'
import { userClientState } from '../state/user.client-state'

export const useQueryUser = (user: Partial<User>) => {
  return useQuery({ queryFn: userClientState.get(user), queryKey: [getUserQueryKey({ guid: user.guid })] })
}
