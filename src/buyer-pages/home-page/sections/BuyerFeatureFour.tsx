import BuyerFeatureCard from "../../components/BuyerFeatureCard";

const latest = [
  {
    id: 1,
    image: "image",
    to: "",
    source: "Alibaba.com",
    date: "Feb 03 , 2021",
    duration: "2",
    title: "5 questions to ask a seller before placing a B2B order",
  },
  {
    id: 2,
    image: "image",
    to: "",
    source: "Alibaba.com",
    date: "May 21, 2021",
    duration: "5",
    title: "Importing like a pro: questions you must ask your supplier",
  },
  {
    id: 3,
    image: "image",
    to: "",
    source: "Alibaba.com",
    date: "june 09 ,2021",
    duration: "3",
    title: "Ensure smooth shipping with this importing checklist",
  },
];
const BuyerFeatureFour = () => {
  return (
    <div id="latest">
      <BuyerFeatureCard
        cards={latest}
        title="Lastest from Alibaba.com
"
        buttonText="See more"
      />
    </div>
  );
};

export default BuyerFeatureFour;
