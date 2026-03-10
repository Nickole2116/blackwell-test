'use client'

import Image from "next/image";
import Slider from "@/app/components/shared/Slider";
import Button from "@/app/components/shared/Button";



export default function LinkMT4Section() {
    const slides = [
        {
          id: 1,
          image: '/images/slide1.jpg',
          title: 'Slide 1'
        },
        {
          id: 2,
          image: '/images/slide2.jpg',
          title: 'Slide 2'
        },
        {
          id: 3,
          image: '/images/slide3.jpg',
          title: 'Slide 3'
        }
    ]
    return <>
        <div className="bigtitle">How to Link MT4 Account</div>
        
        <div className="link-box">
            <Slider auto interval={3000}>

                <div className="card">
                    <Image src="/blackwell/register/step-1.png" alt="Step 1" width={140} height={100} className="step" />
                    <span>Install our app, “Blackwell Invest”</span>

                    <div className="arrow">
                        <Image src="/blackwell/arrow.png" alt="arrow" width={100} height={100} className="arrow-img" />
                    </div>
                </div>

                <div className="card">
                    <Image src="/blackwell/register/step-2.png" alt="Step 2" width={140} height={100} className="step" />
                    <span>Login OR create a new account</span>

                    <div className="arrow">
                        <Image src="/blackwell/arrow.png" alt="arrow" width={100} height={100} className="arrow-img" />
                    </div>
                </div>

                <div className="card">
                    <Image src="/blackwell/register/step-3.png" alt="Step 3" width={140} height={100} className="step" />
                    <span>Click “Account”</span>

                    <div className="arrow">
                        <Image src="/blackwell/arrow.png" alt="arrow" width={100} height={100} className="arrow-img" />
                    </div>
                </div>

                <div className="card">
                    <Image src="/blackwell/register/step-4.png" alt="Step 4" width={140} height={100} className="step" />
                    <span>Click “Link an account”</span>

                    <div className="arrow">
                        <Image src="/blackwell/arrow.png" alt="arrow" width={100} height={100} className="arrow-img" />
                    </div>
                </div>

                <div className="card">
                    <Image src="/blackwell/register/step-5.png" alt="Step 5" width={140} height={100} className="step" />
                    <span>Select “BlackwellGlobalAsia-Live” server</span>

                    <div className="arrow">
                        <Image src="/blackwell/arrow.png" alt="arrow" width={100} height={100} className="arrow-img" />
                    </div>
                </div>

                <div className="card">
                    <Image src="/blackwell/register/step-6.png" alt="Step 6" width={140} height={100} className="step" />
                    <span>Fill in your Blackwell Global trading account OR create a new account</span>

                    <div className="arrow">
                        <Image src="/blackwell/arrow.png" alt="arrow" width={100} height={100} className="arrow-img" />
                    </div>
                </div>

                <div className="card">
                    <Image src="/blackwell/register/step-7.png" alt="Step 7" width={140} height={100} className="step" />
                    <span>Click “Copy Trades”</span>

                </div>
                <div className="card">
                    <Image src="/blackwell/register/step-8.png" alt="Step 7" width={140} height={100} className="step" />
                    <span>Click “Done”</span>

                </div>

            </Slider>
        </div>
        <div className="text-center mt-[2rem]">
            <Button variant="primary">Register Now</Button>

        </div>
    </>
}