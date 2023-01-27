import { useState } from 'react'

interface DropdownProps {
  children: React.ReactNode
}

export const Dropdown = ({ children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        className="md:hidden flex items-center gap-2 text-white"
        onClick={() => { setIsOpen(!isOpen) }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden flex flex-col gap-4`}
      >
        <ul>{children}</ul>
      </div>
    </div>
  )
}
