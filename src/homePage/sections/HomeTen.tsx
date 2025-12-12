import Button from "../../components/Button";

const HomeTen = () => {
  return (
    <div className="w-full  px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 flex flex-col gap-8 sm:gap-12 md:gap-16 items-center bg-black">
      {/* Title */}
      <div className="w-full text-center max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
          Start your borderless business in 3 easy steps:
        </h2>
      </div>

      {/* Steps Container */}
      <div className="flex flex-col items-center w-full max-w-6xl relative">
        <div className=" hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 h-1 w-[70%] lg:w-[68%] bg-[#A1C0FC] z-0"></div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-8 md:gap-4 lg:gap-8">
          <div className="flex flex-col items-center gap-3 sm:gap-4 w-full md:w-1/3 max-w-xs z-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex bg-[#A1C0FC] justify-center items-center font-bold text-lg sm:text-xl">
              1
            </div>
            <p className="text-white text-center text-base sm:text-lg md:text-xl font-semibold px-2">
              Leave your information for us to contact you
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:gap-4 w-full md:w-1/3 max-w-xs z-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex bg-[#A1C0FC] justify-center items-center font-bold text-lg sm:text-xl">
              2
            </div>
            <p className="text-white text-center text-base sm:text-lg md:text-xl font-semibold px-2">
              Select a plan and pay
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:gap-4 w-full md:w-1/3 max-w-xs z-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex bg-[#A1C0FC] justify-center items-center font-bold text-lg sm:text-xl">
              3
            </div>
            <p className="text-white text-center text-base sm:text-lg md:text-xl font-semibold px-2">
              Verify your business
            </p>
          </div>
        </div>
      </div>

      <Button buttonText="Start Selling Now" />
    </div>
  );
};

export default HomeTen;
