'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import en from '@/locales/en'
import zh from '@/locales/zh'

const messages = { en, zh }

type Locale = 'en' | 'zh'

const I18nContext = createContext<any>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {

  const [locale, setLocale] = useState<Locale>('en')

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale
    if (saved) setLocale(saved)
  }, [])

  const changeLocale = (lang: Locale) => {
    localStorage.setItem('locale', lang)
    setLocale(lang)
  }

  const t = (path: string) => {
    const keys = path.split('.')
    let value: any = messages[locale]

    keys.forEach(k => {
      value = value?.[k]
    })

    return value || path
  }

  return (
    <I18nContext.Provider value={{ locale, changeLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useContext(I18nContext)