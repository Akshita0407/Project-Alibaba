import WhyCard from "../../../components/Image&Text";

const BuyerBanner = () => {
  return (
    <div className="w-full p-6 md:p-15  flex flex-col bg-[linear-gradient(-46deg,#FF9600_18%,#FF6A00_100%)]">
      <WhyCard
        title="Source, pay for, and ship your goods on Alibaba.com"
        styleText="lg:text-5xl! text:2xl! text-white! leading-snug!"
        imgSrc="https://img.baba-blog.com/2024/11/urgent-reminder-pcn-transition-period-ends-soon_00.jpg?x-oss-process=style%2Fmedium_large"
        imgStyle="lg:min-h-[350px]! "
      />
    </div>
  );
};

export default BuyerBanner;
