import image from "../../assets/FeatureImage(1).png";
const HomeOne = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center p-6 md:p-15 bg-[#f8f8f8]">
        <div className="w-full flex lg:flex-row flex-col-reverse">
          <div className="lg:w-[50%] w-full flex flex-col lg:p-8 justify-center text-[#183071] items-center">
            <h3 className="text-xl  lg:text-4xl font-bold leading-snug">
              Grow your margins with a suite of tools built for B2B sales
            </h3>
            <p className="text-[12px] lg:text-[14px] mt-3">
              From marketing to prospecting to shipping, take advantage of these
              tools and services to help you expand your sales online.
            </p>
          </div>
          <div className="lg:w-[50%] w-full mt-4">
            <div>
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOne;
