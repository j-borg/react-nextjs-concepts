/**
 * @jest-environment jsdom
 */
import * as React from 'react'
import { render } from '@/tests/tests.utils'

import { Heading } from './Heading'

const TEST_DOMAIN = 'Foundation'
const TEST_NAME = Heading.name

describe(`${TEST_DOMAIN} - ${TEST_NAME}`, () => {
  it('should render the heading', () => {
    const { getByTestId } = render(<Heading>heading-text</Heading>)

    expect(getByTestId('heading')).toBeInTheDocument()
  })
})
