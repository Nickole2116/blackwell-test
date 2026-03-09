'use client'

import { useState } from "react"
import Input from "@/app/components/shared/Input"
import Button from "@/app/components/shared/Button"

type FormState = {
  name: string
  email: string
  mobile: string
  country: string
  message: string
}

type FormErrors = Partial<FormState>

export default function EnquireSection() {

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    mobile: '',
    country: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})

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

    let newErrors: FormErrors = {}

    if (!form.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format"
    }

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required"
    }

    if (!form.country.trim()) {
      newErrors.country = "Country is required"
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required"
    }

    return newErrors
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors)

      const firstError = Object.keys(validationErrors)[0]

      document
        .querySelector(`[name="${firstError}"]`)
        ?.scrollIntoView({ behavior: "smooth" })

      return
    }

    setErrors({})

    console.log("Form submitted:", form)

    alert("Enquiry submitted successfully!")

  }

  return (
    <>
      <div className="bigtitle">Enquire Now</div>

      <div className="enquire-box">

        <form onSubmit={handleSubmit} className="enquire-form">

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

          <Input
            label="Mobile No."
            name="mobile"
            value={form.mobile}
            placeholder="Enter mobile number"
            onChange={handleChange}
            error={errors.mobile}
          />

          <Input
            label="Country of Residence"
            name="country"
            value={form.country}
            placeholder="Enter country"
            onChange={handleChange}
            error={errors.country}
          />

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

          <Button type="submit">
            Submit
          </Button>

        </form>

      </div>
    </>
  )
}