/**
 * @jest-environment jsdom
 */
import * as React from 'react'
import { render } from '@/tests/tests.utils'

import { fixtureUser } from '@/fixtures/fixtures.user'
import { UserView, UserViewProps } from './UserView'

const TEST_DOMAIN = 'User'
const TEST_NAME = UserView.name

const defaultProps: UserViewProps = {
  isError: false,
  isLoading: false,
  user: undefined
}

describe(`${TEST_DOMAIN} - ${TEST_NAME}`, () => {
  it('should render the loader component', () => {
    const { getByTestId, queryByTestId } = render(<UserView {...defaultProps} isLoading />)

    expect(getByTestId('loader')).toBeInTheDocument()
    expect(queryByTestId('error')).not.toBeInTheDocument()
    expect(queryByTestId('user-view')).not.toBeInTheDocument()
  })

  it('should render the user view component', () => {
    const { getByTestId, queryByTestId } = render(<UserView {...defaultProps} user={fixtureUser} />)

    expect(getByTestId('user-view')).toBeInTheDocument()
    expect(queryByTestId('error')).not.toBeInTheDocument()
    expect(queryByTestId('loader')).not.toBeInTheDocument()
  })

  it('should render the error component', () => {
    const { getByTestId, queryByTestId } = render(<UserView {...defaultProps} isError />)

    expect(getByTestId('error')).toBeInTheDocument()
    expect(queryByTestId('user-view')).not.toBeInTheDocument()
    expect(queryByTestId('loader')).not.toBeInTheDocument()
  })
})
