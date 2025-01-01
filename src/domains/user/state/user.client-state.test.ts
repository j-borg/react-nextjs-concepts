/**
 * @jest-environment node
 */
import { apiService } from '@/foundation/services/service.api'
import { User } from '@/types/types.user'
import { userClientState } from './user.client-state'

const TEST_DOMAIN = 'User'
const TEST_NAME = 'userClientState'

const setup = () => ({
  apiServiceCreateSpy: jest.spyOn(apiService, 'post'),
  apiServiceDeleteSpy: jest.spyOn(apiService, 'delete'),
  apiServiceGetSpy: jest.spyOn(apiService, 'get'),
  apiServiceUpdateSpy: jest.spyOn(apiService, 'patch')
})

const defaultParams: Partial<User> = {
  guid: 'abc1'
}

const PATH = 'http://localhost:3000/api/user'

describe(`${TEST_DOMAIN} - ${TEST_NAME}`, () => {
  it('should call the api service (POST) with the right params', async () => {
    const { apiServiceCreateSpy } = setup()

    apiServiceCreateSpy.mockImplementation(() => Promise.resolve())

    await userClientState.create(defaultParams)

    expect(apiServiceCreateSpy).toHaveBeenCalledWith({ body: defaultParams, url: PATH })
  })

  it('should call the api service (DELETE) with the right params', async () => {
    const { apiServiceDeleteSpy } = setup()

    apiServiceDeleteSpy.mockImplementation(() => Promise.resolve())

    await userClientState.delete(defaultParams)

    expect(apiServiceDeleteSpy).toHaveBeenCalledWith({ body: defaultParams, url: PATH })
  })

  it('should call the api service (GET) with the right params', async () => {
    const { apiServiceGetSpy } = setup()

    apiServiceGetSpy.mockImplementation(() => Promise.resolve())

    await userClientState.get(defaultParams)()

    expect(apiServiceGetSpy).toHaveBeenCalledWith({ url: `${PATH}?guid=abc1` })
  })

  it('should call the api service (PATCH) with the right params', async () => {
    const { apiServiceUpdateSpy } = setup()

    apiServiceUpdateSpy.mockImplementation(() => Promise.resolve())

    await userClientState.update(defaultParams)

    expect(apiServiceUpdateSpy).toHaveBeenCalledWith({ body: defaultParams, url: PATH })
  })
})
