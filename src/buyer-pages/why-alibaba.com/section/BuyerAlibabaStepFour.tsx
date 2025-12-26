import BuyerAlibabaStepTitle from "../../components/BuyerAlibabaStepTitle";
import BuyerTradeAssurance from "../../components/BuyerTradeAssurance";

const BuyerAlibabaStepFour = () => {
  return (
    <>
      <div
        className="w-full p-6 md:p-15 flex justify-center items-center"
        id="payOnAlibaba"
      >
        <div className="w-full flex lg:flex-row flex-col  gap-[8%]">
          <div className="lg:w-[46%] w-full flex-col gap-5">
            <BuyerAlibabaStepTitle
              description="Paying suppliers on Alibaba.com is easy and secure. Once you and the seller agree on payment terms, you’ll typically pay an initial balance. The remainder is due when the items are shipped. Buyers can make secure Alibaba.com Trade Assurance payments through the options shown on the right."
              step={4}
              title="Pay on Alibaba.com"
              widthstyle="lg:w-full!"
            />
            <BuyerTradeAssurance
              description="You must pay for your order on Alibaba.com, not through third parties (exception: wire transfer) for your order to qualify for Trade Assurance protection."
              image="image"
              title="Alibaba.com Trade Assurance tip"
            />
          </div>
          <div className="lg:w-[46%] w-full">
            <div className="w-full lg:min-h-[350px] min-h-[250px]  bg-gray-200">
              <img
                src="iamge"
                alt="step"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerAlibabaStepFour;
