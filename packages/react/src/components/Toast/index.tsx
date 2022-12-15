import { X } from 'phosphor-react'
import { ToastContainer, ToastContent } from './styles'

type ToastMessage = {
  id: string
  title: string
  description?: string
}

export type ToastProps = {
  messages: ToastMessage[]
}

export function Toast({ messages }: ToastProps) {
  return (
    <ToastContainer>
      {messages.map((message) => (
        <ToastContent key={message.id}>
          <div>
            <strong>{message.title}</strong>

            <X weight="bold" />
          </div>

          {message.description && <p>{message.description}</p>}
        </ToastContent>
      ))}
    </ToastContainer>
  )
}
