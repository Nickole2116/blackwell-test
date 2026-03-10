'use client'

import Image from "next/image";
import Button from "@/app/components/shared/Button";


export default function CopyTradeSection() {
    return <>
        <div className="copytrade-container">
            <Image src="/blackwell/hand.png" alt="Hand" width={500} height={500} className="hand" />

            <div className="copytrade-content">
                <h2 className="title">Copy Trading</h2>
                <h4 className="subtitle">with Blackwell Invest</h4>
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
                    <div className="title">Choose & Trade</div>
                    <div className="subtitle">Ready-To-Go Strategies</div>
                    <p className="paragraph">
                        Browse and copy hundreds of investment strategies developed by master traders! Whether you are a pro or beginner, you can now trade quicker and more confidently.
                    </p>
                    <div className="brands">
                        <div className="brand">Forex</div>
                        <div className="brand">Precious Metals</div>
                        <div className="brand">Oil</div>
                        <div className="brand">Indices</div>
                    </div>
                    <Button variant="primary">Register Now</Button>
                    <small className="block">When you invest, your capital is at risk. Be prudent.</small>
                </div>

            </div>
        </div>
    </>
}