import { useQuery } from '@tanstack/react-query'
import { userClientState } from '../state/user.client-state'
import { User } from '@/types/types.user'

export const useQueryUser = (user: Partial<User>) => {
  return useQuery({ queryFn: userClientState.get(user), queryKey: ['user'] })
}
