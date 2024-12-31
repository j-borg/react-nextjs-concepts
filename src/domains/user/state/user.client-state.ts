import { apiService } from '@/foundation/services/service.api'
import { UserClientState } from './user.types'

export const userClientState: UserClientState = {
  create: function (body) {
    return apiService.post({ body, url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/user` })
  },
  delete: function (body) {
    return apiService.delete({ body, url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/user` })
  },
  get: function ({ guid }) {
    return () => apiService.get({ url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/user?guid=${guid}` })
  },
  update: (body) => {
    return apiService.patch({ body, url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/user` })
  }
}
