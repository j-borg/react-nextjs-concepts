import { Meta, StoryObj } from '@storybook/react'

import { UserDeleteButtonView, UserDeleteButtonViewProps } from './UserDeleteButtonView'

export default { component: UserDeleteButtonView } as Meta<UserDeleteButtonViewProps>

export const Default: StoryObj<UserDeleteButtonViewProps> = {
  args: {
    isError: false,
    isPending: false
  },
  argTypes: {
    handleClick: { table: { disable: true } },
    isError: { table: { disable: true } },
    isPending: { table: { disable: true } }
  }
}

export const Error = {
  args: {
    ...Default.args,
    isError: true
  },
  argTypes: {
    ...Default.argTypes
  }
}

export const Pending = {
  args: {
    ...Default.args,
    isPending: true
  },
  argTypes: {
    ...Default.argTypes
  }
}
