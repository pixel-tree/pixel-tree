interface TextProps {
  text?: string
  className?: string
  children?: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  text,
  className = '',
  children,
  variant = 'primary'
}: TextProps) => {
  return (
    <>
      <div
        className={`rounded p-[1px] ${
          variant === 'primary'
            ? 'bg-gradient-to-tr from-[#1B676B] to-[#1B6B2D] bg-no-repeat'
            : ''
        }`}
      >
        <button
          className={`
        rounded
        bg-gradient-to-tr from-[#17141E] to-[#122818]
        px-5
        py-2
        font-bold

        text-white
        ease-in-out
        hover:bg-gradient-to-tr
        hover:from-[#1B676B]
        hover:to-[#1B6B2D]
        ${className}
        `}
        >
          {text ?? children}
        </button>
      </div>
    </>
  )
}
