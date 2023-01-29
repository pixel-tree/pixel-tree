
export interface PaginationButtonsProps {
  previous: string | null
  next: string | null
}

export interface PaginationButtonProps {
  url: string
  children: React.ReactNode
  className?: string
}
