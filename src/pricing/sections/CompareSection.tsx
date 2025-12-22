const CompareSection = () => {
  const plans = [
    {
      title: "Standard",
      price: "299",
      features: [
        { label: "Product listings", value: "Unlimited" },
        { label: "Storefront", value: true },
        { label: "Store performance reports", value: true },
        { label: "Staff accounts", value: "5 accounts" },
        { label: "Sales commission", value: "0%" },
        { label: "Get featured in product", value: "20 products" },
        { label: "Responses to RFQs per mo", value: "40 responses" },
        { label: "Alibaba.com Keywords Tracking", value: true },
        { label: "Online 24/7 Customer Support", value: true },
        { label: "1-on-1 business performance review", value: true },
        { label: "Alibaba Seller Training E-cou", value: true },
        { label: "Dedicated customer support", value: true },
      ],
    },
    {
      title: "Basic",
      price: "199",
      features: [
        { label: "Product listings", value: "Unlimited" },
        { label: "Storefront", value: true },
        { label: "Store performance reports", value: true },
        { label: "Staff accounts", value: "5 accounts" },
        { label: "Sales commission", value: "0%" },
        { label: "Get featured in product", value: "10 products" },
        { label: "Responses to RFQs per mo", value: "20 responses" },
        { label: "Alibaba.com Keywords Tracking", value: true },
        { label: "Online 24/7 Customer Support", value: true },
        { label: "1-on-1 business performance review", value: true },
        { label: "Alibaba Seller Training E-cou", value: true },
        { label: "Dedicated customer support", value: true },
      ],
    },
  ];

  return <ComparisonPage plans={plans} />;
};

export default CompareSection;

interface SubscriptionPlan {
  title: string;
  price: string;
  features: {
    label: string;
    value: string | boolean | number;
  }[];
}

interface ComparisonPageProps {
  plans: SubscriptionPlan[];
}

const ComparisonPage: React.FC<ComparisonPageProps> = ({ plans }) => {
  const allFeatureLabels = Array.from(
    new Set(plans.flatMap((plan) => plan.features.map((f) => f.label)))
  );

  const platformFeatures = allFeatureLabels.filter(
    (f) =>
      ![
        "Alibaba.com Keywords Tracking",
        "Online 24/7 Customer Support",
        "1-on-1 business performance review",
        "Alibaba Seller Training E-cou",
        "Dedicated customer support",
      ].includes(f)
  );

  const customerServiceFeatures = allFeatureLabels.filter((f) =>
    [
      "Alibaba.com Keywords Tracking",
      "Online 24/7 Customer Support",
      "1-on-1 business performance review",
      "Alibaba Seller Training E-cou",
      "Dedicated customer support",
    ].includes(f)
  );

  return (
    <div className="w-full pb-10 px-4 flex justify-center ">
      <div className="w-full max-w-6xl overflow-x-auto">
        <div className="flex justify-center mb-8">
          <button className="text-sm text-ts-blue border rounded-full px-6 py-3 mb-5 hover:cursor-pointer">
            Compare all plan features
          </button>
        </div>

        <FeatureTable
          title="PLATFORM FEATURES"
          featureList={platformFeatures}
          plans={plans}
        />

        <FeatureTable
          title="CUSTOMER SERVICE"
          featureList={customerServiceFeatures}
          plans={plans}
          isGreyHeader
        />
      </div>
    </div>
  );
};

const FeatureTable = ({
  title,
  featureList,
  plans,
  isGreyHeader = false,
}: {
  title: string;
  featureList: string[];
  plans: SubscriptionPlan[];
  isGreyHeader?: boolean;
}) => (
  <div className="border w-full max-w-3xl mx-auto border-ts-grey/30  overflow-hidden">
    <table className="w-full border-collapse">
      <thead className={isGreyHeader ? "bg-ts-white sticky top-0" : "bg-white"}>
        <tr>
          <th className="py-6 px-4 text-sm font-semibold text-ts-black tracking-wide w-60">
            {title}
          </th>

          {plans.map((plan, index) => (
            <th
              key={index}
              className="text-center py-6 px-4 border-l border-ts-grey/30"
            >
              {!isGreyHeader && (
                <>
                  <div className="text-lg font-bold text-ts-blue-dark">
                    {plan.title}
                  </div>

                  <div className="text-2xl font-extrabold text-ts-blue-dark mt-1">
                    ${plan.price}.00
                    <span className="text-base text-ts-black"> /mo</span>
                  </div>

                  <button className="mt-3 bg-ts-blue text-white rounded-full px-5 py-1 text-xs">
                    Select plan
                  </button>
                </>
              )}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {featureList.map((label, rowIndex) => (
          <tr
            key={rowIndex}
            className="border-t border-ts-grey/30 hover:bg-ts-white"
          >
            <td className="py-4 px-4 text-sm text-ts-black font-semibold">
              {label}
            </td>

            {plans.map((plan, planIndex) => {
              const feature = plan.features.find((f) => f.label === label);

              return (
                <td
                  key={planIndex}
                  className="text-center py-4 px-4 border-l border-ts-grey/30"
                >
                  {typeof feature?.value === "boolean" ? (
                    feature.value ? (
                      <span className="text-ts-blue font-bold text-lg">✔</span>
                    ) : (
                      <span className="text-ts-grey font-bold text-lg">—</span>
                    )
                  ) : (
                    <span className="text-ts-black text-sm">
                      {feature?.value ?? "—"}
                    </span>
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
