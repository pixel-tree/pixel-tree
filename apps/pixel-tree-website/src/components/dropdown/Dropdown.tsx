import { useState } from 'react'

interface DropdownProps {
  children: React.ReactNode
}

export const Dropdown = ({ children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button
        className="flex flex-col items-center gap-2 text-white md:hidden"
        onClick={handleClick}
      >
        <span
          className={`h-1 w-6 rounded-full bg-gray-200 ${
            isOpen ? 'rotate-45' : ''
          }`}
        ></span>
        <span
          className={`h-1 w-6 rounded-full bg-gray-200 ${
            isOpen ? 'rotate-45' : ''
          }`}
        ></span>
      </button>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } flex flex-col gap-4 md:hidden`}
      >
        <ul>{children}</ul>
      </div>
    </div>
  )
}
