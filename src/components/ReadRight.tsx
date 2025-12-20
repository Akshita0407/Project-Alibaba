import { Link } from "react-router-dom";
import { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface RightArticle {
  id: number;
  title: string;
  link: string;
}

const ReadRightContent = ({ articles }: { articles: RightArticle[] }) => {
  const [search, setSearch] = useState("");

  const filtered = articles.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  const categoriesDropDown = [
    { id: 1, label: "Apparel & Accessories", to: "/read/categories/apparel" },
    { id: 2, label: "Beauty & Personal Care", to: "/read/categories/beauty" },
    { id: 3, label: "Consumer Electronics", to: "/read/categories/consumer" },
    { id: 4, label: "Home & Garden", to: "/read/categories/homeGarden" },
    { id: 5, label: "Chemicals & Plastics", to: "/read/categories/chemical" },
    {
      id: 6,
      label: "Home Improvement",
      to: "/read/categories/homeImprovement",
    },
    { id: 7, label: "Machinery", to: "/read/categories/machinery" },
    {
      id: 8,
      label: "Mother, Kids & Toys",
      to: "/read/categories/motherKidsToys",
    },
    { id: 9, label: "Packaging & Printing", to: "/read/categories/packaging" },
    { id: 10, label: "Raw Materials", to: "/read/categories/rawMaterial" },
    { id: 11, label: "Renewable Energy", to: "/read/categories/renewable" },
    { id: 12, label: "Sports", to: "/read/categories/sports" },
    {
      id: 13,
      label: "Vehicle Part & Accessories",
      to: "/read/categories/vehicle",
    },
  ];
  return (
    <div className=" w-full flex flex-col gap-6 p-2 text-[#333] ">
      <div className="flex flex-col gap-2">
        <h3>Search</h3>
        <div className="flex gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-2 rounded-md text-sm outline-none"
          />
          <button className="w-[100px] h-10 bg-[#ff6600] text-center ">
            Search
          </button>
        </div>
      </div>
      <div>
        <h3 className="flex flex-col gap-2 font-bold text-3xl my-4">
          Recent Posts
        </h3>

        <div className="flex flex-col gap-2">
          {filtered.map((item) => (
            <div key={item.id} className="w-full flex gap-2 items-center">
          <div className="w-[15%]">    <MdKeyboardDoubleArrowRight className="text-[24px] text-[#333] hover:text-[#ff6600]" /></div>

              <Link to={item.link} className="text-sm hover:text-[#ff6600]">
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="flex flex-col gap-2 font-bold text-3xl my-2">
          Category
        </h3>
        {categoriesDropDown.map((c) => (
          <div key={c.id} className="flex gap-2 items-center">
            <MdKeyboardDoubleArrowRight className="text-[20px] text-[#333] hover:text-[#ff6600]" />
            <Link to={c.to} className="hover:text-[#ff6600]">
              {c.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadRightContent;
