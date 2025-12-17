import { Link } from "react-router-dom";
interface Content {
  imgSrc: string;
  style?: string;
  title: string;
  description: string;
  styleText?: string;
  styleDesc?: string;
  link?: string;
  to?: string;
}

const WhyCard = ({
  imgSrc,
  style,
  title,
  description,
  styleText,
  styleDesc,
  link,
  to,
}: Content) => {
  return (
    <div
      className={` ${style} w-full flex flex-col-reverse lg:flex-row justify-center lg:gap-[8%] gap-8 items-center text-left`}
    >
      <div className="lg:w-[46%] w-full flex flex-col gap-3 lg:px-6 ">
        <h3 className={`text-xl md:text-2xl font-semibold ${styleText}`}>
          {title}
        </h3>
        <p className={`text-[12px] md:text-[14px] ${styleDesc}`}>
          {description}
        </p>

        {to && link && (
          <Link to={to} className="text-[#245bce] underline text-sm">
            {link}
          </Link>
        )}
      </div>
      <div className="lg:w-[46%] w-full justify-center items-center">
        <div className="w-full lg:h-[250px]">
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
