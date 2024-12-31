import { QueryClient } from '@tanstack/react-query'

import { User } from '@/types/types.user'

export interface UserClientState {
  create(params: Partial<User>): Promise<User>
  get(query: Partial<User>): () => Promise<User>
  delete(params: Partial<User>): Promise<User>
  update(params: Partial<User>): Promise<User>
}

export interface UserServerState {
  create(params: { body: Partial<User> }): Promise<User>
  delete(params: { body: Partial<User> }): Promise<User>
  get(params: { query: Partial<User> }): () => Promise<User>
  prefetch(params: { query: Partial<User>; queryClient: QueryClient }): Promise<User>
  update(params: { body: Partial<User> }): Promise<User>
}
