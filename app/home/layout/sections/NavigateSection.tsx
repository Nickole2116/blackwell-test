'use client'

import Image from "next/image";


export default function NavigateSection() {
    return <>
        <div className="bigtitle">Navigate Our App in 5 Clicks</div>
        
        <div className="navigator-box">
            <div className="nav">
                <div className="option">
                    <Image src="/blackwell/navigate/icon1.png" alt="icon" width={200} height={200} className="icon" />
                    <Image src="/blackwell/navigate/icon1-blue.png" alt="icon" width={200} height={200} className="icon-bolded" />
                </div>
                <div className="option bolded">
                    <Image src="/blackwell/navigate/icon2.png" alt="icon" width={200} height={200} className="icon" />
                    <Image src="/blackwell/navigate/icon2-blue.png" alt="icon" width={200} height={200} className="icon-bolded" />
                </div>
                <div className="option">
                    <Image src="/blackwell/navigate/icon3.png" alt="icon" width={200} height={200} className="icon" />
                    <Image src="/blackwell/navigate/icon3-blue.png" alt="icon" width={200} height={200} className="icon-bolded" />
                </div>
                <div className="option">
                    <Image src="/blackwell/navigate/icon4.png" alt="icon" width={200} height={200} className="icon" />
                    <Image src="/blackwell/navigate/icon4-blue.png" alt="icon" width={200} height={200} className="icon-bolded" />
                </div>
                <div className="option">
                    <Image src="/blackwell/navigate/icon5.png" alt="icon" width={200} height={200} className="icon" />
                    <Image src="/blackwell/navigate/icon5-blue.png" alt="icon" width={200} height={200} className="icon-bolded" />
                </div>
            </div>
            <div className="content">
                <div className="para bolded">
                    <div className="con">
                        <div className="title">Discover</div>
                        <div className="paragraph">
                            Explore all the investment Masters available on Blackwell Invest. Dive into their profiles and analyse their profitability at a glance.
                        </div>
                    </div>
                    <Image src="/blackwell/reason/reason-1.png" alt="icon" width={330} height={300} className="thumb" />

                </div>
                <div className="para">
                    <div className="con">
                        <div className="title">Activity</div>
                        <div className="paragraph">
                            See the past trades made by the signals you are copying from the last 30 days or track their open positions. Monitor their strategy, and make informed decisions with timely updates of the trades shaping your portfolio.
                        </div>
                    </div>
                    <Image src="/blackwell/reason/reason-2.png" alt="icon" width={330} height={300} className="thumb" />

                </div>
                
                
                <div className="para">
                    <div className="con">
                        <div className="title">Trade</div>
                        <div className="paragraph">
                            Seamlessly trade oil CFDs, indices, and currency pairs with ease. 
                        </div>
                    </div>
                    <Image src="/blackwell/reason/reason-3.png" alt="icon" width={330} height={300} className="thumb" />

                </div>
                <div className="para">
                    <div className="con">
                        <div className="title">Positions</div>
                        <div className="paragraph">
                            Easily track the status of all your trades and monitor your account metrics in real-time. 
                        </div>
                    </div>
                    <Image src="/blackwell/reason/reason-4.png" alt="icon" width={330} height={300} className="thumb" />

                </div>
                <div className="para">
                    <div className="con">
                        <div className="title">Account</div>
                        <div className="paragraph">
                            Access detailed information about your trading account, monitor copier drawdown levels, assess your profitability, and keep track of your  trade performance – all in one place!
                        </div>
                    </div>
                    <Image src="/blackwell/reason/reason-5.png" alt="icon" width={330} height={300} className="thumb" />

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
    </>
}