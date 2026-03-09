'use client'

import Image from "next/image";
import Button from "@/app/components/shared/Button";
import { useI18n } from '@/context/I18nContext'


export default function ChooseUsSection() {
    const { t } = useI18n()

    return <>
        <div className="bigtitle">Why Choose Us?</div>
        
        <div className="choose-box">
            <div className="list">
                <Image src="/blackwell/choose/icon-1.png" alt="App Store" width={100} height={100} className="icon" />
                <b>Regulated</b>
                <p>The copy trading platform is regulated. Our technology partner is regulated. And so are we, as a brokerage. We operate under strict compliance for your peace of mind.</p>
            </div>
            <div className="list">
                <Image src="/blackwell/choose/icon-2.png" alt="App Store" width={100} height={100} className="icon" />
                <b>0 Commissions</b>
                <p>When investing, the small margins matter. Blackwell Invest offers 0 commisions investing, and 0 cost to install our app.</p>
            </div>
            <div className="list">
                <Image src="/blackwell/choose/icon-3.png" alt="App Store" width={100} height={100} className="icon" />
                <b>User friendly</b>
                <p>With an intuitive interface, easy trade execution, and hassle-free management, copying top traders has never been simpler. Trade smarter, not harder!</p>
            </div>
            <div className="list">
                <Image src="/blackwell/choose/icon-4.png" alt="App Store" width={100} height={100} className="icon" />
                <b>Tier 1 liquidity</b>
                <p>Blackwell invest sources the best liquidity to provide range and broad market access. Fast ordr execution and transparent pricing.</p>
            </div>
        </div>

        <div className="text-center">
            <Button variant="primary">{t('button.register_now')}</Button>

        </div>
    </>
}