import BuyerAlibabaStepCard from "../../components/BuyerAlibabaStepCard";
import BuyerAlibabaStepTitle from "../../components/BuyerAlibabaStepTitle";
import BuyerTradeAssurance from "../../components/BuyerTradeAssurance";

const cardContent = [
  {
    id: 1,
    to: "",
    spanText: "Use the search bar",
    text: "Enter product or seller keywords, then narrow your choices from there.",
  },
  {
    id: 2,
    to: "",
    spanText: "Go to pavilions.",
    text: "Check out themed pavilions ranging from top-ranking products to a specific country’s exports.",
  },
  {
    id: 3,
    to: "",
    spanText: "Send a Request for Quotation (RFQ).",
    text: "Specify what you’re looking for and sellers will bid for your business.",
  },
];
const secondCard = [
  {
    id: 1,
    to: "",
    spanText: "Ask the right questions.",
    text: "Assess sellers by looking at the information in their profiles. Dig deeper by sending a message.",
  },
  {
    id: 2,
    to: "",
    spanText: "Look at their ba",
    text: "Badges on a seller’s profile help you know what steps they took to prove they are a trusted partner.",
  },
  {
    id: 3,
    to: "",
    spanText: "Gold supplier:",
    text: "Alibaba.com members that have been verified as businesses with commercial or industrial capabilities.",
  },
  {
    id: 4,
    to: "",
    spanText: "Verified Seller:",
    text: "A Gold Supplier whose company profile, management, production capabilities, product, and process have been assessed, certified, and/or inspected by third-party institutions.",
  },
  {
    id: 5,
    to: "",
    spanText: "Trade Assurance Supplier:",
    text: "Gold suppliers  who accept payment through Alibaba.com, enabling Alibaba.com payment and order protection.",
  },
];
const BuyerAlibabaStepOne = () => {
  return (
    <>
      <div
        className="w-full p-6 md:p-15 flex justify-center items-center"
        id="findProducts"
      >
        <div className="w-full flex flex-col gap-10">
          <BuyerAlibabaStepTitle
            title="Find products and sellers"
            description={`With over 150,000 manufacturers, wholesalers, and distributors selling on the platform, you can find or create anything you’re looking for. You can work with sellers to create customized products , or find finished products that already exist that are Ready to Ship from the facility within 15 days of when you place the order.`}
            step={1}
          />
          <BuyerAlibabaStepCard
            content={cardContent}
            image="image"
            subtitle="How to find sellers"
          />
          <BuyerAlibabaStepCard
            content={secondCard}
            image="image"
            subtitle="How to assess sellers"
            flexStyle="lg:flex-row-reverse!"
          />
          <BuyerTradeAssurance
            description="When you’re searching for products or sellers, you can filter for Trade Assurance. This way you’ll know your order is protected."
            image="image"
            title="Alibaba.com Trade Assurance tip"
          />
        </div>
      </div>
    </>
  );
};

export default BuyerAlibabaStepOne;
