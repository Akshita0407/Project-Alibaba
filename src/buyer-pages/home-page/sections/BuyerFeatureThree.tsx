import BuyerFeatureCard from "../../components/BuyerFeatureCard";

const HearFromBuyers = [
  {
    id: 1,
    image: "image",
    to: "",
    source: "Alibaba.com",
    date: "May 21, 2021",
    duration: "2",
    title: "How Alibaba.com Enhanced Supplier Relations and Product Discovery",
  },
  {
    id: 2,
    image: "image",
    to: "",
    source: "Alibaba.com",
    date: "May 21, 2021",
    duration: "3",
    title: "Investing in Alibaba.com Helped NWCA Find Trusted Suppliers",
  },
  {
    id: 3,
    image: "image",
    to: "",
    source: "Alibaba.com",
    date: "june 08 ,2021",
    duration: "3",
    title: "Alibaba.com Offers a Growing Start-Up the Resources to Flourish",
  },
];
const BuyerFeatureThree = () => {
  return (
    <div id="hearFromBuyers">
      <BuyerFeatureCard
        cards={HearFromBuyers}
        title="Hear from our buyers"
        buttonText="See more"
      />
    </div>
  );
};

export default BuyerFeatureThree;
