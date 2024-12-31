import axios, { AxiosRequestConfig, Method } from 'axios'

export interface BaseParams {
  body?: BodyInit | null | object
  headers?: Record<string, string>
  url: string
}

export interface RequestParams extends BaseParams {
  method: Method
}

export interface ApiService {
  _request<T>(params: RequestParams): Promise<T>
  delete<T>(params: BaseParams): Promise<T>
  get<T>(params: BaseParams): Promise<T>
  patch<T>(params: BaseParams): Promise<T>
  post<T>(params: BaseParams): Promise<T>
  put<T>(params: BaseParams): Promise<T>
}

export const apiService: ApiService = {
  async delete(params) {
    return this._request({ method: 'DELETE', ...params })
  },

  async get(params) {
    return this._request({ method: 'GET', ...params })
  },

  async patch(params) {
    return this._request({ method: 'PATCH', ...params })
  },

  async post(params) {
    return this._request({ method: 'POST', ...params })
  },

  async put(params) {
    return this._request({ method: 'PUT', ...params })
  },

  async _request({ body, headers = {}, method, url }) {
    const options: AxiosRequestConfig = {
      ...(body && { data: JSON.stringify(body) }),
      headers,
      method
    }

    return axios({ url, ...options }).then(({ data }) => data)
  }
}
