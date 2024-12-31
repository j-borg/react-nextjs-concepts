import * as React from 'react'
import { I18nextProvider } from 'react-i18next'
import type { Decorator, StoryFn } from '@storybook/react'

import i18n from '../../src/foundation/services/service.i18n'

export const withI18nextProvider: Decorator = (StoryFn: StoryFn) => {
  return (
    <I18nextProvider i18n={i18n}>
      <StoryFn />
    </I18nextProvider>
  )
}
