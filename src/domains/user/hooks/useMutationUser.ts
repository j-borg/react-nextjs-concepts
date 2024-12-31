import * as React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { getUserQueryKey } from '../user.utilities'
import { QueryMutationType } from '@/types/types.queries'
import { userClientState } from '../state/user.client-state'

export const useMutationUser = ({ guid, type }: { guid: string; type: QueryMutationType }) => {
  const queryClient = useQueryClient()

  const userMutationRequest = React.useCallback(() => {
    return {
      [QueryMutationType.DELETE]: userClientState.delete,
      [QueryMutationType.PATCH]: userClientState.update,
      [QueryMutationType.POST]: userClientState.create
    }[type]
  }, [type])

  return useMutation({
    mutationFn: userMutationRequest(),
    onError: () => {},
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [getUserQueryKey({ guid })] })
  })
}
