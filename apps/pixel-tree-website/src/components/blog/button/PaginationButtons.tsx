import type { PaginationButtonsProps } from './button.types'

export const PaginationButtons = ({ next, previous }: PaginationButtonsProps) => {
  return (
    <section
        className="
            flex
            justify-between
            bottom-0
            text-white
            left-0
            w-full
            fixed
        "
    >
        {(previous != null) ? <a href={previous}>Anterior</a> : null}
        {(next != null) ? <a href={next}>Siguiente</a> : null}
    </section>
  )
}
