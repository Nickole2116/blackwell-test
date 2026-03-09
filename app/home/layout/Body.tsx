import ChooseUsSection from "./sections/ChooseUsSection";
import CopyTradeSection from "./sections/CopyTradeSection";
import EasyAnalysisSection from "./sections/EasyAnalysisSection";
import EnquireSection from "./sections/EnquireSection";
import FastMatchingSection from "./sections/FastMatchingSection";
import LinkMT4Section from "./sections/LinkMT4Section";
import NavigateSection from "./sections/NavigateSection";
import TradeProSection from "./sections/TradeProSection";
import LazySection from "@/app/components/shared/LazySection";

export default function Body() {

    return <>
        <div className="body">
            {/** CopyTrade */}
            <section className="copytrade-section">
                <CopyTradeSection />
            </section>

            {/** Fast Matching */}
            <section className="fast-section">
            <LazySection>
                <FastMatchingSection />
            </LazySection>
            </section>
            
            

            {/** Easy Analysis */}
            <section className="easy-section">
                <EasyAnalysisSection />
            </section>

            {/** Trade Like a Pro in Minutes */}
            <section className="trade-section">
                <TradeProSection />
            </section>

            {/** Link MT4 Account */}
            <section className="mt4-section">
                <LinkMT4Section />
            </section>

            {/** Why Choose Us? */}
            <section className="why-section">
                <ChooseUsSection />
            </section>

            {/** Navigate Our App in 5 Clicks */}
            <section className="navigate-section">
                <NavigateSection />
            </section>

            {/** Enquire Now */}
            <section className="enquire-section">
                <EnquireSection />
            </section>
        </div>
        
    </>
}