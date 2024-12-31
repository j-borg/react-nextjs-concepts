import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Paragraph } from '../typography/Paragraph'

export const Error: React.FC = () => {
  const { t } = useTranslation(['common'])

  return (
    <div data-testid='error'>
      <Paragraph>{t('error')}</Paragraph>
    </div>
  )
}
