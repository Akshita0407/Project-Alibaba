import WhyCard from "../../components/Image&Text";
import image from "../../assets/mainFeature.png";

const SolutionThree = () => {
  return (
    <div className="w-full flex  justify-center items-center bg-[#f2f4f8] text-[#2f4480] p-6 md:p-15">
      <div className="w-full flex flex-col text-center gap-10">
        <h3 className="text-2xl md:text-3xl   ">
          Why Alibaba.com for B2B ecommerce?
        </h3>
        <div className="mt-10 flex flex-col lg:gap-25 gap-8">
          <WhyCard
            title="One of the largest wholesale marketplaces"
            imgSrc={image}
            description="Get direct access to 13 million+ global B2B buyers online who are actively sourcing products and placing wholesale orders."
          />

          <div className="w-full h-0.5 bg-gray-300"></div>

          <WhyCard
            style="lg:flex-row-reverse!"
            title="Low upfront costs, high return on investment"
            imgSrc={image}
            description="The investment in an Alibaba.com membership is less than the cost of a flight ticket from New York to Shanghai for a trade show."
          />

          <div className="w-full h-0.5 bg-gray-300"></div>
          <WhyCard
            title="A suite of tools to help you work efficiently"
            imgSrc={image}
            description="Manage your account and relationships on the app, and monitor and optimize business with dashboards and analytics tools."
          />

          <div className="w-full h-0.5 bg-gray-300"></div>

          <WhyCard
            style="lg:flex-row-reverse!"
            title="Easy-to-build digital storefront"
            imgSrc={image}
            description="Create a digital, multi-language storefront that helps you showcase your goods - no design, coding, language skill required."
          />
          <div className="w-full h-0.5 bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default SolutionThree;
