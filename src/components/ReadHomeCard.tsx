import { Link } from "react-router-dom";
interface CardContent {
  media: string;
  title: string;
  author: string;
  date: string;
  style?: string;
}

const ReadHomeCard = ({
  media,
  title,
  author,
  date,

  style,
}: CardContent) => {
  return (
    <>
      <div
        className={` ${style} w-full flex flex-col  items-center bg-white rounded hover:shadow-md`}
      >
        <div className="w-full flex justify-center items-center rounded  ">
          <img
            src={media}
            alt="image"
            className="w-full h-full object-cover object-center rounded-t "
          />
        </div>
        <div className="w-full flex flex-col gap-2 py-4">
          <Link to="">
            <h2 className="px-4 py-2 text-[14px] text-[#54595f] font-bold lg:text-[18px] hover:text-[#ff6600] line-clamp-2">
              {title}
            </h2>
          </Link>
          <hr className="text-gray-200" />
          <div className="flex gap-2 text-gray-400 text-xs px-4 py-2 items-center">
            <p>{author}</p>
            <div className="w-1 h-1 rounded-full aspect-square bg-gray-400"></div>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadHomeCard;
