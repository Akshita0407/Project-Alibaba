import Button from "../../components/Button";

interface Content {
  title: string;
  background?: string;
  description?: string;
  textStyle?: string;
  btnStyle?: string;
}

const StartSelling = ({
  title,
  background,
  description,
  textStyle,
  btnStyle,
}: Content) => {
  return (
    <>
      <div
        className={`w-full flex lg:flex-row flex-col justify-between p-6 md:p-15 bg-[#F6BB36] ${background}`}
      >
        <div className={`flex flex-col gap-4 text-white  ${textStyle}`}>
          <h2 className="lg:text-3xl text-xl  font-bold">{title}</h2>
          <p className="text-xs lg:text-[20px]">{description}</p>
        </div>
        <div className="">
          <Button
            buttonText="learn more"
            style={`rounded-[30px]! w-[150px]! bg-white! ${btnStyle}! text-[14px]!`}
          />
        </div>
      </div>
    </>
  );
};

export default StartSelling;
