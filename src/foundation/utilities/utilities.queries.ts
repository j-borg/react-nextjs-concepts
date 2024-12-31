import * as Sentry from '@sentry/nextjs'
import { AxiosError, HttpStatusCode } from 'axios'
import { NextApiResponse } from 'next'

export const onRequestFail = (res: NextApiResponse) => (err: AxiosError<{ message: string }>) => {
  const { response } = err || {}

  const status = response?.status ?? HttpStatusCode.ServiceUnavailable
  const json = response?.data ?? {}

  Sentry.captureException(`onRequestFail: ${JSON.stringify(err)}`)

  res.status(status).json(json)
}
