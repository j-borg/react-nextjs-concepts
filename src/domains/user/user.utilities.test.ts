/**
 * @jest-environment node
 */
import { getUserQueryKey } from './user.utilities'

const TEST_DOMAIN = 'User'
const TEST_NAME = 'Utilities'

describe(`${TEST_DOMAIN} - ${TEST_NAME} - getUserQueryKey`, () => {
  it('should return the queryKey for the user query', () => {
    expect(getUserQueryKey({ guid: 'abc1' })).toBe('user-abc1')
  })
})
