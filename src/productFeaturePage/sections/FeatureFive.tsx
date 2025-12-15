const content = [
  {
    id: 1,
    title: "Protection",
    description:
      "Accept customer payments through Alibaba.com and protect your shipments and customers through Alibaba.com's Trade Assurance.",
  },
  {
    id: 2,
    title: "Payments",
    description:
      "Facilitate secure payments through financing services, wire transfer, credit card, or ACH, and transfer funds into your personal account to get paid - with either low or no commissions taken depending on your country.",
  },
  {
    id: 3,
    title: "Logistics",
    description:
      "Leverage flexible shipping templates that enable you to use Alibaba.com Shipping or your own logistics provider for quotes and fulfillment.",
  },
];

const FeatureFive = () => {
  return (
    <>
      <div
        id="orderManagement"
        className="w-full flex  justify-center items-center p-6 md:p-15 text-center"
      >
        <div className="w-full flex flex-col gap-12 justify-center items-center">
          <div className="lg:w-[60%] w-full flex flex-col gap-2 text-[#2f4480]">
            <p className="text-[#245ecf] md:text-[17px] text-[14px]">
              Order management
            </p>
            <h2 className="text-2xl lg:text-4xl font-semibold leading-snug ">
              Manage every step in one place
            </h2>
            <p className="text-xs lg:text-[17px] mt-1">
              Deliver more value to your buyers by providing them with
              everything they need in one place. Take advantage of on-platform
              tools that ensure a simple, seamless process for you and your
              buyers.
            </p>
          </div>
          <div className="flex w-full lg:flex-row flex-col justify-center items-center gap-3">
            {content.map((c) => (
              <div
                key={c.id}
                className="flex flex-col lg:w-[300px] w-full min-h-[200px] shadow-[0_0_15px_rgba(0,0,0,0.15)] border border-transparent rounded-[10px] px-5 py-8 text-left gap-5"
              >
                <div className="h-12 justify-between flex flex-col">
                  <p className="text-[14px] font-semibold">{c.title}</p>
                  <div className="w-[20%] h-1 bg-[#245ecf]"></div>
                </div>
                <p className="text-xs text-[#666]">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureFive;
