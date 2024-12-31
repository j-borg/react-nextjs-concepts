import type { Preview } from '@storybook/react'

import { withI18nextProvider } from './decorators/withI18nextProvider'

export const decorators = [
  withI18nextProvider
]

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
