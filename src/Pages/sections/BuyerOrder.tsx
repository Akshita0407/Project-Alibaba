import Button from "../../components/Button";

const BuyerOrder = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col justify-between p-6 md:p-15 bg-[#F6BB36]">
      <div className="flex flex-col gap-4 text-white ">
        <h2 className="lg:text-3xl text-xl  font-bold">
          Order with confidence
        </h2>
        <p className="text-xs lg:text-[20px]">
          Ensure product quality and on-time delivery with Trade Assurance, the
          Alibaba.com order protection service.
        </p>
      </div>
      <div className="">
        <Button
          buttonText="learn more"
          style="rounded-[30px]! bg-white! w-[150px]! text-[#F6BB36]! text-[14px]!"
        />
      </div>
    </div>
  );
};

export default BuyerOrder;
