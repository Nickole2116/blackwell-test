'use client'

import { useState, useRef, useEffect } from "react"

type Option = {
  label: string
  value: string
}

type SelectProps = {
  options: Option[]
  value?: string
  placeholder?: string
  searchable?: boolean
  onChange?: (value: string) => void
}

export default function Select({
  options,
  value,
  placeholder = "Select option",
  searchable = false,
  onChange
}: SelectProps) {

  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [highlight, setHighlight] = useState(0)

  const ref = useRef<HTMLDivElement>(null)

  const selected = options.find(o => o.value === value)

  const filtered = options.filter(option =>
    option.label.toLowerCase().includes(search.toLowerCase())
  )

  const selectOption = (option: Option) => {
    onChange?.(option.value)
    setOpen(false)
    setSearch("")
  }

  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }

  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {

    if (!open) return

    if (e.key === "ArrowDown") {
      setHighlight((prev) => Math.min(prev + 1, filtered.length - 1))
    }

    if (e.key === "ArrowUp") {
      setHighlight((prev) => Math.max(prev - 1, 0))
    }

    if (e.key === "Enter") {
      selectOption(filtered[highlight])
    }

  }

  return (
    <div
      className="select"
      ref={ref}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >

      <div
        className="select-trigger"
        onClick={() => setOpen(!open)}
      >
        {selected?.label || placeholder}
        <span className={`arrow ${open ? "open" : ""}`}>▼</span>
      </div>

      {open && (
        <div className="select-dropdown">

          {searchable && (
            <input
              className="select-search"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          )}

          {filtered.map((option, i) => (
            <div
              key={option.value}
              className={`select-option 
              ${value === option.value ? "active" : ""} 
              ${highlight === i ? "highlight" : ""}`}
              onClick={() => selectOption(option)}
            >
              {option.label}

              {value === option.value && (
                <span className="check">✓</span>
              )}
            </div>
          ))}

        </div>
      )}

    </div>
  )
}