'use client'

import { InputHTMLAttributes, ReactNode } from 'react'

type InputProps = {
  label?: string
  error?: string
  helperText?: string
  icon?: ReactNode
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

export default function Input({
  label,
  error,
  helperText,
  icon,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="w-full">

      {label && (
        <label className="block mb-1 text-sm font-medium">
          {label}
        </label>
      )}

      <div className="relative flex items-center">

        {icon && (
          <span className="absolute left-3 flex items-center text-gray-500">
            {icon}
          </span>
        )}

        <input
          className={`
            w-full px-4 py-2 border rounded-md outline-none
            focus:ring-2 focus:ring-black
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${className}
          `}
          {...props}
        />
      </div>

      {helperText && !error && (
        <p className="mt-1 text-xs text-gray-500">
          {helperText}
        </p>
      )}

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}

    </div>
  )
}