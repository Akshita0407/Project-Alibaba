import ProButton from "../../components/ProButton";
import { Link } from "react-router-dom";
import ProBuyerCard from "../../components/ProBuyerCard";

const content = [
  {
    id: 1,
    description:
      "Payment duration of 30 or 60 days. No extra charges.Terms are subject to the suppliers' final consideration and agreement.",
    hrefText: "View Benefit Detail",
    newCard: true,
    title: "Payment Terms",
    to: "",
  },
  {
    id: 2,
    description:
      "Fulfillment by Alibaba.com is a comprehensive suite of services to help you source products from China with greater ease and certainty. As one of the world's leading B2B ecommerce platforms, with over 20 years of experience working with sellers in China, Alibaba.com is uniquely qualified to help simplify the often complicated global procurement process. ",
    to: "",
    hrefText: "View Benefit Detail",
    newCard: true,
    title: "Alibaba.com Fulfillment Services",
  },
  {
    id: 3,
    description: "Reduce shipping costs by combining freight orders.",
    hrefText: "View Benefit Detail",
    newCard: false,
    title: "Buyer's Consolidation Service",
    to: "",
  },
  {
    id: 4,
    description:
      "A Pro Buyer badge that indicates you're part of an elite group, and as a high-value buyer, you will get better service from select suppliers.",
    hrefText: "View Benefit Detail",
    newCard: false,
    title: "Pro Buyer Badge",
    to: "",
  },
  {
    id: 5,
    description:
      "Get six US $500 coupons when you become a Pro Buyer. The coupons can be applied to Trade Assurance orders of US $20,000 or more from select suppliers.",
    hrefText: "View Benefit Detail",
    newCard: false,
    title: "US $3,000 Coupons",
    to: "",
  },
  {
    id: 6,
    description:
      "Get access to special Pro Buyer consultations, 24/7 customer service, and upgraded after-sales services. ",
    hrefText: "View Benefit Detail",
    newCard: false,
    title: "Dedicated 24/7 customer service",
    to: "",
  },
];

const ProBuyerBanner = () => {
  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center bg-[#f2cb8e] p-6 md:p-15 text-[#333333]">
      <div className="lg:w-[80%] w-full flex flex-col justify-center items-center gap-4 text-center ">
        <h3 className="lg:text-2xl text-xl font-semibold">
          Alibaba.com Pro Buyer
        </h3>
        <h1 className="lg:text-[36px] text-2xl font-bold leading-snug">
          Earn US $500 OFF US $20,000 Order
        </h1>
        <p className="lg:text-[20px] text-[16px]">
          The Alibaba.com Pro Buyer membership provides your business with
          exclusive benefits, including a USD 500 coupon, 24/7 customer service
          and access to top-level suppliers.
        </p>
        <ProButton buttonText="Upgrade to" image={true} />
        <Link to="">
          <p className="lg:text-[14px] text-[12px]">Terms and conditions</p>
        </Link>
      </div>
      {/*----*/}
      <div className="w-full flex flex-col gap-5 justify-center items-center">
        <h2 className="w-full lg:text-3xl text-xl flex justify-start ">
          Featured Benefits
        </h2>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cos-1 gap-5 mb-4">
          {content.map((c) => (
            <div key={c.id}>
              <ProBuyerCard {...c} />
            </div>
          ))}
        </div>
        <ProButton buttonText="Upgrade to Get All" />
      </div>
    </div>
  );
};

export default ProBuyerBanner;
