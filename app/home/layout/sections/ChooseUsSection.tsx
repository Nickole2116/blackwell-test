'use client'

import Image from "next/image";
import Button from "@/app/components/shared/Button";
import { useI18n } from '@/context/I18nContext'


export default function ChooseUsSection() {
    const { t } = useI18n()

    return <>
        <Image src="/blackwell/bg-2.png" alt="bg-1" width={800} height={800} className="bg-2" />
        <div className="bigtitle">Why Choose Us?</div>
        
        <div className="choose-box">
            <div className="list">
                <Image src="/blackwell/choose/icon-1.png" alt="App Store" width={100} height={100} className="icon" />
                <b>Regulated</b>
                <p>The copy trading platform is regulated. Our technology partner is regulated. And so are we, as a brokerage. We operate under strict compliance because your trust and peace of mind are everything.</p>
            </div>
            <div className="list">
                <Image src="/blackwell/choose/icon-2.png" alt="App Store" width={100} height={100} className="icon" />
                <b>0 Commissions</b>
                <p>When investing, the small margins matter. Blackwell Invest offers 0 commissions investing, and 0 cost to install our app.</p>
            </div>
            <div className="list">
                <Image src="/blackwell/choose/icon-3.png" alt="App Store" width={100} height={100} className="icon" />
                <b>User-friendly</b>
                <p>With an intuitive interface, easy trade execution, and hassle-free management, copying top traders has never been simpler. Trade smarter, not harder!</p>
            </div>
            <div className="list">
                <Image src="/blackwell/choose/icon-4.png" alt="App Store" width={100} height={100} className="icon" />
                <b>Tier 1 liquidity</b>
                <p>Blackwell Invest sources the best liquidity to provide a deep product range and broad market access. Fast order execution and transparent pricing.</p>
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
            <Button variant="primary">Register Now</Button>

        </div>
    </>
}