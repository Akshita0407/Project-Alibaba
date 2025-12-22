const GrowBusiness = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-[50vh] bg-ts-blue">
      <div className="w-full  flex flex-col justify-center items-center py-10 my-10">
        <h1 className="text-ts-white text-3xl font-medium">
          Ready to grow your business?
        </h1>
        <div className="flex justify-center items-center gap-6 px-4 py-8">
          <div className="text-sm text-ts-white border rounded-full px-8 py-3 hover:cursor-pointer hover:bg-ts-white hover:text-ts-blue">
            Contact Us
          </div>
          <div className="bg-ts-orange text-sm text-ts-white border border-ts-orange rounded-full px-8 py-3 hover:cursor-pointer hover:border-ts-white hover:bg-ts-white hover:text-ts-blue">
            Start Selling
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowBusiness;
