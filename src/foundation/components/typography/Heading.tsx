export interface HeadingProps {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export const Heading: React.FC<HeadingProps> = ({ children, level = 1 }) => {
  const Tag = `h${level}` as HeadingTag

  return (
    <Tag className='font-bold leading-120 text-xl' data-testid='heading'>
      {children}
    </Tag>
  )
}
