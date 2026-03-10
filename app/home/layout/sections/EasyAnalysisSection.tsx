'use client'

import Image from "next/image";
import { useI18n } from '@/context/I18nContext'


export default function EasyAnalysisSection() {
    const { t } = useI18n()

    return <>
        <div className="bigtitle">{t('land.ea')}</div>
        <div className="bigsubtitle">
            {t('land.ea_subtitle')}
        </div>

        <div className="analysis-box">
            <Image src="/blackwell/mobile-2.png" alt="bg" width={300} height={300} className="bg" />

            <div className="subpop">
                <Image src="/blackwell/analysis/function-1.png" alt="c1" width={200} height={200} className="c1" />
                <Image src="/blackwell/analysis/function-2.png" alt="c2" width={200} height={200} className="c2" />
                <Image src="/blackwell/analysis/function-3.png" alt="c3" width={300} height={300} className="c3" />
                <Image src="/blackwell/analysis/function-4.png" alt="c4" width={300} height={300} className="c4" />
                <Image src="/blackwell/analysis/function-5.png" alt="c5" width={300} height={300} className="c5" />

            </div>
        </div>
    </>
}