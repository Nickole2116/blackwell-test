'use client'

import { ReactNode, useState, useEffect } from "react"
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js"


type SliderProps = {
  children: ReactNode[]
  auto?: boolean
  interval?: number
}

export default function Slider({
  children,
  auto = true,
  interval = 4000
}: SliderProps) {

  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % children.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + children.length) % children.length)
  }

  useEffect(() => {
    if (!auto) return

    const timer = setInterval(() => {
      next()
    }, interval)

    return () => clearInterval(timer)
  }, [index])

  return (
    <div className="slider">

      <button className="slider-nav prev" onClick={prev}>
        <Icon path={mdiChevronLeft} size={1} />
      </button>

      <div
        className="slider-track"
        style={{
          transform: `translateX(-${index * 25}%)`
        }}
      >
        {children.map((child, i) => (
          <div className="slide" key={i}>
            {child}
          </div>
        ))}
      </div>

      <button className="slider-nav next" onClick={next}>
        <Icon path={mdiChevronRight} size={1} />
      </button>

    </div>
  )
}