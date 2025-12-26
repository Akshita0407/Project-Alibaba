interface CardContent {
  step: number;
  title: string;
  description: string;
  widthstyle?: string;
}

const BuyerAlibabaStepTitle = ({
  step,
  title,
  description,
  widthstyle,
}: CardContent) => {
  return (
    <div className={`lg:w-[65%] w-full flex flex-col gap-8 ${widthstyle}`}>
      <span className=" items-center text-[#333333] md:text-4xl text-2xl ">
        <span className="font-semibold">Step {step} : </span>
        {title}
      </span>

      <p className="text-[14px] lg:text-[16px]">{description}</p>
    </div>
  );
};

export default BuyerAlibabaStepTitle;
