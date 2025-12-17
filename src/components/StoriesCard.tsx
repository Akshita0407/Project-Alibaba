import { Link } from "react-router-dom";
import type { ReactElement } from "react";

interface StoryContent {
  id: number;
  icon: ReactElement;
  description: string;
  link: string;
  icon2?: ReactElement;
  to: string;
  profileImage: string;
  name: string;
  profile: string;
  work: string;
  iconLab: ReactElement;
  country: string;
  countryName: string;
  image: string;
}

const StoriesCard = ({
  id,
  icon,
  country,
  countryName,
  description,
  iconLab,
  image,
  link,
  name,
  profile,
  profileImage,
  to,
  work,
}: StoryContent) => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <div
          key={id}
          className=" lg:w-[700px] w-full bg-white rounded flex lg:flex-row flex-col-reverse "
        >
          <div className="lg:w-[50%] w-full p-5 flex flex-col gap-2 text-left">
            <div>{icon}</div>
            <p className="text-[16px]">{description}</p>
            {/* <div className="w-full flex justify-end">{icon2}</div> */}
            <Link to={to} className="underline text-[14px] text-[#245bce] my-2">
              {link}
            </Link>
            <div className="flex gap-3 ">
              <div className="w-10 h-10 border shadow-[0_0_15px_rgba(0,0,0,0.15)] border-white rounded-full aspect-square flex justify-center items-center">
                <img
                  src={profileImage}
                  alt=""
                  className="object-cover object-center w-9 h-9 border border-white rounded-full aspect-square"
                />
              </div>
              <div className="flex flex-col text-left text-black">
                <p className="text-[14px] font-semibold">{name}</p>
                <p className="text-[12px] text-[#333]">{profile}</p>
              </div>
            </div>
            <div className="flex  gap-2 text-[12px] text-[#333]  items-center">
              <div>{iconLab}</div>
              <p>{work}</p>
              <div className="w-1 h-1 bg-black rounded-full aspect-square"></div>
              <div className="flex items-center gap-1">
                <img src={country} alt="" className="w-4 h-4" />
                <p>{countryName}</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%]  w-full flex justify-center items-center">
     
              {" "}
              <img
                src={image}
                alt=""
                className="object-cover object-center w-full h-full border border-transparent rounded"
              />
         
          </div>
        </div>
      </div>
    </>
  );
};

export default StoriesCard;
