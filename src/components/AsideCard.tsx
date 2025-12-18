import Button from "./Button";

interface CardContent {
  style?: string;
  title: string;
  description: string;
  input: boolean;
  button: boolean;
}

const AsideCard = ({
  title,
  description,
  style,
  input,
  button,
}: CardContent) => {
  return (
    <div>
      <div className="w-full  flex justify-center pb-4  items-center ">
        <div
          className={`w-full  min-h-[230px] flex  flex-col justify-between gap-5 p-5 bg-black rounded-[15px] text-white ${style}`}
        >
          <h3 className="text-xl lg:text-2xl font-semibold">{title}</h3>

          <p className="text-[14px] md:text-[16px] ">{description}</p>
          {input && (
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
          )}
          {button && (
            <Button
              buttonText="Start selling now"
              style="bg-black! text-[18px]! w-full!"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AsideCard;
