import FeatureSection from "../../components/FeatureSection";
import image from "../../assets/Feature(2).png";
const FeatureOne = () => {
  const faqs = [
    {
      id: 1,
      question: "Storefront",
      answer:
        "Create a digital identity that helps you brand your business and showcase your capabilities - no design or coding required.",
    },
    {
      id: 2,
      question: "Smart product posting",
      answer:
        "Apply to try out poducts posting feature for 30 days. Get started to see what your products exhibition could look like on Alibaba.com",
    },
    {
      id: 3,
      question: "Dynamic pricing",
      answer:
        "Negotiate pricing with customers, configure ladder pricing, and set Minimum Order Quantities to optimize each individual sale.",
    },
    {
      id: 4,
      question: "API integration",
      answer:
        "Get everything you need to start building your storefront how you want it - including open-source code documentation.",
    },
  ];

  return (
    <div id="storefront" className="w-full  p-6 md:p-15 ">
      <div className=" w-full flex flex-col lg:flex-row gap-[8%] justify-center items-center">
        <div className="lg:w-[46%] w-full   lg:p-5">
          <img
            src={image}
            alt="Storefront"
            className="w-full h-auto object-contain object-center  "
          />
        </div>

        <div className="lg:w-[46%] w-full mt-4 ">
          <FeatureSection
            title="Bring your catalog online to attract more customers"
            subtitle="Storefront and catalog"
            description="A robust online product offering is fundamental to drive ecommerce sales. Set up one storefront within the Alibaba.com marketplace to reach global buyers, and optimize product listings for maximum exposure."
            faqs={faqs}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
