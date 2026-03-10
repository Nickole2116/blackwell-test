'use client'

import { useEffect, useRef, useState } from "react"

type MarqueeProps = {
  children: React.ReactNode
  speed?: number
  direction?: "left" | "right"
  pauseOnHover?: boolean
  gap?: number
}

export default function Marquee({
  children,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
  gap = 40
}: MarqueeProps) {

  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const [repeat, setRepeat] = useState(1)

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current

    if (!container || !track) return

    const containerWidth = container.offsetWidth
    const contentWidth = track.scrollWidth

    if (containerWidth === 0 || contentWidth === 0) return

    const needed = Math.ceil(containerWidth / contentWidth) + 1
    setRepeat(needed)

  }, [children])

  const items = Array.from({ length: repeat }).map((_, i) => (
    <div key={i} className="flex items-center shrink-0" style={{ gap }}>
      {children}
    </div>
  ))

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden w-full ${pauseOnHover ? "marquee-hover" : ""}`}
    >
      <div
        ref={trackRef}
        className="flex marquee-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "left" ? "normal" : "reverse"
        }}
      >
        {items}
      </div>
    </div>
  )
}