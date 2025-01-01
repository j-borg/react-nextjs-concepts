/**
 * @jest-environment jsdom
 */
import * as React from 'react'
import userEvent from '@testing-library/user-event'
import { render } from '@/tests/tests.utils'

import { Button, ButtonProps } from './Button'

const TEST_DOMAIN = 'Foundation'
const TEST_NAME = Button.name

const buttonSpy = jest.fn()

const defaultProps: ButtonProps = {
  children: 'button-text',
  handleClick: buttonSpy,
  isLoading: false
}

describe(`${TEST_DOMAIN} - ${TEST_NAME}`, () => {
  it('should render the button', () => {
    const { getByTestId, queryByTestId } = render(<Button {...defaultProps} />)

    expect(getByTestId('button')).toBeInTheDocument()
    expect(queryByTestId('button-loading')).not.toBeInTheDocument()
  })

  it('should render the button loading', () => {
    const { getByTestId, queryByTestId } = render(<Button {...defaultProps} isLoading />)

    expect(getByTestId('button-loading')).toBeInTheDocument()
    expect(queryByTestId('button')).not.toBeInTheDocument()
  })

  it('should call the click handler', async () => {
    const { getByTestId } = render(<Button {...defaultProps} />)

    await userEvent.click(getByTestId('button'))

    expect(buttonSpy).toHaveBeenCalled()
  })
})
