import { Link } from "react-router-dom";
interface Content {
  imgSrc: string;
  style?: string;
  title: string;
  description?: string;
  styleText?: string;
  styleDesc?: string;
  link?: string;
  to?: string;
  imgStyle?: string;
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
  imgStyle,
}: Content) => {
  return (
    <div
      className={` ${style} w-full flex flex-col-reverse lg:flex-row justify-center lg:gap-[4%] gap-8 items-center text-left`}
    >
      <div className="lg:w-[48%] w-full flex flex-col gap-3  ">
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
      <div className="lg:w-[48%] w-full justify-center items-center relative">
        <div className={`w-full lg:h-[250px]  ${imgStyle}`}>
          <img
            src={imgSrc}
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyCard;
