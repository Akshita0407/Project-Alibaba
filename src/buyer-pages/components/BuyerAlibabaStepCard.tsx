import { Link } from "react-router-dom";

interface Item {
  id: number;
  to: string;
  spanText: string;
  text: string;
}

interface StepsContent {
  flexStyle?: string;
  image: string;
  subtitle: string;
  content: Item[];
}

const BuyerAlibabaStepCard = ({
  flexStyle = "",
  image,
  subtitle,
  content,
}: StepsContent) => {
  return (
    <div
      className={`w-full flex lg:flex-row flex-col lg:gap-[8%] gap-5 lg:mt-8 mt-3 justify-center items-center ${flexStyle}`}
    >
      <div className="lg:w-[46%] w-full">
        <div className="w-full lg:min-h-[350px] min-h-[250px] bg-gray-200">
          <img src={image} alt="step" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="lg:w-[46%] w-full flex flex-col gap-6">
        <h3 className="lg:text-3xl text-xl font-semibold text-[#333333]">{subtitle}</h3>

        <ul className="flex flex-col gap-4">
          {content.map((c) => (
            <li key={c.id} className="flex gap-3">
              <span className="mt-3 w-1 h-1 rounded-full aspect-square bg-black"></span>

              <p className="text-[14px] lg:text-[16px] leading-relaxed text-[#333333]">
                <Link to={c.to} className="text-[#ff6600] font-medium mr-1">
                  {c.spanText}
                </Link>
                {c.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BuyerAlibabaStepCard;
