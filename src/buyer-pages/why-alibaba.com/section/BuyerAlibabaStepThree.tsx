import BuyerAlibabaStepCard from "../../components/BuyerAlibabaStepCard";
import BuyerAlibabaStepTitle from "../../components/BuyerAlibabaStepTitle";
import BuyerTradeAssurance from "../../components/BuyerTradeAssurance";

const cardContent = [
  {
    id: 1,
    to: "",
    spanText: "Product quality.",
    text: "Ensure your product is made according to your specifications.",
  },
  {
    id: 2,
    to: "",
    spanText: "On-time shipping.",
    text: "Have your product shipped by the date you",
  },
  {
    id: 3,
    to: "",
    spanText: "Payment security.",
    text: "Trust that your payment is secure and your seller will send you your order.",
  },
  {
    id: 4,
    to: "",
    spanText: "Dispute resolution.",
    text: "If you’re not satisfied with your order, file a dispute and Alibaba.com will mediate.",
  },
];
const secondCard = [
  {
    id: 1,
    to: "",
    spanText: "Detailed purchase orders.",
    text: "Create a purchase order (PO) detailing all aspects of the order and shipping.",
  },
  {
    id: 2,
    to: "",
    spanText: "Request a sample.",
    text: "Ensure the product meets your specifications before placing the full order.",
  },
  {
    id: 3,
    to: "",
    spanText: "Production monitoring and inspection services.",
    text: "A local team will visit the seller’s location to ensure everything runs smoothly.",
  },
  {
    id: 4,
    to: "",
    spanText: "Intellectual Property (IP) protection.",
    text: "The security and privacy of our customers and our merchants is a top priority for Alibaba.com, and we pride ourselves as the global leader when it comes to IP protection.",
  },
];
const BuyerAlibabaStepThree = () => {
  return (
    <>
      <div
        className="w-full p-6 md:p-15 flex justify-center items-center"
        id="placeOrder"
      >
        <div className="w-full flex flex-col gap-10">
          <BuyerAlibabaStepTitle
            title="Place and protect your order"
            description={`When possible, place orders using Alibaba.com Trade Assurance for order protection. Look for the Trade Assurance iconon product listing pages, or ask your seller if it’s offered. Adhere to all Trade Assurance rules , including messaging within the Message Center instead of third-party apps`}
            step={3}
          />
          <BuyerAlibabaStepCard
            content={cardContent}
            image="image"
            subtitle="Alibaba.com Trade Assurance protections"
          />
          <BuyerAlibabaStepCard
            content={secondCard}
            image="image"
            subtitle="Additional ways you can protect your order"
            flexStyle="lg:flex-row-reverse "
          />
          <BuyerTradeAssurance
            description="Always ask if your seller offers Trade Assurance to ensure your order is protected and payment will be secure."
            image="image"
            title="Alibaba.com Trade Assurance tip"
          />
        </div>
      </div>
    </>
  );
};

export default BuyerAlibabaStepThree;
