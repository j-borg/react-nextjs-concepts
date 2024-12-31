/**
 * @jest-environment jsdom
 */
import * as React from 'react'
import { render } from '@/tests/tests.utils'

import { Error } from './Error'

const TEST_DOMAIN = 'Foundation'
const TEST_NAME = Error.name

describe(`${TEST_DOMAIN} - ${TEST_NAME}`, () => {
  it('should render the error component', () => {
    const { getByTestId } = render(<Error />)

    expect(getByTestId('error')).toBeInTheDocument()
  })
})
