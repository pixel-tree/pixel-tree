
interface TextProps {
  text?: string
  className?: string
  children?: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export const Button = ({ text, className = '', children, variant = 'primary' }: TextProps) => {
  return (
    <button
        className={`
        px-5
        py-2
        rounded
        text-white
        font-bold
        hover:opacity-80
        ${variant === 'primary' ? 'bg-gradient-to-tr from-[#1B676B] to-[#1B6B2D] bg-no-repeat' : ''}
        ${className}
        `}
    >
        {text ?? children}
    </button>
  )
}
