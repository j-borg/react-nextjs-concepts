import * as React from 'react'
import { I18nextProvider } from 'react-i18next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, RenderOptions, RenderResult } from '@testing-library/react'

import i18nService from '@/foundation/services/service.i18n'

const createTestQueryClient = () => {
  return new QueryClient({ defaultOptions: { queries: { retry: false } } })
}

// Query Client Provider wrapper for useQuery hooks
export const QueryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const testQueryClient = createTestQueryClient()

  return <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
}

// https://testing-library.com/docs/react-testing-library/setup#custom-render
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <I18nextProvider i18n={i18nService}>{children}</I18nextProvider>
}

const RenderWrappers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LanguageProvider>
      <QueryProvider>{children}</QueryProvider>
    </LanguageProvider>
  )
}

const renderWithProviders = (ui: React.ReactElement, renderOptions: RenderOptions = {}): RenderResult => {
  return render(ui, { ...renderOptions, wrapper: RenderWrappers })
}

export * from '@testing-library/react'
export { renderWithProviders as render }
