export function getDate(date: Date) {
  return new Date(date).getDate()
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
  }).format(new Date(date))
}
