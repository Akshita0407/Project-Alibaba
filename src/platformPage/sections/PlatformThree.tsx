import WhyCard from "../../components/Image&Text";
import image from "../../assets/platformBanner.png";
const PlatformThree = () => {
  return (
    <>
      <div className="w-full flex  justify-center items-center bg-[#f2f4f8] text-[#2f4480] p-6 md:p-15">
        <div className="w-full flex flex-col text-center gap-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl md:text-3xl font-bold  ">
              Grow with Alibaba.com
            </h3>
            <p className="text-xs lg:text-[14px]">
              Why sellers around the world use Alibaba.com for wholesale trade?
            </p>
          </div>
          <div className="mt-10 flex flex-col lg:gap-25 gap-8">
            <WhyCard
              title="Reach millions of business buyers globally"
              imgSrc={image}
              link="See the global demand for your products"
              to=""
              description="Get your products in front of 20 million+ active buyers who make 280,000+ inquiries daily from 190+ countries and regions."
            />

            <div className="w-full h-0.5 bg-gray-300"></div>

            <WhyCard
              style="lg:flex-row-reverse!"
              title="Get discovered and increase sales with intelligent tools
"
              imgSrc={image}
              link="See the suite of business tools"
              to=""
              description="Manage your growth with analytics tools, customer data, a custom digital storefront, targeted advertising, and more."
            />

            <div className="w-full h-0.5 bg-gray-300"></div>
            <WhyCard
              title="Unlock your success with professional services"
              imgSrc={image}
              link="See how we're at your service"
              to=""
              description="Our team of experts guide you in each step of your onboarding process and help you define a clear roadmap to success"
            />

            <div className="w-full h-0.5 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformThree;
