import { Link } from "react-router-dom";
interface CardContent {
  id: number;
  link: string;
  imgSrc: string;
  title: string;
  name: string;
  date: string;
  style?: string;
  heading: string;
}

const ReadHomeCardTwo = ({
  id,
  imgSrc,
  title,
  name,
  date,
  link,
  style,
  heading,
}: CardContent) => {
  return (
    <>
      <div
        key={id}
        className={` ${style} w-full flex  justify-center items-center bg-white rounded hover:shadow-md`}
      >
        <div className="w-[70%] flex flex-col gap-2 px-4  py-2">
          <h2 className="text-gray-400  ">{heading}</h2>
          <Link to={link}>
            <h2 className=" text-[12px]  text-[#54595f] font-bold lg:text-[14px] line-clamp-2">
              {title}
            </h2>
          </Link>
          <hr className="text-gray-200" />
          <div className="flex gap-2 text-gray-400 text-[10px]   items-center">
            <p>{name}</p>
            <div className="w-1 h-1 rounded-full aspect-square bg-gray-400"></div>
            <p>{date}</p>
          </div>
        </div>
        <div className="w-[30%] flex justify-center items-center rounded mx-2 ">
          <img
            src={imgSrc}
            alt="image"
            className="object-cover object-center w-[100px] lg:h-[100px] h-[60px] "
          />
        </div>
      </div>
    </>
  );
};

export default ReadHomeCardTwo;
