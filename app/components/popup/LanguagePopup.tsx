'use client'

import { useState } from "react"

import Popup from "@/app/components/shared/Popup"
import Select from "@/app/components/shared/Select"
import Button from "@/app/components/shared/Button"
import { useI18n } from '@/context/I18nContext'

type LanguagePopupProps = {
  open: boolean
  onClose: () => void
}

export default function LanguagePopup({
  open,
  onClose
}: LanguagePopupProps) {
  const { t } = useI18n()


  const [language, setLanguage] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("lang") || "en"
      : "en"
  )
  const { changeLocale } = useI18n()

  const options = [
    { label: "English", value: "en" },
    { label: "中文", value: "zh" },
  ]

  const handleSave = () => {

    localStorage.setItem("lang", language)
    changeLocale(language)

    onClose()
  }

  return (
    <Popup open={open} onClose={onClose} size="sm">

      <h2 className="text-2xl font-bold mb-6">
        {t('land.select_lang')}
      </h2>

      <Select
        options={options}
        value={language}
        placeholder="Select language"
        onChange={(value) => setLanguage(value)}
      />

      <div className="col-span-2 mt-5 text-center">
        <Button onClick={handleSave} variant="gradient">
          {t('button.submit')}
        </Button>
      </div>

    </Popup>
  )
}