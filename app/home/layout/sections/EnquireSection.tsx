'use client'
import Image from "next/image";

import { useState } from "react"
import { z } from "zod"
import Input from "@/app/components/shared/Input"
import Button from "@/app/components/shared/Button"
import Select from "@/app/components/shared/Select"

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
  message: z.string().min(1, "Message is required")
})

export default function EnquireSection() {

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
    { label: "Singapore", value: "sg" },
    { label: "Japan", value: "jp" },
    { label: "Thailand", value: "th" }
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

      <div className="bigtitle">Enquire Now</div>

      <div className="enquire-box">

        {success && (
          <div className="success-message">
            Thank you! Your enquiry has been submitted.
          </div>
        )}

        <form onSubmit={handleSubmit} className="enquire-form">

          <div className="form-row">

            <Input
              label="Name"
              name="name"
              value={form.name}
              placeholder="Enter your name"
              onChange={handleChange}
              error={errors.name}
            />

            <Input
              label="Email"
              type="email"
              name="email"
              value={form.email}
              placeholder="Enter your email"
              onChange={handleChange}
              error={errors.email}
            />

          </div>

          <div className="form-row">

            <Input
              label="Mobile No."
              name="mobile"
              value={form.mobile}
              placeholder="Enter mobile number"
              onChange={handleChange}
              error={errors.mobile}
            />

            <Select
              options={options}
              value={form.country}
              searchable
              placeholder="Select country"
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
            placeholder="Enter your message here"
            onChange={handleChange}
            error={errors.message}
          />

          <div className="text-center mt-[2rem]">
            <Button type="submit">

            {loading ? "Submitting..." : "Submit"}

            </Button>
          </div>

          

        </form>

      </div>
    </>
  )
}