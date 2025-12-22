import { IoSearch } from "react-icons/io5";
import ReadHomeCard from "../../components/ReadHomeCard";
import ReadHomeCardTwo from "../../components/ReadHomeCardTwo";

const HomeOne = () => {
  return (
    <div className="w-full md:p-15 p-6 flex flex-col gap-5 text-[#333]">
      {/*----------------------------- */}
      <div className="w-full flex md:flex-row flex-col gap-5 items-center">
        <div className="md:w-[80%] w-full flex flex-col gap-2">
          <h1 className="lg:text-5xl text-2xl font-semibold">
            Alibaba.com Reads
          </h1>
          <p className="lg:text-[20px] text-sm font-semibold">
            Your source for industry knowledge, news, and expert insights
          </p>
        </div>

        <div className="md:w-[20%] w-full">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-10 rounded-full bg-white border-2 border-gray-300 pl-4 pr-10 focus:outline-none"
            />
            <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
          </div>
        </div>
      </div>
      {/*----------------------------- */}
      <div className="w-full flex flex-col">
        <h2 className="lg:text-4xl text-xl text-[#54595f] mb-3  font-bold">
          Latest Posts
        </h2>
        <div className="flex lg:flex-row flex-col gap-[2%] grid-cols-1">
          <div className="lg:w-[60%] flex flex-col gap-5 my-5 ">
            <ReadHomeCard
              date="12/21/2025"
              imgSrc="https://img.baba-blog.com/2025/12/Engine-Thermostats.jpg?x-oss-process=style%2Fmedium"
              link=""
              name="Vivian"
              title="Review Analysis of Amazon's Hottest Selling Engine Thermostats in the USA"
            />
          </div>
          <div className="lg:w-[38%] w-full flex flex-col mt-5">
            <ReadHomeCardTwo
              date="12/21/2025"
              imgSrc="https://img.baba-blog.com/2025/12/Engine-Thermostats.jpg?x-oss-process=style%2Fmedium"
              link=""
              name="Vivian"
              title="	Stay On-Platform, Stay Protected: A Practical Guide to Secure 	"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOne;
