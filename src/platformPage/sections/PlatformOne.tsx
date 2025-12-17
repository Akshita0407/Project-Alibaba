import WhyCard from "../../components/Image&Text";
import image from "../../assets/platformBanner.png"
const PlatformOne = () => {
  return (
    <div className="w-full md:p-15 p-6 flex justify-center items-center">
      <WhyCard
        title="Why sell on Alibaba.com"
        styleText="text-2xl lg:text-4xl"
        styleDesc="text-[14px] lg:text-[16px]"
        imgSrc={image}
        description="Alibaba.com makes ecommerce possible for sellers around the world, connecting you with new customers and the tools necessary to do business on a global scale.
"

        style="text-[#2f4480]"
      />
    </div>
  );
};

export default PlatformOne;
