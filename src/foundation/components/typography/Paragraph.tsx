import * as React from 'react'

export interface ParagraphProps {
  children: React.ReactNode
}

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <p data-testid='paragraph'>{children}</p>
}
