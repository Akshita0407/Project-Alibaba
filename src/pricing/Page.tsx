import CompareSection from "./sections/CompareSection";
import DetailsSections from "./sections/DetailsSections";
import FaqSections from "./sections/FaqSection";
import GrowBusiness from "./sections/GrowBusiness";
import SBanner from "./sections/SBanner";
import { SubscriptionPage } from "./sections/SubscriptionPage";

const PricingPage = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <SBanner />
      <SubscriptionPage />
      <CompareSection />
      <DetailsSections />
      <FaqSections />
      <GrowBusiness />
    </div>
  );
};

export default PricingPage;
