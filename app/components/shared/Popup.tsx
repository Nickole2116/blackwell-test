'use client'

import { ReactNode, useEffect } from "react"

type PopupProps = {
  open: boolean
  onClose: () => void
  children: ReactNode
  size?: "sm" | "md" | "lg" | "xl"
}

export default function Popup({
  open,
  onClose,
  children,
  size = "md"
}: PopupProps) {

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (open) {
      document.addEventListener("keydown", handleEsc)
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
    }
  }, [open, onClose])


  if (!open) return null


  const sizeClass = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl"
  }


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade"
        onClick={onClose}
      ></div>

      {/* popup */}
      <div
        className={`
          relative bg-white rounded-2xl shadow-xl p-6 w-full
          ${sizeClass[size]}
          animate-popup
        `}
      >
        {children}
      </div>

    </div>
  )
}