import Button from "../components/Button";
const HomeFour = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col w-full p-6 md:p-15 lg:gap-[4%] gap-8">
        {/*---*/}
        <div className="lg:w-[48%] max-h-[700px] w-full h-auto">
          <div className="w-full h-full">
            <video
              src="https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/447004366165.mp4"
              playsInline
              autoPlay
              muted
              className="w-full h-full"
            ></video>
          </div>
        </div>

        {/*---*/}
        <div className="lg:w-[48%] w-full flex flex-col gap-5 justify-center ">
          <div className="flex flex-col mb-2">
            <p className="lg:text-[16px] text-[14px]">MARKETING TOOLS</p>
            <h3 className="lg:text-[40px] text-[28px] font-bold ">
              Launch targeted ad campaigns
            </h3>
          </div>
          <div className="flex mb-3 ">
            <p className="text-[#666666] md:text-[16px] text-[14px] ">
              Buyers can find you through search and send inquiries, or you can
              look for buyers yourself through the Request for Quotation (RFQ)
              marketplace. It's the world's biggest B2B reverse auction that
              allows you to find open order requests and make bids immediately.
              500,000+ RFQs are posted daily.
            </p>
          </div>
          <Button
            buttonText="Explore Marketing Tools"
            style="border border-black! w-[230px]! h-[45px]! bg-white hover:bg-gray-200 text-black! text-[16px]! font-bold!"
          />
        </div>
      </div>
    </>
  );
};

export default HomeFour;
