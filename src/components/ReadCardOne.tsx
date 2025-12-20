import { BsChevronDoubleRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";

interface CardContent {
  title: string;
  description: string;
  category?: string; 
}

const ReadCardOne = ({
  title,
  description,
  category = "Category",
}: CardContent) => {
  return (
    <div className="w-full bg-white flex flex-col gap-3 p-10">
      
      <div className="w-full flex gap-1 items-center">
        <span>
          <NavLink to="/read" className="text-[18px] font-semibold">
            Home
          </NavLink>
        </span>
        <div className="flex items-center mt-1">
          <BsChevronDoubleRight fontSize={11} color="gray" />
        </div>
        <span className="text-[#4b4f58] text-[14px]">Product Resource</span>
        <div className="flex items-center mt-1">
          <BsChevronDoubleRight fontSize={11} color="gray" />
        </div>
        <span className="text-[#4b4f58] text-[14px]">{category}</span>
      </div>

      <hr className="text-gray-400" />

    
      <div className="flex flex-col mt-2 gap-4">
        <h2 className="font-semibold lg:text-3xl text-xl text-[#3a3a3a] ">
          {title}
        </h2>
        <p className="text-[#4b4f58]">{description}</p>
      </div>
    </div>
  );
};

export default ReadCardOne;
