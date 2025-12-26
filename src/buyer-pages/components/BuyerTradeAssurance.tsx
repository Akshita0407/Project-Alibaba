interface Assurance {
  image: string;
  title: string;
  description: string;
}

const BuyerTradeAssurance = ({ image, title, description }: Assurance) => {
  return (
    <div className="w-full bg-[#FFFCF2] flex flex-col lg:p-8 p-6 lg:mt-8 my-5 border border-transparent rounded-lg text-[#333333]">
      <div className="flex gap-2 items-center">
        <div className="w-5 h-5 bg-[#FACE32] flex justify-center items-center">
          <img
            src={image}
            alt="img"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-[14px] lg:text-[18px] font-semibold">{title}</p>
      </div>
      <p className="text-[12px] lg:text-[16px] mt-2">{description}</p>
    </div>
  );
};

export default BuyerTradeAssurance;
