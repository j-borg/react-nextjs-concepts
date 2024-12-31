import classnames from 'classnames'

import { HeadingTag } from '@/types/types.typography'

export interface HeadingProps {
  children: React.ReactNode
  isBold?: boolean
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading: React.FC<HeadingProps> = ({ children, isBold, level = 1 }) => {
  const Tag = `h${level}` as HeadingTag

  return (
    <Tag className={classnames('leading-120', isBold && 'font-bold')} data-testid='heading'>
      {children}
    </Tag>
  )
}
