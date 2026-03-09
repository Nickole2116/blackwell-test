'use client'

import Image from "next/image";


export default function TradeProSection() {
    return <>
        <div className="bigtitle">Trade Like a Pro in Minutes</div>
        
        <div className="trade-box">
            <div className="options">
                <div className="option">
                    <h2>1</h2>
                    <span>Install our app, "Blackwell Invest"</span>
                </div>
                <div className="option bolded">
                    <h2>2</h2>
                    <span>Choose a signal Master and click "Copy"</span>
                </div>
                <div className="option">
                    <h2>3</h2>
                    <span>Set your trade size preferences</span>
                </div>
                <div className="option">
                    <h2>4</h2>
                    <span>Click "Agree and Copy"</span>
                </div>
            </div>
            <div className="content">
                <div className="s s1">
                    <Image src="/blackwell/guide/guide-1.png" alt="s1" width={200} height={200} className="img" />
                </div>
                <div className="s s2 bolded">
                    <Image src="/blackwell/guide/guide-2.png" alt="s2" width={200} height={200} className="img" />
                </div>
                <div className="s s3">
                    <Image src="/blackwell/guide/guide-3.png" alt="s3" width={200} height={200} className="img" />
                </div>
                <div className="s s4">
                    <Image src="/blackwell/guide/guide-4.png" alt="s4" width={200} height={200} className="img" />
                </div>
            </div>
        </div>

        <div className="supports">
            <div className="brand">
                <Image src="/blackwell/app-store.jpg" alt="App Store" width={100} height={100} className="app-store" />
            </div>
            <div className="brand">
                <Image src="/blackwell/google-play.jpg" alt="Google Play" width={100} height={100} className="google-play" />
            </div>
        </div>
    </>
}