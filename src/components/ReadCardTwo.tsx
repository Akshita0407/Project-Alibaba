import { Link } from "react-router-dom";
import { BsChevronDoubleRight } from "react-icons/bs";

interface CardContent {
  id: number;
  imgSrc: string;
  title: string;
  by: string;
  minutes: string;
  description: string;
  link: string;
}

const ReadCardTwo = ({
  id,
  imgSrc,
  title,
  by,
  description,
  link,
  minutes,
}: CardContent) => {
  return (
    <div className="flex flex-col mb-5 bg-white" id={id.toString()}>
      <div className="w-full lg:min-h-[200px] lg:min-w-[280px] overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover object-center hover:scale-[1.03] transform ease-in-out"
        />
      </div>
      <div className="flex flex-col gap-3 my-4">
        <Link to={link}>
          <h3 className="mt-2 lg:text-2xl text-[16px] leading-snug">{title}</h3>
        </Link>
        <p className="text-[#ff6600] text-[12px] lg:text-[14px]">
          By {by} / {minutes} of reading
        </p>
        <p className="mt-1 text-gray-700 text-[12px] lg:text-[14px]">
          {description}
        </p>
        <div>
          <Link to={link} className=" hover:text-[#ff6600] text-[#c43c07d9]">
            <div className="flex items-center gap-1 text-[12px] lg:text-[16px]">
              <p>Read more </p>
              <BsChevronDoubleRight fontSize={10} className="mt-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadCardTwo;
