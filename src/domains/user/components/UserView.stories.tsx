import { Meta, StoryObj } from '@storybook/react'

import { fixtureUser } from '@/fixtures/fixtures.user'
import { UserView, UserViewProps } from './UserView'

export default { component: UserView } as Meta<UserViewProps>

export const Default: StoryObj<UserViewProps> = {
  args: {
    isError: false,
    isLoading: false,
    user: fixtureUser
  },
  argTypes: {
    isError: { table: { disable: true } },
    isLoading: { table: { disable: true } },
    user: { table: { disable: true } }
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

export const Loading = {
  args: {
    ...Default.args,
    isLoading: true
  },
  argTypes: {
    ...Default.argTypes
  }
}
