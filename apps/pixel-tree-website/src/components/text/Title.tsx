
interface TitleProps {
  text?: string
  className?: string
  children?: React.ReactNode
}

export const Title = ({ text, className = '', children }: TitleProps) => {
  return (
    <h1
        className={`text-7xl font-bold text-white ${className}`}
    >
        {text ?? children}
    </h1>
  )
}
