'use client'
import { ReactNode, useState, useEffect } from "react"
import { useI18n } from '@/context/I18nContext'

import Image from "next/image";
import Button from "@/app/components/shared/Button";


export default function TradeProSection() {
    const { t } = useI18n()

    const [sec, setSec] = useState(0)
    const steps = [
        {
          title: t('land.tp_1'),
          img: '/blackwell/guide/guide-1.png'
        },
        {
          title: t('land.tp_2'),
          img: '/blackwell/guide/guide-2.png'
        },
        {
          title: t('land.tp_3'),
          img: '/blackwell/guide/guide-3.png'
        },
        {
          title: t('land.tp_4'),
          img: '/blackwell/guide/guide-4.png'
        }
      ]

    return <>
        <Image src="/blackwell/bg-1.png" alt="bg-1" width={800} height={800} className="bg-1" />

        <div className="bigtitle">{t('land.tp')}</div>

        <div className="trade-box">

            {/* options */}
            <div className="options">
                {steps.map((step, i) => (
                <div
                    key={i}
                    className={`option ${sec === i ? "bolded" : ""}`}
                    onClick={() => setSec(i)}
                >
                    <h2>{i + 1}</h2>
                    <span>{step.title}</span>

                    <div className="mob-content onlymobflex">
                    
                        <div className="s">
                                <Image
                                src={step.img}
                                alt={`guide-${i}`}
                                width={200}
                                height={200}
                                className="img"
                                />
                            
                        </div>
                    </div>
                </div>
                ))}
            </div>

            {/* content */}
            {steps.map((step, i) => (
                <div
                    key={i}
                    className={`content onlywebflex ${sec === i ? "bolded" : ""}`}
                >
                <div className="s">
                    <Image
                    src={step.img}
                    alt={`guide-${i}`}
                    width={200}
                    height={200}
                    className="img"
                    />
                </div>
                </div>
            ))}

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