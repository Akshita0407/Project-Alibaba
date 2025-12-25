import { Link } from "react-router-dom";
interface CardContent {
  id: number;
  image: string;
  title: string;
  source: string;
  date: string;
  duration: string;
  to: string;
}

const BuyerCard = ({
  id,
  image,
  title,
  source,
  date,
  duration,
  to,
}: CardContent) => {
  return (
    <>
      <Link to={to} key={id}>
        <div className="w-full flex flex-col border  border-[#333] rounded-[10px] md:min-h-[300px]">
          <div className="w-full flex-1 justify-center items-center bg-gray-400 border border-transparent rounded-t-[10px]">
            <div className="w-full ">
              <img
                src={image}
                alt="image"
                className="w-full h-full object-cover object-center border border-transparent rounded-t-[10px]"
              />
            </div>
          </div>
          <div className="w-full flex flex-col p-5 lg:gap-10 gap-5">
            <p className="lg:text-2xl text-xl line-clamp-2 font-semibold">
              {title}
            </p>

            <div className="flex flex-col  gap-3">
              <p className="text-[#333] md:text-[16px] text-[14px]">{source}</p>
              <div className="flex items-center gap-2 text-[#666] text-[12px] lg:text-[14px]">
                <p>{date}</p>
                <div className="w-2 h-2 rounded-full aspect-square bg-[#666]"></div>
                <p>{duration} min read</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BuyerCard;
