import WhyCard from "../../../components/Image&Text";

export default function BuyerAlibabaBanner() {
  return (
    <>
      <div className="w-full p-6 md:p-15  flex flex-col bg-[linear-gradient(-46deg,#FF9600_18%,#FF6A00_100%)]">
        <WhyCard
          title="How end-to-end sourcing on Alibaba.com works"
          description="Your business can find or create exactly what you’re looking for here on one of the world’s largest wholesale marketplaces. Then pay for it, ensure its quality, and ship it to your final destination."
          styleText="lg:text-5xl! text:2xl! text-white! leading-snug!"
          imgSrc="https://img.baba-blog.com/2024/11/urgent-reminder-pcn-transition-period-ends-soon_00.jpg?x-oss-process=style%2Fmedium_large"
          imgStyle="lg:min-h-[350px]! "
          styleDesc="text-white! lg:text-xl! text-xs!"
        />
      </div>
    </>
  );
}
