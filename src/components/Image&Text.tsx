interface Content {
  imgSrc: string;
  style?: string;
  title: string;
  description: string;
}

const WhyCard = ({ imgSrc, style, title, description }: Content) => {
  return (
    <div
      className={` ${style} w-full flex flex-col-reverse lg:flex-row justify-center lg:gap-[8%] gap-8 items-center text-left`}
    >
      <div className="lg:w-[46%] w-full flex flex-col gap-3 lg:px-6 ">
        <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
        <p className="text-[12px] md:text-[14px]">{description}</p>
      </div>
      <div className="lg:w-[46%] w-full justify-center items-center">
        <div className="w-full lg:min-h-[300px]">
          <img
            src={imgSrc}
            alt=""
            className="w-full h-full object-center object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyCard;
