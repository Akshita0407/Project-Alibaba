import { Link } from "react-router-dom";
interface CardContent {
  link: string;
  imgSrc: string;
  title: string;
  name: string;
  date: string;
  style?: string;
}

const ReadHomeCardTwo = ({
  imgSrc,
  title,
  name,
  date,
  link,
  style,
}: CardContent) => {
  return (
    <>
      <div
        className={` ${style} w-full flex  justify-center items-center bg-white rounded hover:shadow-md`}
      >
        <div className="w- lg:w-[70%] flex flex-col gap-2 py-4">
          <Link to={link}>
            <h2 className="px-4 py-5 text-[14px] text-[#54595f] font-bold lg:text-[16px] line-clamp-2">
              {title}
            </h2>
          </Link>
          <hr className="text-gray-200" />
          <div className="flex gap-2 text-gray-400 text-xs px-4 py-2 items-center">
            <p>{name}</p>
            <div className="w-1 h-1 rounded-full aspect-square bg-gray-400"></div>
            <p>{date}</p>
          </div>
        </div>
        <div className="w-full lg:w-[30%] flex justify-center items-center rounded ">
          <img
            src={imgSrc}
            alt="image"
            className="w-full h-full object-cover object-center lg:w-[100px] lg:h-[100px] "
          />
        </div>
      </div>
    </>
  );
};

export default ReadHomeCardTwo;
