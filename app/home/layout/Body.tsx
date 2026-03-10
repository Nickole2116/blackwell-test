'use client'

import ChooseUsSection from "./sections/ChooseUsSection";
import CopyTradeSection from "./sections/CopyTradeSection";
import EasyAnalysisSection from "./sections/EasyAnalysisSection";
import EnquireSection from "./sections/EnquireSection";
import FastMatchingSection from "./sections/FastMatchingSection";
import LinkMT4Section from "./sections/LinkMT4Section";
import NavigateSection from "./sections/NavigateSection";
import TradeProSection from "./sections/TradeProSection";
import LazySection from "@/app/components/shared/LazySection";
import { useAuthStore } from "@/store/authStore"


export default function Body() {
    const user = useAuthStore((state) => state.user)
    if (user) {
        console.log("User logged in:", user)
      } else {
        console.log("User not logged in")
      }

    return <>
        <div className="body">
            {/** CopyTrade */}
            <LazySection className="fade-section">
            <section className="copytrade-section">
                
                <CopyTradeSection />
                
            </section>
            </LazySection>

            {/** Fast Matching */}
            <LazySection className="fade-section">
                <section className="fast-section">
                
                    <FastMatchingSection />
                
                </section>
            </LazySection>
            
            

            {/** Easy Analysis */}
            <LazySection className="fade-section">
                <section className="easy-section">
                    <EasyAnalysisSection />
                </section>
            </LazySection>
            

            {/** Trade Like a Pro in Minutes */}
            <LazySection className="fade-section">
                <section className="trade-section">
                    <TradeProSection />
                </section>
            </LazySection>
            

            {/** Link MT4 Account */}
            <LazySection className="fade-section">
                <section className="mt4-section">
                    <LinkMT4Section />
                </section>
            </LazySection>
            

            {/** Why Choose Us? */}
            <LazySection className="fade-section">
                <section className="why-section">
                    <ChooseUsSection />
                </section>
            </LazySection>
            

            {/** Navigate Our App in 5 Clicks */}
            <LazySection className="fade-section">
            <section className="navigate-section">
                <NavigateSection />
            </section>
            </LazySection>
            

            {/** Enquire Now */}
            <section className="enquire-section">
                <EnquireSection />
            </section>
        </div>

        
        
    </>
}