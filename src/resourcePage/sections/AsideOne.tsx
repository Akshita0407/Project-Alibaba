import Button from "../../components/Button";

const AsideOne = () => {
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="w-full flex flex-col gap-5 p-5 bg-black rounded-[15px] text-white">
        <h3 className="text-xl lg:text-2xl font-semibold">
          Start your borderless business here
        </h3>

        <p className="text-[14px] md:text-[16px] ">
          Subscribe to us, get free e-commerce tips, inspiration, and resources
          delivered directly to your inbox.
        </p>

        <div className="relative w-full">
          <input
            type="text"
            placeholder="Enter email"
            className="w-full bg-white p-3  text-xs rounded text-black placeholder:text-gray-400"
          />

          <div className="absolute right-1 top-1/2 -translate-y-1/2">
            <Button
              buttonText="Submit"
              style="h-[32px]! w-[100px]! px-4! text-xs! bg-black! text-white!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideOne;
