'use client'

import { useState } from "react"
import { z } from "zod"
import { useI18n } from '@/context/I18nContext'


import Popup from "@/app/components/shared/Popup"
import Input from "@/app/components/shared/Input"
import Button from "@/app/components/shared/Button"
import { useAuthStore } from "@/store/authStore"
import StatusPopup from "./StatusPopup"

type LoginPopupProps = {
  open: boolean
  onClose: () => void
}

type FormState = {
  email: string
  password: string
}

type FormErrors = Partial<FormState>

const loginSchema = z.object({

  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")

})

export default function LoginPopup({
  open,
  onClose
}: LoginPopupProps) {
  const { t } = useI18n()


  const login = useAuthStore((state) => state.login)
  const [openStatus, setOpenStatus] = useState(false);

  const [form, setForm] = useState<FormState>({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)

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

    const result = loginSchema.safeParse(form)

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

      login({
        firstName: "User",
        email: form.email
      })

      console.log("Login success", form)

      setOpenStatus(true);

      onClose()

    } catch {

      alert("Login failed")

    } finally {

      setLoading(false)

    }

  }

  return (<>
    <Popup open={open} onClose={onClose} size="md">

      <h2 className="text-2xl font-bold mb-6">
        {t('button.login')}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <Input
          label="Email"
          name="email"
          placeholder={t('land.email')}
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />

        <Input
          label="Password"
          type="password"
          placeholder={t('land.password')}
          name="password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />

        <div className="col-span-2 mt-3 text-center">
          <Button type="submit" variant="gradient">

            {loading ? t('button.loging') : t('button.login_now')}

          </Button>
        </div>

        

      </form>

    </Popup>

    <StatusPopup open={openStatus} onClose={() => setOpenStatus(false)} msg={`Hi ${form.email}, welcome to Blackwell, please verify your email immediately.`} />
  </>)
}