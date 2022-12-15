import { ReactNode } from 'react'
import { TooltipContainer } from './styles'

type TooltipProps = {
  title: string
  children: ReactNode
}

export function Tooltip({ title, children }: TooltipProps) {
  return (
    <TooltipContainer>
      {children}
      <span>{title}</span>
    </TooltipContainer>
  )
}
