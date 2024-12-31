/**
 * @jest-environment jsdom
 */
import * as React from 'react'
import { render } from '@/tests/tests.utils'

import { Loader } from './Loader'

const TEST_DOMAIN = 'Foundation'
const TEST_NAME = Loader.name

describe(`${TEST_DOMAIN} - ${TEST_NAME}`, () => {
  it('should render the loader component', () => {
    const { getByTestId } = render(<Loader />)

    expect(getByTestId('loader')).toBeInTheDocument()
  })
})
