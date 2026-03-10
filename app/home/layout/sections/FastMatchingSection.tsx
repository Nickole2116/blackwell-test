'use client'

import Image from "next/image";
import { useI18n } from '@/context/I18nContext'


export default function FastMatchingSection() {
    const { t } = useI18n()

    return <>
        <div className="bigtitle">{t('land.fm_title')}</div>
        <div className="bigsubtitle">
            {t('land.fm_subtitle')}
        </div>
        <div className="fast-container">
            <div className="phone">
                <video
                    className="phone"
                    width={200}
                    height={200}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/blackwell/mobile-video.mov" type="video/mp4" />
                </video>
            </div>
            

            <div className="content">
                <ul>
                    <li>{t('land.fm_1')}</li>
                    <li>{t('land.fm_2')}</li>
                    <li>{t('land.fm_3')}</li>
                    <li>{t('land.fm_4')}</li>
                    <li>{t('land.fm_5')}</li>
                    <li>{t('land.fm_6')}</li>
                </ul>

            </div>
        </div>
    </>
}