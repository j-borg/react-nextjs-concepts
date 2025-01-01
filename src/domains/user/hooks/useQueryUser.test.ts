/**
 * @jest-environment jsdom
 */
import { renderHook, waitFor } from '@testing-library/react'
import { QueryProvider } from '@/tests/tests.utils'

import { fixtureUser } from '@/fixtures/fixtures.user'
import { useQueryUser } from './useQueryUser'
import { userClientState } from '../state/user.client-state'

const TEST_DOMAIN = 'User'
const TEST_NAME = 'useQueryUser'

const setup = () => ({
  userClientStateSpy: jest.spyOn(userClientState, 'get')
})

describe(`${TEST_DOMAIN} - ${TEST_NAME}`, () => {
  it('should get a successful response', async () => {
    const { userClientStateSpy } = setup()

    userClientStateSpy.mockImplementation(() => {
      return () => Promise.resolve(fixtureUser)
    })

    const { result } = renderHook(() => useQueryUser(fixtureUser), { wrapper: QueryProvider })

    await waitFor(() => result.current.isSuccess)

    expect(result.current.data).toMatchObject(fixtureUser)
  })

  it('should get an error response', async () => {
    const { userClientStateSpy } = setup()

    userClientStateSpy.mockImplementation(() => {
      return () => Promise.reject(new Error('error'))
    })

    const { result } = renderHook(() => useQueryUser(fixtureUser), { wrapper: QueryProvider })

    await waitFor(() => result.current.isError)

    expect(result.current.data).toBeUndefined()
  })
})
