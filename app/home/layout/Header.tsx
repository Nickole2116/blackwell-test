'use client'

import Image from "next/image";
import Icon from "@mdi/react";
import Button from "@/app/components/shared/Button";
import Marquee from "@/app/components/shared/Marquee";

import { mdiTranslateVariant, mdiAccount } from "@mdi/js"
import { useEffect, useState } from "react"
import { useI18n } from '@/context/I18nContext'
import { useAuthStore } from "@/store/authStore"


type HeaderProps = {
    setOpenRegister: (value: boolean) => void,
    setOpenLogin: (value: boolean) => void
    setOpenLanguage: (value: boolean) => void
}
  

export default function Header({
    setOpenRegister,
    setOpenLogin,
    setOpenLanguage
  }: HeaderProps) {

    const { t } = useI18n()
    const user = useAuthStore((state) => state.user)
    const logout = useAuthStore((state) => state.logout)


    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {

        const target = new Date("2026-03-12T13:00:00+08:00").getTime()
      
        const interval = setInterval(() => {
      
          const now = new Date().getTime()
          const diff = target - now
      
          if (diff <= 0) {
            clearInterval(interval)
            return
          }
      
          const days = Math.floor(diff / (1000 * 60 * 60 * 24))
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
          const minutes = Math.floor((diff / (1000 * 60)) % 60)
          const seconds = Math.floor((diff / 1000) % 60)
      
          setTime({
            days,
            hours,
            minutes,
            seconds
          })
      
        }, 1000)
      
        return () => clearInterval(interval)
      
    }, [])

    return <>
        <nav className="fixed top-0 left-0 w-full z-50 head">
            <div className="container mx-auto flex items-center justify-between">
                    <div className="left-side">
                        <Image src="/blackwell/blackwelllogo3-1.png" alt="Logo" className="logo" width={150} height={100} />
                    </div>
                    <div className="center-side">
                        <div className="countdown-label">
                            <span className="color-subtext">{t('header.promotion')} <br/>{t('header.ends_in')}</span>
                        </div>
                        <div className="countdown">
                            <div className="countdown-item">
                                <span className="value">{String(time.days).padStart(2,'0')}</span>
                                <span className="label">{t('header.days')}</span>
                            </div>
                            <div className="countdown-separator animate-blink">
                                :
                            </div>
                            <div className="countdown-item">
                                <span className="value">{String(time.hours).padStart(2,'0')}</span>
                                <span className="label">{t('header.hours')}</span>
                            </div>
                            <div className="countdown-separator animate-blink">
                                :
                            </div>
                            <div className="countdown-item">
                                <span className="value">{String(time.minutes).padStart(2,'0')}</span>
                                <span className="label">{t('header.minutes')}</span>
                            </div>
                            <div className="countdown-separator animate-blink">
                                :
                            </div>
                            <div className="countdown-item">
                                <span className="value">{String(time.seconds).padStart(2,'0')}</span>
                                <span className="label">{t('header.seconds')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-side onlywebflex">
                        
                        {user ? <>
                            <Button variant="icon" popover={user.email}>
                                <Icon path={mdiAccount} size={1} className="thumbnail" />
                                <span className="ellipsify" style={{ maxWidth: '80px' }}>{user.email}</span>
                            </Button>
                            <Button variant="gradient" popover="Sign Up Now" onClick={() => logout()}>
                                {t('button.logout')}
                            </Button>
                        
                        </> : <>
                            <Button variant="gradient" popover="Sign Up Now" onClick={() => setOpenRegister(true)}>
                                {t('button.register_now')}
                            </Button>
                            <Button variant="icon" popover="Login Here" onClick={() => setOpenLogin(true)}>
                                <Icon path={mdiAccount} size={1} className="thumbnail" />
                                <span>{t('button.login')}</span>
                            </Button>
                        </>}
                        
                        <Button variant="null" popover="Change Language Here" onClick={() => setOpenLanguage(true)}>
                            <img src="https://flagsapi.com/GB/shiny/64.png" alt="App Store" width={100} height={100} className="locate" />
                        </Button>

                    </div>
            </div>
            <div className="onlymob">
                <Marquee speed={50} pauseOnHover={true}>
                    <div className="flex gap-20 px-10 items-center">
                        <span>{t('header.promotion')} {t('header.ends_in')} {String(time.days).padStart(2,'0')} {t('header.days')} {String(time.hours).padStart(2,'0')} {t('header.hours')} {String(time.minutes).padStart(2,'0')} {t('header.minutes')}</span>
                        <span>{t('header.promotion')} {t('header.ends_in')} {String(time.days).padStart(2,'0')} {t('header.days')} {String(time.hours).padStart(2,'0')} {t('header.hours')} {String(time.minutes).padStart(2,'0')} {t('header.minutes')}</span>
                        <span>{t('header.promotion')} {t('header.ends_in')} {String(time.days).padStart(2,'0')} {t('header.days')} {String(time.hours).padStart(2,'0')} {t('header.hours')} {String(time.minutes).padStart(2,'0')} {t('header.minutes')}</span>
                        <span>
                            Browse and copy hundreds of investment strategies developed by master traders! Whether you are a pro or beginner, you can now trade quicker and more confidently.
                        </span>
                    </div>
                </Marquee>
            </div>
            
        </nav>
    </>
}