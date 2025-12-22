import { Link } from "react-router-dom";

interface BusinessCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  source: string;
  description?: string;
  link?: string;
  blogStyle?: boolean;
}

const BusinessCard = ({
  blogStyle = false,
  image,
  category,
  title,
  date,
  readTime,
  source,
  description,
  link = "",
}: BusinessCardProps) => {
  return (
    <div
      className={`w-full ${
        blogStyle
          ? "flex lg:flex-row flex-col-reverse gap-4"
          : "flex flex-col-reverse"
      }`}
    >
      <div
        className={`${
          blogStyle
            ? "lg:w-[70%] w-full"
            : "w-full -translate-y-10  bg-[#f5f8ff]"
        } flex flex-col justify-between gap-6 p-4 rounded-[15px] `}
      >
        <div className="flex flex-col gap-2 ">
          <p className="md:text-[16px] text-[12px] font-medium">{category}</p>

          <h3 className="text-[14px] md:text-[16px] font-bold line-clamp-2">
            {title}
          </h3>
        </div>
        {description && (
          <p className="text-[16px] text-gray-600 line-clamp-2">
            {description}
          </p>
        )}

        <div className="text-[14px] flex flex-col gap-1 text-gray-500">
          <div className="flex items-center gap-2">
            <p>{date}</p>
            <span className="w-1 h-1 bg-gray-400 rounded-full" />
            <p>{readTime}</p>
          </div>
          <p>{source}</p>
        </div>
      </div>

      <Link
        to={link}
        className={`${
          blogStyle ? "lg:w-[30%] w-full lg:min-h-60 lg:my-4" : "w-full "
        }`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-[15px]"
        />
      </Link>
    </div>
  );
};

export default BusinessCard;
