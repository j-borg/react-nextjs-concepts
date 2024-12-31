import { apiService } from '@/foundation/services/service.api'
import { getUserQueryKey } from '../user.utilities'
import { UserServerState } from './user.types'

export const userServerState: UserServerState = {
  create: async function ({ body }) {
    return apiService.post({ body, url: `${process.env.NEXT_PUBLIC_API_URL}/user` })
  },
  delete: async function ({ body }) {
    return apiService.delete({ url: `${process.env.NEXT_PUBLIC_API_URL}/user/${body.guid}` })
  },
  get: function ({ query }) {
    return async () => apiService.get({ url: `${process.env.NEXT_PUBLIC_API_URL}/user?guid=${query.guid}` })
  },
  prefetch: function ({ query, queryClient }) {
    return queryClient.fetchQuery({ queryFn: this.get({ query }), queryKey: [getUserQueryKey({ guid: query.guid })] })
  },
  update: async function ({ body }) {
    const { firstName, lastName } = body

    return apiService.patch({
      body: { firstName, lastName },
      url: `${process.env.NEXT_PUBLIC_API_URL}/user/${body.guid}`
    })
  }
}
