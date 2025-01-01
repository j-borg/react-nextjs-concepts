/**
 * @jest-environment node
 */
import { QueryClient } from '@tanstack/react-query'

import { apiService } from '@/foundation/services/service.api'
import { fixtureUser } from '@/fixtures/fixtures.user'
import { User } from '@/types/types.user'
import { userServerState } from './user.server-state'

const TEST_DOMAIN = 'User'
const TEST_NAME = 'userServerState'

const setup = () => ({
  apiServiceCreateSpy: jest.spyOn(apiService, 'post'),
  apiServiceDeleteSpy: jest.spyOn(apiService, 'delete'),
  apiServiceGetSpy: jest.spyOn(apiService, 'get'),
  apiServiceUpdateSpy: jest.spyOn(apiService, 'patch')
})

const defaultParams: Partial<User> = fixtureUser

describe(`${TEST_DOMAIN} - ${TEST_NAME}`, () => {
  it('should call the api service (POST) with the right params', async () => {
    const { apiServiceCreateSpy } = setup()

    apiServiceCreateSpy.mockImplementation(() => Promise.resolve())

    await userServerState.create({ body: defaultParams })

    expect(apiServiceCreateSpy).toHaveBeenCalledWith({ body: defaultParams, url: '/user' })
  })

  it('should call the api service (DELETE) with the right params', async () => {
    const { apiServiceDeleteSpy } = setup()

    apiServiceDeleteSpy.mockImplementation(() => Promise.resolve())

    await userServerState.delete({ body: defaultParams })

    expect(apiServiceDeleteSpy).toHaveBeenCalledWith({ url: '/user/ab2' })
  })

  it('should call the api service (GET) with the right params', async () => {
    const { apiServiceGetSpy } = setup()

    apiServiceGetSpy.mockImplementation(() => Promise.resolve())

    await userServerState.get({ query: defaultParams })()

    expect(apiServiceGetSpy).toHaveBeenCalledWith({ url: '/user?guid=ab2' })
  })

  it('should call the api service (PATCH) with the right params', async () => {
    const { apiServiceUpdateSpy } = setup()

    apiServiceUpdateSpy.mockImplementation(() => Promise.resolve())

    await userServerState.update({ body: defaultParams })

    expect(apiServiceUpdateSpy).toHaveBeenCalledWith({ body: { firstName: 'John', lastName: 'Do' }, url: '/user/ab2' })
  })

  it('should prefetch the user', () => {
    const fetchQuerySpy = jest.fn()

    userServerState.prefetch({
      query: defaultParams,
      queryClient: { fetchQuery: fetchQuerySpy } as unknown as QueryClient
    })

    expect(fetchQuerySpy).toHaveBeenCalled()
  })
})
