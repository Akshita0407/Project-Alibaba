import BuyerAlibabaBanner from "./section/BuyerAlibabaBanner";
import BuyerBarAlibaba from "./section/BuyerBarAlibaba";
import BuyerAlibabaStepOne from "./section/BuyerAlibabaStepOne";
import BuyerAlibabaStepTwo from "./section/BuyerAlibabaStepTwo";
import BuyerAlibabaStepThree from "./section/BuyerAlibabaStepThree";
import BuyerAlibabaStepFour from "./section/BuyerAlibabaStepFour";
import BuyerAlibabaStepFive from "./section/BuyerAlibabaStepFive";
import BuyerStartSelling from "./section/BuyerStartSelling";

const BuyerWhyAlibaba = () => {
  return (
    <>
      <BuyerAlibabaBanner />
      <BuyerBarAlibaba />
      <BuyerAlibabaStepOne />
      <hr className="border-gray-400" />
      <BuyerAlibabaStepTwo />
      <hr className="border-gray-400" />
      <BuyerAlibabaStepThree />
      <hr className="border-gray-400" />
      <BuyerAlibabaStepFour />
      <hr className="border-gray-400" />
      <BuyerAlibabaStepFive />
      <hr className="border-gray-400" />
      <BuyerStartSelling />
      <hr className="border-gray-400" />
    </>
  );
};

export default BuyerWhyAlibaba;
