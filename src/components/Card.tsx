import { Link } from "react-router-dom";
interface Content {
  icon: string;
  image: string;
  link: string;
  description: string;
  style?: string;
  linkTo: string;
}

const Card = ({ icon, image, link, description, style, linkTo }: Content) => {
  return (
    <div className={`w-full flex  justify-center items-center p-6 md:p-15`}>
      <div
        className={`w-full ${style} flex flex-col-reverse lg:flex-row lg:gap-[4%]`}
      >
        <div className="lg:w-[48%] min-h-[300px] flex justify-center items-center">
          <div className="flex gap-5  ">
            <div className="w-[10%] flex justify-center items-center">
              <img src={icon} alt="icon" />
            </div>
            <div className="w-[90%] flex flex-col gap-5">
              <Link
                to={linkTo}
                className="text-2xl lg:text-3xl leading-snug font-bold text-[#022AA7]"
              >
                {link}
              </Link>
              <h2 className="text-[#666666] md:text-[16px] text-[14px]">
                {description}
              </h2>
            </div>
          </div>
        </div>
        <div className="lg:w-[48%] w-full min-h-[300px]">
          <div className="w-[] h-[]  ">
            <img
              src={image}
              alt="image"
              className="w-full h-full object-center object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
