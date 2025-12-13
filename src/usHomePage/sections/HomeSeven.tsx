import { FaRegCheckCircle } from "react-icons/fa";

const content = [
  { id: 1, number: 1, text: "Select an Alibaba.com seller plan" },
  { id: 2, number: 2, text: "Complete payment online" },
  { id: 3, number: 3, text: "Submit business verification form" },
];

interface SelectPlan {
  id: number;
  planType: string;
  price: string;
  billing: string;
  feature: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}
const plans: SelectPlan[] = [
  {
    id: 1,
    planType: "Standard",
    price: "299",
    billing: "billed quarterly",
    feature: "Scale your business with all features",
    features: [
      "Unlimited product listing",
      "20 product showcases",
      "40 responses to RFQs / month",
      "Business verification support",
      "60 days with Advanced Start Service",
      "Dedicated customer support",
    ],
    isPopular: true,
    buttonText: "Select plan",
  },
  {
    id: 2,
    planType: "Basic",
    price: "199",
    billing: "billed quarterly",
    feature: "Start your online selling with ease",
    features: [
      "Unlimited product listing",
      "10 product showcases",
      "20 responses to RFQs / month",
      "Business verification support",
    ],
    isPopular: false,
    buttonText: "Select plan",
  },
];

const HomeSeven = () => {
  return (
    <div
      className="w-full p-6 md:p-15 flex justify-center items-center 
      bg-[linear-gradient(180deg,rgba(2,42,167,0.23)_0%,rgba(0,119,252,0)_91%)]"
    >
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <div className="w-full gap-3 flex flex-col justify-center items-center">
          <h2 className="lg:text-5xl text-2xl font-bold leading-none text-[#1850c2]">
            Get started in 3 easy steps
          </h2>
          <p className="text-xs lg:text-xl ">
            Choose the Alibaba.com seller plan that's best for you
          </p>
        </div>
        <div className=" flex lg:w-[80%] w-full lg:flex-row flex-col gap-3 justify-between items-center my-5">
          {content.map((c) => (
            <div
              key={c.id}
              className=" w-full flex flex-row gap-2  items-center"
            >
              <div className="w-10 h-10 border-2 border-[#1850c2] bg-white flex justify-center items-center rounded-full text-[#1850c2] text-xl">
                {c.number}
              </div>
              <p className="text-[14px] lg-text-[16px]">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-lg shadow-md overflow-hidden relative"
            >
              {plan.isPopular ? (
                <div className="bg-blue-600 h-10 text-white text-center py-2 text-sm font-semibold">
                  Most popular
                </div>
              ) : (
                <div className="bg-text-white h-10 py-2"></div>
              )}

              <div className="p-6">
                <div className="h-60">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {plan.planType}
                  </h2>

                  <div className="flex items-baseline mb-3">
                    <span className="text-[#ff6600] lg:text-5xl text-2xl leading-none">
                      <sup className="lg:text-3xl text-xl">$</sup>
                      {plan.price}
                      <span className="lg:text-3xl text-xl text-black ml-1 align-baseline">
                        /mo
                      </span>
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6">{plan.feature}</p>

                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-colors mb-8">
                    {plan.buttonText}
                  </button>
                </div>
                <div className="space-y-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                    INCLUDES
                  </p>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                        <FaRegCheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSeven;
