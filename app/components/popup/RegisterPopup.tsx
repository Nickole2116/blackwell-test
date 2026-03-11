'use client'

import { useState } from "react"
import { z } from "zod"
import { useI18n } from '@/context/I18nContext'


import Popup from "@/app/components/shared/Popup"
import Input from "@/app/components/shared/Input"
import Button from "@/app/components/shared/Button"
import Select from "@/app/components/shared/Select"
import { useAuthStore } from "@/store/authStore"
import StatusPopup from "./StatusPopup"

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
  const { t } = useI18n()

  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    country: '',
    password: '',
    confirmPassword: ''
  })
  const [openStatus, setOpenStatus] = useState(false);

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
      setOpenStatus(true);

    } catch {

      alert("Something went wrong")

    } finally {

      setLoading(false)

    }

  }

  return (<>
    <Popup open={open} onClose={onClose} size="lg">

      <h2 className="text-xl font-bold mb-6 color-[#fff]">
        {t('button.register_now')}
      </h2>

      <form onSubmit={handleSubmit} className="content">

        <div className="form-row mb-1">
          <Input
            label="First Name"
            name="firstName"
            placeholder={t('land.first_name')}
            value={form.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />

          <Input
            label="Last Name"
            name="lastName"
            placeholder={t('land.last_name')}
            value={form.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </div>

        

        <Input
          label="Email"
          name="email"
          placeholder={t('land.email')}
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />

        <Input
          label="Mobile"
          name="mobile"
          placeholder={t('land.mobile_no')}
          value={form.mobile}
          onChange={handleChange}
          error={errors.mobile}
        />

        <Select
          options={options}
          value={form.country}
          placeholder={t('land.country')}
          onChange={(value) =>
            setForm(prev => ({
              ...prev,
              country: value
            }))
          }
        />

        <div className="form-row mb-1">
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder={t('land.password')}
            value={form.password}
            onChange={handleChange}
            error={errors.password}
          />

          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder={t('land.confirm_password')}
            value={form.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />
        </div>
        

        <div className="col-span-2 mt-3 text-center">
          <Button type="submit" variant="gradient">
            {loading ? t('button.registering') : t('button.register_now')}
          </Button>
        </div>

      </form>

    </Popup>

  <StatusPopup open={openStatus} onClose={() => setOpenStatus(false)} msg={`Hi ${form.firstName}, welcome to Blackwell, please verify your email immediately.`} />

  </>)
}