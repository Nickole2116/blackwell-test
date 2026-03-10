'use client'

import Image from "next/image";
import Button from "@/app/components/shared/Button";
import { useI18n } from '@/context/I18nContext'


export default function ChooseUsSection() {
    const { t } = useI18n()

    return <>
        <Image src="/blackwell/bg-2.png" alt="bg-1" width={800} height={800} className="bg-2" />
        <div className="bigtitle">{t('land.wcu')}</div>
        
        <div className="choose-box">
            <div className="list">
                <Image src="/blackwell/choose/icon-1.png" alt="App Store" width={100} height={100} className="icon" />
                <b>{t('land.wcu_1')}</b>
                <p>{t('land.wcu_1_sub')}</p>
            </div>
            <div className="list">
                <Image src="/blackwell/choose/icon-2.png" alt="App Store" width={100} height={100} className="icon" />
                <b>{t('land.wcu_2')}</b>
                <p>{t('land.wcu_2_sub')}</p>
            </div>
            <div className="list">
                <Image src="/blackwell/choose/icon-3.png" alt="App Store" width={100} height={100} className="icon" />
                <b>{t('land.wcu_3')}</b>
                <p>{t('land.wcu_3_sub')}</p>
            </div>
            <div className="list">
                <Image src="/blackwell/choose/icon-4.png" alt="App Store" width={100} height={100} className="icon" />
                <b>{t('land.wcu_4')}</b>
                <p>{t('land.wcu_4_sub')}</p>
            </div>
        </div>

        <div className="supports">
            <div className="brand">
                <Image src="/blackwell/app-store.jpg" alt="App Store" width={120} height={100} className="app-store" />
            </div>
            <div className="brand">
                <Image src="/blackwell/google-play.jpg" alt="Google Play" width={120} height={100} className="google-play" />
            </div>
        </div>

        <div className="text-center mt-[2rem]">
            <Button variant="primary">{t('button.register_now')}</Button>

        </div>
    </>
}