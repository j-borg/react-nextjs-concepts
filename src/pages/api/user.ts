import { HttpStatusCode } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

import { fixtureUser } from '@/fixtures/fixtures.user'
import { onRequestFail } from '@/foundation/utilities/utilities.queries'
import { userServerState } from '@/domains/user/state/user.server-state'

export default async function handler({ body, method, query }: NextApiRequest, res: NextApiResponse) {
  switch (method) {
    case 'DELETE': {
      return userServerState
        .delete({ body })
        .then(res.json)
        .catch(() => res.status(HttpStatusCode.Ok).json(fixtureUser))
    }
    case 'GET': {
      return userServerState
        .get({ query })()
        .then(res.json)
        .catch(() => res.status(HttpStatusCode.Ok).json(fixtureUser))
    }
    case 'PATCH': {
      return userServerState.update({ body }).then(res.json).catch(onRequestFail(res))
    }
    case 'POST': {
      return userServerState.create({ body }).then(res.json).catch(onRequestFail(res))
    }
  }
}
