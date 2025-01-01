import * as React from 'react'
import { useTranslation } from 'react-i18next'

export interface ButtonProps {
  children: React.ReactNode
  handleClick: React.MouseEventHandler<HTMLButtonElement>
  isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, handleClick, isLoading }) => {
  const { t } = useTranslation(['common'])

  const buttonTestId = React.useMemo(() => (isLoading ? 'button-loading' : 'button'), [isLoading])
  const buttonText = React.useMemo(() => (isLoading ? t('loading') : children), [children, isLoading, t])

  return (
    <button className='bg-cyan-600 px-8 py-2 rounded-xl text-white' data-testid={buttonTestId} onClick={handleClick}>
      {buttonText}
    </button>
  )
}
