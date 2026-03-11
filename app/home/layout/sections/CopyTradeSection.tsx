'use client'

import Image from "next/image";
import Button from "@/app/components/shared/Button";
import { useI18n } from '@/context/I18nContext'


export default function CopyTradeSection() {
    const { t } = useI18n()

    return <>
        <div className="copytrade-container">
            <Image src="/blackwell/hand.png" alt="Hand" width={500} height={500} className="hand" />

            <div className="copytrade-content">
                <h2 className="title">{t('land.copytrade')}</h2>
                <h4 className="subtitle">{t('land.w_bi')}</h4>
                <div className="supports">
                    <div className="brand">
                        <Image src="/blackwell/app-store.jpg" alt="App Store" width={120} height={100} className="app-store" />
                    </div>
                    <div className="brand">
                        <Image src="/blackwell/google-play.jpg" alt="Google Play" width={120} height={100} className="google-play" />
                    </div>
                    <Image src="/blackwell/regular.png" alt="App Store" width={100} height={100} className="regular" />

                </div>

                {/** Seconds Section */}
                <div className="promotion">
                    <div className="title">{t('land.choose_n_trade')}</div>
                    <div className="subtitle">{t('land.readytogo_str')}</div>
                    <p className="paragraph">
                        {t('land.sub_1')}
                    </p>
                    <div className="brands">
                        <div className="brand">{t('land.forex')}</div>
                        <div className="brand">{t('land.precious_metals')}</div>
                        <div className="brand">{t('land.oil')}</div>
                        <div className="brand">{t('land.indices')}</div>
                    </div>
                    <div className="buttons">
                        <Button variant="primary">{t('button.register_now')}</Button>
                        <small className="block">{t('land.sub1_reminder')}</small>
                    </div>
                </div>

            </div>
        </div>
    </>
}