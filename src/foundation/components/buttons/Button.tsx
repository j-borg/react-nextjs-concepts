import * as React from 'react'
import { useTranslation } from 'react-i18next'

export interface ButtonProps {
  children: React.ReactNode
  isLoading?: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: React.FC<ButtonProps> = ({ children, isLoading, onClick }) => {
  const { t } = useTranslation(['common'])

  const buttonTestId = React.useMemo(() => (isLoading ? 'button-loading' : 'button'), [isLoading])
  const buttonText = React.useMemo(() => (isLoading ? t('loading') : children), [children, isLoading, t])

  return (
    <button className='bg-cyan-400 px-8 py-2 rounded-xl text-black' data-testid={buttonTestId} onClick={onClick}>
      {buttonText}
    </button>
  )
}
