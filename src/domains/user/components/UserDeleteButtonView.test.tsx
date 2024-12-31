/**
 * @jest-environment jsdom
 */
import * as React from 'react'
import userEvent from '@testing-library/user-event'
import { render } from '@/tests/tests.utils'

import { UserDeleteButtonView, UserDeleteButtonViewProps } from './UserDeleteButtonView'

const TEST_DOMAIN = 'User'
const TEST_NAME = UserDeleteButtonView.name

const buttonSpy = jest.fn()

const defaultProps: UserDeleteButtonViewProps = {
  handleClick: buttonSpy,
  isError: false,
  isPending: false
}

describe(`${TEST_DOMAIN} - ${TEST_NAME}`, () => {
  it('should render the delete button', () => {
    const { getByTestId, queryByTestId } = render(<UserDeleteButtonView {...defaultProps} />)

    expect(getByTestId('button')).toBeInTheDocument()
    expect(queryByTestId('button-loading')).not.toBeInTheDocument()
  })

  it('should render the error component', () => {
    const { getByTestId, queryByTestId } = render(<UserDeleteButtonView {...defaultProps} isError />)

    expect(getByTestId('error')).toBeInTheDocument()
    expect(queryByTestId('button')).not.toBeInTheDocument()
  })

  it('should render the loading button', () => {
    const { getByTestId, queryByTestId } = render(<UserDeleteButtonView {...defaultProps} isPending />)

    expect(getByTestId('button-loading')).toBeInTheDocument()
    expect(queryByTestId('button')).not.toBeInTheDocument()
  })

  it('should call the click handler', async () => {
    const { getByTestId } = render(<UserDeleteButtonView {...defaultProps} />)

    await userEvent.click(getByTestId('button'))

    expect(buttonSpy).toHaveBeenCalled()
  })
})
