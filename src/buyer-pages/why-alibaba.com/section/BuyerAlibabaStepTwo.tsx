import BuyerAlibabaStepCard from "../../components/BuyerAlibabaStepCard";
import BuyerAlibabaStepTitle from "../../components/BuyerAlibabaStepTitle";
import BuyerTradeAssurance from "../../components/BuyerTradeAssurance";

const cardContent = [
  {
    id: 1,
    to: "",
    spanText: "Write a detailed message.",
    text: "Start an inquiry by clicking “Contact Seller” on the product detail page.",
  },
  {
    id: 2,
    to: "",
    spanText: "Keep track of conversations.",
    text: "Find all your messages within “My Alibaba” in the Message Center.",
  },
  {
    id: 3,
    to: "",
    spanText: "Use the mobile app.",
    text: "Simplify communication with real-time translation and video chat features to simplify communication.",
  },
  {
    id: 4,
    to: "",
    spanText: "Attend online trade shows.",
    text: "Save time and money by attending category-specific digital events to network and assess industry trends.",
  },
];

const BuyerAlibabaStepTwo = () => {
  return (
    <>
      <div
        className="w-full p-6 md:p-15 flex justify-center items-center"
        id="ConnectWithSellers"
      >
        <div className="w-full flex flex-col gap-10">
          <BuyerAlibabaStepTitle
            title="Connect with sellers"
            description={`Unlike other platforms, you can speak one-on-one with sellers on Alibaba.com to customize your order, negotiate prices or learn more about their business. Once you’ve created a short list of sellers, it’s time to reach out.`}
            step={2}
          />
          <BuyerAlibabaStepCard
            content={cardContent}
            image="image"
            subtitle="How to connect with sellers"
          />

          <BuyerTradeAssurance
            description="Keep 100% of your communication within the Message Center - otherwise your Trade Assurance protection may not be upheld."
            image="image"
            title="Alibaba.com Trade Assurance tip"
          />
        </div>
      </div>
    </>
  );
};

export default BuyerAlibabaStepTwo;
