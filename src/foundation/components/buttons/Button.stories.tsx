import { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default { component: Button } as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    isLoading: false
  },
  argTypes: {
    handleClick: { table: { disable: true } }
  }
}

export const Loading = {
  args: {
    ...Default.args,
    isLoading: true
  },
  argTypes: {
    ...Default.argTypes
  }
}
