import Button from "../../components/Button";

const HomeTen = () => {
  return (
    <div className="w-full p-6 md:p-15 flex justify-center items-center lg:min-h-[350px] min-h-[300px] bg-[#1850c2]">
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <h3 className="text-white text-xl lg:text-3xl">
          Ready to grow your business?
        </h3>
        <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-4 ">
          <Button
            buttonText="Contact us"
            style="border border-white rounded-[30px] bg-[transparent] w-[200px]! hover:bg-[#f60]! m-0!"
          />
          <Button
            buttonText="Start Selling"
            style="border border-white rounded-[30px] bg-[#f60] w-[200px]! hover:bg-[transparent]!"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeTen;
