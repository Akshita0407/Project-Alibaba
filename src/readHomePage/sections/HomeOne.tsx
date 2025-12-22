import { IoSearch } from "react-icons/io5";
import ReadHomeCard from "../../components/ReadHomeCard";
import ReadHomeCardTwo from "../../components/ReadHomeCardTwo";

const articles = [
  {
    id: 1,
    heading: "Latest News",
    date: "21 Dec 2025",
    imgSrc:
      "https://img.baba-blog.com/2025/12/3.png?x-oss-process=style%2Fthumbnail",
    link: "",
    name: "The Alibaba.com Team",
    title:
      "Stay On-Platform, Stay Protected: A Practical Guide to Secure Your Trading on Alibaba.com",
  },
  {
    id: 2,
    heading: "Latest News",
    date: "21 Dec 2025",
    link: "",
    imgSrc:
      "https://img.baba-blog.com/2025/12/google-vs-apple-69262b7c96f2f-1.png?x-oss-process=style%2Fthumbnail",
    name: "Vivian",
    title: "Google and Apple Team up to Make Switching Phones Easy",
  },
  {
    id: 3,
    heading: "Latest News",
    date: "21 Dec 2025",
    imgSrc:
      "https://img.baba-blog.com/2025/12/imagem-2025-11-30-230902020-692cf8c892f0f-9.png?x-oss-process=style%2Fthumbnail",
    link: "",
    name: "Vivian",
    title: "Intel’s Trumph Card: Apple to Rely on Intel Foundry for Apple M7",
  },
  {
    id: 4,
    heading: "Latest News",
    date: "21 Dec 2025",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Engine-Thermostats.jpg?x-oss-process=style%2Fmedium",
    link: "",
    name: "Vivian",
    title:
      "Amazfit Active Max Leaks With Huge Battery Promising 25 Days of Life",
  },
];

const HomeOne = () => {
  return (
    <div className="w-full md:p-15 p-6 flex flex-col gap-5 text-[#333]">
      {/*----------------------------- */}
      <div className="w-full lg:flex hidden gap-5 items-center">
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
              media="https://img.baba-blog.com/2025/12/Engine-Thermostats.jpg?x-oss-process=style%2Fmedium"
              author="Vivian"
              title="Review Analysis of Amazon's Hottest Selling Engine Thermostats in the USA"
            />
          </div>
          <div className="lg:w-[38%] w-full flex flex-col mt-5 gap-2">
            {articles.map((c) => (
              <ReadHomeCardTwo key={c.id} {...c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOne;
