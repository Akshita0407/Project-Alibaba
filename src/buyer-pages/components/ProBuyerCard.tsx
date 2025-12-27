import { Link } from "react-router-dom";

interface CardContent {
  id: number;
  newCard: boolean;
  title: string;
  description: string;
  to: string;
  hrefText: string;
}

const ProBuyerCard = ({
  id,
  title,
  description,
  hrefText,
  to,
  newCard,
}: CardContent) => {
  return (
    <>
      <div
        className="bg-white rounded-[10px] border border-transparent
  lg:min-h-[250px] min-h-[200px]
  relative flex"
        key={id}
      >
        {newCard && (
          <div className="absolute top-0 left-0 w-15 bg-black h-8 flex justify-center items-center text-[#f2cb8e] text-[14px] rounded-br-[20px] rounded-l-[10px]">
            New
          </div>
        )}

        <div className="w-full p-4 flex flex-col gap-3 justify-center items-center text-center">
          <h2 className="lg:text-[20px] text-[16px] font-bold text-[#333]">
            {title}
          </h2>

          <p className="lg:text-[14px] text-xs text-[#666] line-clamp-2">
            {description}
          </p>

          <Link to={to} className="lg:text-[14px] text-[10px] mt-2">
            {hrefText}
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProBuyerCard;
