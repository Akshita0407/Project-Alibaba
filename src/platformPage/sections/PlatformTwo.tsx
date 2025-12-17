import WhyCard from "../../components/Image&Text";
import image from "../../assets/About.png";
const PlatformTwo = () => {
  return (
    <div className="w-full md:p-15 p-6 flex justify-center items-center bg-[#f8f8f8]">
      <WhyCard
        title="About Alibaba.com"
        styleText="text-2xl lg:text-4xl"
        styleDesc="text-[12px] lg:text-[14px]"
        imgSrc={image}
  
        description="One of the largest B2B wholesale marketplaces in the world. Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers reach buyers around the world for more than 20 years, now with an end-to-end suite of tools built for B2B."
        style="text-[#2f4480]"
      />
    </div>
  );
};

export default PlatformTwo;
