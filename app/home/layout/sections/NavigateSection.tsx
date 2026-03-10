'use client'
import { useState } from "react"
import Image from "next/image";
import { useI18n } from '@/context/I18nContext'


export default function NavigateSection() {
    const { t } = useI18n()

    const [active, setActive] = useState(1)
    const items = [
        {
            title: t('land.na_1'),
            text: t('land.na_1_d'),
            icon: "/blackwell/navigate/icon1.png",
            iconActive: "/blackwell/navigate/icon1-blue.png",
            img: "/blackwell/reason/reason-1.png"
        },
        {
            title: t('land.na_2'),
            text: t('land.na_2_d'),
            icon: "/blackwell/navigate/icon2.png",
            iconActive: "/blackwell/navigate/icon2-blue.png",
            img: "/blackwell/reason/reason-2.png"
        },
        {
            title: t('land.na_3'),
            text: t('land.na_3_d'),
            icon: "/blackwell/navigate/icon3.png",
            iconActive: "/blackwell/navigate/icon3-blue.png",
            img: "/blackwell/reason/reason-3.png"
        },
        {
            title: t('land.na_4'),
            text: t('land.na_4_d'),
            icon: "/blackwell/navigate/icon4.png",
            iconActive: "/blackwell/navigate/icon4-blue.png",
            img: "/blackwell/reason/reason-4.png"
        },
        {
            title: t('land.na_5'),
            text: t('land.na_5_d'),
            icon: "/blackwell/navigate/icon5.png",
            iconActive: "/blackwell/navigate/icon5-blue.png",
            img: "/blackwell/reason/reason-5.png"
        }
    ]

    return <>
        <div className="bigtitle">{t('land.na')}</div>
        
        <div className="navigator-box">

            {/* NAV ICONS */}
            <div className="nav">
                {items.map((item, i) => (
                <div
                    key={i}
                    className={`option ${active === i ? "bolded" : ""}`}
                    onClick={() => setActive(i)}
                >
                    <Image
                    src={item.icon}
                    alt="icon"
                    width={200}
                    height={200}
                    className="icon"
                    />

                    <Image
                    src={item.iconActive}
                    alt="icon"
                    width={200}
                    height={200}
                    className="icon-bolded"
                    />
                </div>
                ))}
            </div>

            {/* CONTENT */}
            <div className="content">
                {items.map((item, i) => (
                <div
                    key={i}
                    className={`para ${active === i ? "bolded" : ""}`}
                >
                    <div className="con">
                    <div className="title">
                        {item.title}
                    </div>

                    <div className="paragraph">
                        {item.text}
                    </div>
                    </div>

                    <Image
                    src={item.img}
                    alt="thumb"
                    width={330}
                    height={300}
                    className="thumb"
                    />
                </div>
                ))}
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
    </>
}