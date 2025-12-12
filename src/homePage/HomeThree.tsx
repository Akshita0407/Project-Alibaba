import HomeSections from "../components/HomeSections";

const HomeThree = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-8 p-6 md:p-15">
        <div>
          <h1 className="lg:text-[58px] text-[32px] font-bold">
            Sell to a global audience
          </h1>
        </div>

        <HomeSections
          title="MORE ONLINE SALES CHANNELS"
          subtitle="Reach new markets"
          description="Buyers can find you through search and send inquiries, or you can look for buyers yourself through the Request for Quotation (RFQ) marketplace. It's the world's biggest B2B reverse auction that allows you to find open order requests and make bids immediately. 500,000+ RFQs are posted daily."
          NumberValue="true"
          videoSource="https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/447207827893.mp4"
          buttonText="Visit RFQ marketplace"
        />
      </div>
    </>
  );
};

export default HomeThree;
