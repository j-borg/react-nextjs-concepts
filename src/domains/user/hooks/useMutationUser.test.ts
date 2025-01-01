/**
 * @jest-environment jsdom
 */
import { QueryProvider } from '@/tests/tests.utils'
import { renderHook, waitFor } from '@testing-library/react'

import { fixtureUser } from '@/fixtures/fixtures.user'
import { QueryMutationType } from '@/types/types.queries'
import { userClientState } from '../state/user.client-state'
import { useMutationUser, UseMutationUserParams } from './useMutationUser'

const TEST_DOMAIN = 'User'
const TEST_NAME = 'useMutationUserProfile'

const defaultParams: UseMutationUserParams = {
  guid: 'abc1',
  type: QueryMutationType.DELETE
}

const setup = () => ({
  userClientStateDeleteSpy: jest.spyOn(userClientState, 'delete'),
  userClientStatePatchSpy: jest.spyOn(userClientState, 'update'),
  userClientStatePostSpy: jest.spyOn(userClientState, 'create')
})

describe(`${TEST_DOMAIN} - ${TEST_NAME}`, () => {
  it('should get a successful response for a DELETE', async () => {
    const { userClientStateDeleteSpy } = setup()

    userClientStateDeleteSpy.mockImplementation(() => Promise.resolve(fixtureUser))

    const { result } = renderHook(() => useMutationUser(defaultParams), { wrapper: QueryProvider })

    result.current.mutate(defaultParams)

    await waitFor(() => result.current.isSuccess)

    expect(result.current.data).toMatchObject(fixtureUser)
  })

  it('should get an error response for a DELETE', async () => {
    const { userClientStateDeleteSpy } = setup()

    userClientStateDeleteSpy.mockImplementation(() => Promise.reject(new Error('error')))

    const { result } = renderHook(() => useMutationUser(defaultParams), { wrapper: QueryProvider })

    result.current.mutate(defaultParams)

    await waitFor(() => result.current.isError)

    expect(result.current.data).toBeUndefined()
  })

  it('should get a successful response for a PATCH', async () => {
    const { userClientStatePatchSpy } = setup()

    userClientStatePatchSpy.mockImplementation(() => Promise.resolve(fixtureUser))

    const { result } = renderHook(() => useMutationUser({ ...defaultParams, type: QueryMutationType.PATCH }), {
      wrapper: QueryProvider
    })

    result.current.mutate(defaultParams)

    await waitFor(() => result.current.isSuccess)

    expect(result.current.data).toMatchObject(fixtureUser)
  })

  it('should get an error response for a PATCH', async () => {
    const { userClientStatePatchSpy } = setup()

    userClientStatePatchSpy.mockImplementation(() => Promise.reject(new Error('error')))

    const { result } = renderHook(() => useMutationUser({ ...defaultParams, type: QueryMutationType.PATCH }), {
      wrapper: QueryProvider
    })

    result.current.mutate(defaultParams)

    await waitFor(() => result.current.isError)

    expect(result.current.data).toBeUndefined()
  })

  it('should get a successful response for a POST', async () => {
    const { userClientStatePostSpy } = setup()

    userClientStatePostSpy.mockImplementation(() => Promise.resolve(fixtureUser))

    const { result } = renderHook(() => useMutationUser({ ...defaultParams, type: QueryMutationType.POST }), {
      wrapper: QueryProvider
    })

    result.current.mutate(defaultParams)

    await waitFor(() => result.current.isSuccess)

    expect(result.current.data).toMatchObject(fixtureUser)
  })

  it('should get an error response for a POST', async () => {
    const { userClientStatePostSpy } = setup()

    userClientStatePostSpy.mockImplementation(() => Promise.reject(new Error('error')))

    const { result } = renderHook(() => useMutationUser({ ...defaultParams, type: QueryMutationType.POST }), {
      wrapper: QueryProvider
    })

    result.current.mutate(defaultParams)

    await waitFor(() => result.current.isError)

    expect(result.current.data).toBeUndefined()
  })
})
