import BuyerAlibabaStepTitle from "../../components/BuyerAlibabaStepTitle";
import BuyerTradeAssurance from "../../components/BuyerTradeAssurance";

const BuyerAlibabaStepFive = () => {
  return (
    <>
      <div
        className="w-full p-6 md:p-15 flex justify-center items-center"
        id="shipping"
      >
        <div className="w-full flex lg:flex-row flex-col  gap-[8%]">
          <div className="lg:w-[46%] w-full flex-col gap-5">
            <BuyerAlibabaStepTitle
              description="Alibaba.com Logistics has partnered with major players in the industry to provide our customers with reliable and transparent multi-modal shipping solutions."
              step={4}
              title="Ship and receive your goods"
              widthstyle="lg:w-full!"
            />
            <BuyerTradeAssurance
              description="Trade Assurance protects your order for 30 days after you receive it."
              image="image"
              title="Alibaba.com Trade Assurance tip"
            />
          </div>
          <div className="lg:w-[46%] w-full">
            <div className="w-full lg:min-h-[350px] min-h-[250px] bg-gray-200">
              <img
                src="image"
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

export default BuyerAlibabaStepFive;
