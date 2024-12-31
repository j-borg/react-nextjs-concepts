import { Meta, StoryObj } from '@storybook/react'

import { fixtureUser } from '@/fixtures/fixtures.user'
import { UserView, UserViewProps } from './UserView'

export default { component: UserView } as Meta<UserViewProps>

export const Primary: StoryObj<UserViewProps> = {
  args: {
    user: fixtureUser
  }
}
