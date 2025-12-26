import FeatureBar from "../../../productFeaturePage/sections/FeatureBar";

const stickybarContent = [
  { id: 1, label: "What is Alibaba.com", target: "alibaba.com" },
  { id: 2, label: "New to sourcing on Alibaba.com?", target: "newToSourcing" },
  { id: 3, label: "Hear from our buyers", target: "hearFromBuyers" },
  { id: 4, label: "Latest from Alibaba.com", target: "latest" },
];

const BuyerFeatureBar = () => {
  return (
    <>
      <FeatureBar
        content={stickybarContent}
        bgColor="#ff6600"
        hoverBgColor="#f0965a"
        textColor="white"
      />
    </>
  );
};

export default BuyerFeatureBar;
