import * as React from 'react'
import { useTranslation } from 'react-i18next'

import { Paragraph } from '@/foundation/components/typography/Paragraph'

export const Loader: React.FC = () => {
  const { t } = useTranslation(['common'])

  return (
    <div data-testid='loader'>
      <Paragraph>{t('loading')}</Paragraph>
    </div>
  )
}
