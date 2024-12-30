/**
 * @jest-environment jsdom
 */
import * as React from 'react'
import { render } from '@/tests/tests.utils'

import { UserView } from './UserView'

const TEST_DOMAIN = 'User'
const TEST_NAME = UserView.name

describe(`${TEST_DOMAIN} - ${TEST_NAME}`, () => {
  it('should render the user view component', () => {
    const { getByTestId } = render(<UserView />)

    expect(getByTestId('user-view')).toBeInTheDocument()
  })
})