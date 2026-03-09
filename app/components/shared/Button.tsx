'use client'

import Link from 'next/link'
import { ReactNode, MouseEventHandler, useState } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  popover?: string
  variant?: 'primary' | 'secondary' | 'icon'
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  href,
  onClick,
  popover,
  variant = 'primary',
  className = '',
  type = 'button'
}: ButtonProps) {

  const [showPopover, setShowPopover] = useState(false)

  const baseStyle =
    'inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition'

  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    icon: 'btn-icon',
  }

  const buttonClass = `${baseStyle} ${variants[variant]} ${className}`

  const content = (
    <>
      {children}

      {popover && showPopover && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-4 py-1 button-popover">
          {popover}
        </div>
      )}
    </>
  )

  const events = {
    onMouseEnter: () => setShowPopover(true),
    onMouseLeave: () => setShowPopover(false),
  }

  if (href) {
    return (
      <div className="relative inline-block" {...events}>
        <Link href={href} className={buttonClass}>
          {content}
        </Link>
      </div>
    )
  }

  return (
    <div className="relative inline-block" {...events}>
      <button
        type={type}
        onClick={onClick}
        className={buttonClass}
      >
        {content}
      </button>
    </div>
  )
}