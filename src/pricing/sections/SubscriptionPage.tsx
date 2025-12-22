import {
  SubscriptionSection,
  type SubscriptionCardProps,
} from "./SubscriptionComponent";

export const SubscriptionPage = () => {
  const subscriptionCards: SubscriptionCardProps[] = [
    {
      title: "Standard",
      subtitle: "Scale your business with all features",
      price: "299",
      priceLabel: "",
      benefits: [
        {
          text: "Unlimited product listing",
        },
        {
          text: "20 product showcases",
        },
        {
          text: "40 responses to RFQs/month",
        },
        {
          text: "Business verification support",
        },
        {
          text: "Dedicated customer support",
        },
      ],
      isPopular: true,
      onButtonClick: () => console.log("Card 1 - Get Ansured clicked"),
      onLearnMoreClick: () => console.log("Card 1 - Learn More clicked"),
    },
    {
      title: "Standard",
      subtitle: "Scale your business with all features",
      price: "299",
      priceLabel: "",
      benefits: [
        {
          text: "Unlimited product listing",
        },
        {
          text: "20 product showcases",
        },
        {
          text: "40 responses to RFQs/month",
        },
        {
          text: "Business verification support",
        },
        {
          text: "Dedicated customer support",
        },
      ],
      isPopular: false,
      onButtonClick: () => console.log("Card 1 - Get Ansured clicked"),
      onLearnMoreClick: () => console.log("Card 1 - Learn More clicked"),
    },
  ];

  return (
    <div className="w-full flex justify-center items-center bg-linear-to-b from-ts-grey-light to-ts-white flex-col py-10 px-4">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-fit flex gap-3 bg-white px-3 py-2 justify-center items-center text-sm font-semibold border border-ts-blue rounded-full">
          <p className="bg-ts-blue px-3 py-1 rounded-full hover:cursor-pointer text-ts-white">
            Quarterly{" "}
          </p>
          <p className="hover:cursor-pointer">Annually</p>
        </div>
        <SubscriptionSection cards={subscriptionCards} />
        <p className="text-xs text-ts-black py-5 underline hover:cursor-pointer my-5">
          {" "}
          Terms and conditions{" "}
        </p>
      </div>
    </div>
  );
};
