'use client'

import { useEffect, useRef, useState, ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function LazySection({ children }: Props) {

  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()

  }, [])

  return (
    <div ref={ref}>
      {visible && children}
    </div>
  )
}