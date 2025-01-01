/**
 * @jest-environment node
 */
import { apiService } from './service.api'

const TEST_DOMAIN = 'Foundation'
const TEST_NAME = 'apiService'

jest.mock('axios', () => Promise.resolve())

const setup = () => ({
  requestSpy: jest.spyOn(apiService, '_request')
})

const defaultParams = {
  url: '/'
}

describe(`${TEST_DOMAIN} - ${TEST_NAME}`, () => {
  beforeEach(() => {
    const { requestSpy } = setup()

    requestSpy.mockResolvedValue({ data: '' })
  })

  it('should do a DELETE request', async () => {
    const { requestSpy } = setup()

    const deleteParams = { body: { guid: '123' } }

    await apiService.delete({ ...defaultParams, ...deleteParams })

    expect(requestSpy).toHaveBeenCalledWith({ body: { guid: '123' }, method: 'DELETE', url: '/' })
  })

  it('should do a GET request', async () => {
    const { requestSpy } = setup()

    await apiService.get(defaultParams)

    expect(requestSpy).toHaveBeenCalledWith({ method: 'GET', url: '/' })
  })

  it('should do a PATCH request', async () => {
    const { requestSpy } = setup()

    const patchParams = { body: { guid: '456' } }

    await apiService.patch({ ...defaultParams, ...patchParams })

    expect(requestSpy).toHaveBeenCalledWith({ body: { guid: '456' }, method: 'PATCH', url: '/' })
  })

  it('should do a POST request', async () => {
    const { requestSpy } = setup()

    const postParams = {
      body: { guid: '789' }
    }

    await apiService.post({ ...defaultParams, ...postParams })

    expect(requestSpy).toHaveBeenCalledWith({ body: { guid: '789' }, method: 'POST', url: '/' })
  })

  it('should do a PUT request', async () => {
    const { requestSpy } = setup()

    const putParams = { body: { guid: '0ab' } }

    await apiService.put({ ...defaultParams, ...putParams })

    expect(requestSpy).toHaveBeenCalledWith({ body: { guid: '0ab' }, method: 'PUT', url: '/' })
  })
})
