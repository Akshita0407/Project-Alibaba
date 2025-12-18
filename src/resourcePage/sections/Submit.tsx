import Button from "../../components/Button";
const Submit = () => {
  return (
    <div className="bg-[#f5f8ff] w-full h-fit p-8 gap-8 flex  justify-center items-center ">
      <div className="lg:w-[68%] w-full gap-8 flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl md:text-4xl font-bold leading-snug">
          Keep up with the latest from Alibaba.com?
        </h2>
        <p className="lg:text-xl text-xs">
          Subscribe to us, get free e-commerce tips, inspiration, and resources
          delivered directly to your inbox.
        </p>
        <div className="flex flex-col gap-3 text-gray-400 lg:w-[60%] w-full">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Enter email"
              className="w-full bg-white p-3 h-15 border border-gray-400  text-[16px] rounded-[10px] text-black placeholder:text-gray-400"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Button
                buttonText="Submit"
                
                style="h-[43px]! w-[120px]! px-4! text-[15px]! bg-black! text-white!"
              />
            </div>
          </div>
          <p className="text-[12px] lg:text-[14px]">
            Get competitive quotes from qualified suppliers tailored to your
            exact needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Submit;
