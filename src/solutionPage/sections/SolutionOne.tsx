import Button from "../../components/Button";
import image from "../../assets/mainFeature.png";
const SolutionOne = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="w-full bg-[#245bce]">
        <div className="w-full flex flex-col-reverse lg:flex-row lg:gap-[7%] md:p-15 p-6  ">
          <div className="lg:w-[48%] w-full flex flex-col gap-3 lg:min-h-[405px] min-h-[300px] text-white">
            <p className="lg:text-[16px] text-[14px] ">
              Alibaba.com for B2B ecommcere
            </p>
            <h2 className="leading-snug md:text-5xl text-3xl font-semibold">
              {" "}
              Go digital with B2B ecommerce
            </h2>
            <p className="lg:text-[14px] text-[12px] ">
              The B2B landscape and B2B buyers' sourcing behavior have changed
              drastically over the past decade, especially since the
              cancellation of trade shows and in-person events due to the global
              pandemic. Alibaba.com provides wholesale distributors and
              manufacturers an easy and economic way to scale your business
              online and sell to today's global B2B buyers at any time, from any
              location.
            </p>
            <div className="flex flex-col items-center md:flex-row lg:gap-4">
              <Button
                buttonText="Start Selling"
                style="bg-white! border border-white! text-[#245bce]!  w-[180px]! rounded-[30px] text-[16px]! "
              />
              <Button
                buttonText="Get Started"
                style="bg-transparent! border border-white! text-white! w-[180px]! rounded-[30px] text-[16px]! hover:bg-white! hover:text-[#245bce]! m-0! "
              />
            </div>
          </div>
          <div className="lg:w-[45%] w-full flex justify-center items-center lg:min-h-[405px] min-h-[300px]">
            <div className="w-full h-full">
              <img
                src={image}
                alt=""
                className="w-full h-full object-center object-contain"
              />
            </div>
          </div>
        </div>
        {/*---- */}
        <div className="w-full bg-[#ecf0f5]">
          <div
            className="w-full flex flex-row justify-between
           md:p-10 p-4 "
          >
            <div className="flex flex-col   text-left gap-3 text-[#183072]">
              <h3 className=" text-[16px] md:text-[20px] font-semibold">
                Digitize your business: generating B2B sales on Alibaba.com is
                easy
              </h3>
              <p className="text-[10px] md:text-[13px]">
                Explore digital ways to tap into one of the largest bases of
                business buyers and jumpstart sales on Alibaba.com.
              </p>
            </div>
            <Button
              buttonText="Start Tour"
              style="bg-transparent! border border-[#183072]!  w-[180px]! rounded-[30px] text-[16px]! text-[#183072]! "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionOne;
