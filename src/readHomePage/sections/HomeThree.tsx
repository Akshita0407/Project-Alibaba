const HomeThree = () => {
  return (
    <div className="w-full  flex flex-col p-6 md:p-15 gap-5">
      <div className="flex flex-col lg:w-[50%] w-full justify-start gap-1  ">
        <p className="text-[#4a4a4a] lg:text-[18px] text-[14px] lg:pl-8 pl-5">
          Alibaba.com Reads
        </p>

        <div className="flex   items-center lg:gap-6 gap-3">
          <div className="w-2 lg:h-20 h-10 bg-[#ff5500] mt-2 "></div>
          <h2 className="lg:text-3xl text-[14px] font-bold leading-snug">
            Your source for comprehensive and timely B2B news
          </h2>
        </div>
      </div>
      <div className="w-full text-[#7a7a7a] text-xs lg:text-xl my-5">
        <p>
          Alibaba.com Reads is a buyer-oriented content platform for
          Alibaba.com, one of the world’s leading B2B e-commerce marketplaces.
          Our post aims to consolidate informative articles on international
          trade events, cross-border procurement tips, industry trends, and
          sourcing recommendations for our readers. To be your go-to digital
          sourcing guide is our aim and mission.
        </p>
      </div>
    </div>
  );
};

export default HomeThree;
