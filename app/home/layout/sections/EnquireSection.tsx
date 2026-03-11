'use client'
import Image from "next/image";

import { useState } from "react"
import { z } from "zod"
import Input from "@/app/components/shared/Input"
import Button from "@/app/components/shared/Button"
import Select from "@/app/components/shared/Select"
import { useI18n } from '@/context/I18nContext'


type FormState = {
  name: string
  email: string
  mobile: string
  country: string
  message: string
}

type FormErrors = Partial<FormState>

const enquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  mobile: z.string().min(1, "Mobile number is required"),
  country: z.string().min(1, "Country is required"),
})

export default function EnquireSection() {
  const { t } = useI18n()


  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    mobile: '',
    country: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const options = [
    { label: "Malaysia", value: "my" },
    { label: "Vietnam", value: "vn" },
    { label: "Thailand", value: "th" },
    { label: "Others", value: "-" }
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    const { name, value } = e.target

    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validate = (): FormErrors => {

    const result = enquirySchema.safeParse(form)

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

      // simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      console.log("Form submitted:", form)

      setSuccess(true)

      setForm({
        name: '',
        email: '',
        mobile: '',
        country: '',
        message: ''
      })

      setTimeout(() => {
        setSuccess(false)
      }, 3000)

      

    } catch (error) {

      alert("Something went wrong.")

    } finally {

      setLoading(false)

    }

  }

  return (
    <>
      <div className="coverimg">
        <Image src="/blackwell/bg-3.png" alt="bg-1" width={3000} height={3000} className="bg-3" />
      </div>

      <div className="bigtitle">{t('land.enq')}</div>

      <div className="enquire-box">

        {success && (
          <div className="success-message">
            {t('land.enq_success_msg')}
          </div>
        )}

        <form onSubmit={handleSubmit} className="enquire-form">

          <div className="form-row">

            <Input
              label="Name"
              name="name"
              value={form.name}
              placeholder={t('land.name')}
              onChange={handleChange}
              error={errors.name}
            />

            <Input
              label="Email"
              type="email"
              name="email"
              value={form.email}
              placeholder={t('land.email')}
              onChange={handleChange}
              error={errors.email}
            />

          </div>

          <div className="form-row">

            <Input
              label="Mobile No."
              name="mobile"
              value={form.mobile}
              placeholder={t('land.mobile_no')}
              onChange={handleChange}
              error={errors.mobile}
            />

            <Select
              options={options}
              value={form.country}
              searchable
              placeholder={t('land.country')}
              onChange={(value) =>
                setForm(prev => ({
                  ...prev,
                  country: value
                }))
              }
            />

          </div>

          <Input
            label="Message"
            type="textarea"
            name="message"
            rows={4}
            value={form.message}
            placeholder={t('land.message_optional')}
            onChange={handleChange}
            error={errors.message}
          />

          <div className="text-center mt-[2rem]">
            <Button type="submit">

            {loading ? t('button.submiting') : t('button.submit')}

            </Button>
          </div>

          

        </form>

      </div>
    </>
  )
}