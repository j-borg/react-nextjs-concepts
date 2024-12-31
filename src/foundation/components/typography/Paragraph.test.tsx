/**
 * @jest-environment jsdom
 */
import * as React from 'react'
import { render } from '@/tests/tests.utils'

import { Paragraph } from './Paragraph'

const TEST_DOMAIN = 'Foundation'
const TEST_NAME = Paragraph.name

describe(`${TEST_DOMAIN} - ${TEST_NAME}`, () => {
  it('should render the paragraph', () => {
    const { getByTestId } = render(<Paragraph>paragraph-text</Paragraph>)

    expect(getByTestId('paragraph')).toBeInTheDocument()
  })
})
