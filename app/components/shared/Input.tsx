'use client'

import React from "react"

type InputProps = {
  label?: string
  type?: string
  name: string
  value?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  rows?: number
}

export default function Input({
  label,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  error,
  rows
}: InputProps) {

  return (
    <div className="form-group">

      {label && <label htmlFor={name}>{label}</label>}

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          rows={rows}
          className={`form-input ${error ? "input-error" : ""}`}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`form-input ${error ? "input-error" : ""}`}
        />
      )}

      {error && <p className="error">{error}</p>}

    </div>
  )
}