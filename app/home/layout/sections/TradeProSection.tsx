'use client'

import Image from "next/image";
import Button from "@/app/components/shared/Button";


export default function TradeProSection() {
    return <>
        <Image src="/blackwell/bg-1.png" alt="bg-1" width={800} height={800} className="bg-1" />

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
                <div className="s">
                    <Image src="/blackwell/guide/guide-1.png" alt="s1" width={200} height={200} className="img" />
                </div>
            </div>
            <div className="content bolded">
                <div className="s">
                    <Image src="/blackwell/guide/guide-2.png" alt="s1" width={200} height={200} className="img" />
                </div>
            </div>
            <div className="content">
                <div className="s">
                    <Image src="/blackwell/guide/guide-3.png" alt="s1" width={200} height={200} className="img" />
                </div>
            </div>
            <div className="content">
                <div className="s">
                    <Image src="/blackwell/guide/guide-4.png" alt="s1" width={200} height={200} className="img" />
                </div>
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