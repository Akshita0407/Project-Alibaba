import FeatureBar from "../../../productFeaturePage/sections/FeatureBar";

const stickybarContent = [
  { id: 1, label: "1. Find products and suppliers", target: "findProducts" },
  { id: 2, label: "2. Connect with sellers", target: "ConnectWithSellers" },
  { id: 3, label: "3. Place and protect your order", target: "placeOrder" },
  { id: 4, label: "4. Pay on Alibaba.com", target: "payOnAlibaba" },
  { id: 5, label: "5. Ship and receive your goods", target: "shipping" },
];
const BuyerBarAlibaba = () => {
  return (
    <>
      <FeatureBar
        bgColor="#ff6600"
        hoverBgColor="#f0965a"
        textColor="white"
        content={stickybarContent}
      />
    </>
  );
};

export default BuyerBarAlibaba;
