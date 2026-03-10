'use client'

import Image from "next/image";
import Slider from "@/app/components/shared/Slider";
import Button from "@/app/components/shared/Button";

import { useI18n } from '@/context/I18nContext'


export default function LinkMT4Section() {
    const { t } = useI18n()
    
    return <>
        <div className="bigtitle">{t('land.lm')}</div>
        
        <div className="link-box">
            <Slider auto interval={3000}>

                <div className="card">
                    <Image src="/blackwell/register/step-1.png" alt="Step 1" width={140} height={100} className="step" />
                    <span>{t('land.lm_1')}</span>

                    <div className="arrow">
                        <Image src="/blackwell/arrow.png" alt="arrow" width={100} height={100} className="arrow-img" />
                    </div>
                </div>

                <div className="card">
                    <Image src="/blackwell/register/step-2.png" alt="Step 2" width={140} height={100} className="step" />
                    <span>{t('land.lm_2')}</span>

                    <div className="arrow">
                        <Image src="/blackwell/arrow.png" alt="arrow" width={100} height={100} className="arrow-img" />
                    </div>
                </div>

                <div className="card">
                    <Image src="/blackwell/register/step-3.png" alt="Step 3" width={140} height={100} className="step" />
                    <span>{t('land.lm_3')}</span>

                    <div className="arrow">
                        <Image src="/blackwell/arrow.png" alt="arrow" width={100} height={100} className="arrow-img" />
                    </div>
                </div>

                <div className="card">
                    <Image src="/blackwell/register/step-4.png" alt="Step 4" width={140} height={100} className="step" />
                    <span>{t('land.lm_4')}</span>

                    <div className="arrow">
                        <Image src="/blackwell/arrow.png" alt="arrow" width={100} height={100} className="arrow-img" />
                    </div>
                </div>

                <div className="card">
                    <Image src="/blackwell/register/step-5.png" alt="Step 5" width={140} height={100} className="step" />
                    <span>{t('land.lm_5')}</span>

                    <div className="arrow">
                        <Image src="/blackwell/arrow.png" alt="arrow" width={100} height={100} className="arrow-img" />
                    </div>
                </div>

                <div className="card">
                    <Image src="/blackwell/register/step-6.png" alt="Step 6" width={140} height={100} className="step" />
                    <span>{t('land.lm_6')}</span>

                    <div className="arrow">
                        <Image src="/blackwell/arrow.png" alt="arrow" width={100} height={100} className="arrow-img" />
                    </div>
                </div>

                <div className="card">
                    <Image src="/blackwell/register/step-7.png" alt="Step 7" width={140} height={100} className="step" />
                    <span>{t('land.lm_7')}</span>

                    <div className="arrow">
                        <Image src="/blackwell/arrow.png" alt="arrow" width={100} height={100} className="arrow-img" />
                    </div>

                </div>
                <div className="card">
                    <Image src="/blackwell/register/step-8.png" alt="Step 7" width={140} height={100} className="step" />
                    <span>{t('land.lm_8')}</span>

                </div>

            </Slider>
        </div>
        <div className="text-center mt-[2rem]">
            <Button variant="primary">{t('button.register_now')}</Button>

        </div>
    </>
}