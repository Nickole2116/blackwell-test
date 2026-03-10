'use client'

import { useState } from "react"
import { z } from "zod"

import Popup from "@/app/components/shared/Popup"
import Input from "@/app/components/shared/Input"
import Button from "@/app/components/shared/Button"
import Select from "@/app/components/shared/Select"
import { useAuthStore } from "@/store/authStore"

type RegisterPopupProps = {
  open: boolean
  onClose: () => void
}

type FormState = {
  firstName: string
  lastName: string
  email: string
  mobile: string
  country: string
  password: string
  confirmPassword: string
}

type FormErrors = Partial<FormState>

const registerSchema = z
  .object({

    firstName: z.string().min(1, "First name is required"),

    lastName: z.string().min(1, "Last name is required"),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email format"),

    mobile: z.string().min(1, "Mobile number is required"),

    country: z.string().min(1, "Country is required"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters"),

    confirmPassword: z.string()

  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  })

export default function RegisterPopup({
  open,
  onClose
}: RegisterPopupProps) {

  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    country: '',
    password: '',
    confirmPassword: ''
  })

  const login = useAuthStore((state) => state.login)

  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const options = [
    { label: "Malaysia", value: "my" },
    { label: "Singapore", value: "sg" },
    { label: "Japan", value: "jp" }
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    const { name, value } = e.target

    setForm(prev => ({
      ...prev,
      [name]: value
    }))

    if (errors[name as keyof FormState]) {

      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))

    }
  }

  const validate = (): FormErrors => {

    const result = registerSchema.safeParse(form)

    if (result.success) return {}

    const newErrors: FormErrors = {}

    result.error.issues.forEach(issue => {
      const field = issue.path[0] as keyof FormState
      newErrors[field] = issue.message
    })

    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors)

      const firstError = Object.keys(validationErrors)[0]

      document
        .querySelector(`[name="${firstError}"]`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" })

      return
    }

    setErrors({})
    setLoading(true)

    try {

      await new Promise(resolve => setTimeout(resolve, 1000))

      setSuccess(true)

      login(form)

      console.log("Register success", form)

      onClose()

    } catch {

      alert("Something went wrong")

    } finally {

      setLoading(false)

    }

  }

  return (
    <Popup open={open} onClose={onClose} size="lg">

      <h2 className="text-2xl font-bold mb-6">
        Sign Up
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

        <Input
          label="First Name"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />

        <Input
          label="Last Name"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />

        <Input
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />

        <Input
          label="Mobile"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          error={errors.mobile}
        />

        <Select
          options={options}
          value={form.country}
          placeholder="Select country"
          onChange={(value) =>
            setForm(prev => ({
              ...prev,
              country: value
            }))
          }
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />

        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        <div className="col-span-2 mt-4">
          <Button type="submit">
            {loading ? "Registering..." : "Register"}
          </Button>
        </div>

      </form>

    </Popup>
  )
}