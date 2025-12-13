import Button from "./Button";

interface Content {
  title: string;
  subtitle: string;
  description: string;
  NumberValue?: string;
  videoSource: string;
  buttonText?: string;
}

const HomeSections = ({
  title,
  subtitle,
  description,
  NumberValue,
  videoSource,
  buttonText,
}: Content) => {
  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse w-full lg:gap-[4%] gap-8">
        {/*---*/}
        <div className="lg:w-[48%] w-full flex flex-col gap-3 justify-center font-semibold ">
          <div className="flex flex-col mb-2">
            <p className="lg:text-[16px] text-[14px]">{title}</p>
            <h3 className="lg:text-[32px] leading-none my-2 text-[28px] font-bold">{subtitle}</h3>
          </div>
          <div className="flex mb-3 ">
            <p className="text-[#666666] md:text-[16px] text-[14px] ">
              {description}
            </p>
          </div>
          {NumberValue && (
            <div className="flex gap-6 items-center">
              <div className="flex flex-col">
                <p className="text-[28px] font-bold">50M+</p>
                <p className="text-[#666666] text-[14px]">active buyers</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[28px] font-bold">500K+</p>
                <p className="text-[#666666] text-[14px]">daily RQFs</p>
              </div>
            </div>
          )}
          {buttonText && (
            <Button
              buttonText={buttonText}
              style="border border-black! w-[230px]! h-[45px]! bg-white hover:bg-gray-200 text-black! text-[16px]! font-bold!"
            />
          )}
        </div>
        {/*----*/}
        <div className="lg:w-[48%] max-h-[700px] w-full h-auto">
          <video
            src={videoSource}
            playsInline
            autoPlay
            muted
            className="w-full h-full"
          ></video>
        </div>
      </div>
    </>
  );
};

export default HomeSections;
