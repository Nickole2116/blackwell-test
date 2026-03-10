'use client'

import { useEffect, useRef, useState, ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
}

export default function LazySection({ children, className = "" }: Props) {

  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
      observer.disconnect()
    }

  }, [])

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? "visible" : ""}`}
    >
      {children}
    </div>
  )
}