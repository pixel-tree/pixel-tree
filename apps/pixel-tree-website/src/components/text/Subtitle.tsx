
interface SubtitleProps {
  text?: string
  className?: string
  children?: React.ReactNode
}

export const Subtitle = ({ text, className = '', children }: SubtitleProps) => {
  return (
      <h2
          className={`text-xl font-semibold text-gray-500 ${className}`}
      >
          {text ?? children }
      </h2>
  )
}
