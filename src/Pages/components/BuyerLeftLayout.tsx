
import Button from "../../components/Button";

interface ContentType {
  title: string;
  description: string;
  button?: boolean;
}

const BuyerText = ({ title, description, button }: ContentType) => {
  return (
    <>
      <div className="lg:w-[48%] w-full flex flex-col gap-5 justify-center py-2 pl-5 text-[#333]">
        <h1 className="text-2xl md:text-5xl font-semibold">{title}</h1>
        <p className="md:text-xl text-xs ">{description}</p>
        {button && (
          <Button
            buttonText="Learn more"
            style="bg-transparent! border! border-orange-500! text-[#ff6600]! rounded-[30px]! w-[180px]!"
          />
        )}
      </div>
    </>
  );
};

export default BuyerText;
