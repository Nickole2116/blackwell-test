'use client'

import Image from "next/image";


export default function FastMatchingSection() {
    return <>
        <div className="bigtitle">Fast Matching</div>
        <div className="bigsubtitle">
            Zero in on your ideal Master effortlessly. Sort by performance and drawdown levels or discover opportunities from new signals with our smart filters. Still can’t decide? Simply head over to Spotlight for quality signals curated by us.
        </div>
        <div className="fast-container">
            <div className="phone">
                <video
                    className="phone"
                    width={200}
                    height={200}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/blackwell/mobile-video.mov" type="video/mp4" />
                </video>
            </div>
            

            <div className="content">
                <ul>
                    <li>Spotlight</li>
                    <li>Top Strategies</li>
                    <li>Low Drawdown</li>
                    <li>Medium Drawdown</li>
                    <li>High Drawdown</li>
                    <li>New Strategies</li>
                </ul>

            </div>
        </div>
    </>
}