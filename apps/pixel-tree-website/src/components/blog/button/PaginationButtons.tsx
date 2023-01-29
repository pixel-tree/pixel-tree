import type { FC } from 'react'
import type { PaginationButtonProps, PaginationButtonsProps } from './button.types'
import { GrPrevious, GrNext } from 'react-icons/gr/index'

export const PaginationButtons = ({ next, previous }: PaginationButtonsProps) => {
  return (
    <section
        className="
            bottom-0
            text-white
            right-0
            p-2
            w-[calc(100vw-200px)]
            absolute
        "
    >
        {
        (previous != null)
          ? (
          <PaginationButton url={previous} className="absolute left-2 bottom-1">
            <GrPrevious />
            Anterior
          </PaginationButton>
            )
          : null
        }
        {
        (next != null)
          ? (
          <PaginationButton url={next} className="absolute right-5 bottom-1">
            Siguiente
            <GrNext />
          </PaginationButton>
            )
          : null
        }
    </section>
  )
}

const PaginationButton: FC< PaginationButtonProps> = ({ url, children, className }) => {
  return (
    <a
     href={url}
     className={`
        px-3
        py-2
        text-md
        flex
        items-center
        justify-center
        gap-x-2
        bg-badge-experiencias
        text-[#155828] 
        rounded-xl
        hover:bg-[#43d175]
        ${className ?? ''}
     `}
     >
      {children}
    </a>
  )
}
