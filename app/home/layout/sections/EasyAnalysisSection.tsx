'use client'

import Image from "next/image";


export default function EasyAnalysisSection() {
    return <>
        <div className="bigtitle">Easy Analysis</div>
        <div className="bigsubtitle">
            Instant clarity on the Masters’ profile. Get a snapshot of their trade history, profitability, risk, and portfolio all in one place.
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