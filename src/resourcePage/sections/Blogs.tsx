import { useState, type ReactElement } from "react";
import LatestArticles from "./LatestArticles";
import SmeBeginners from "./SmeBeginners";

interface BtnContent {
  id: number;
  button: string;
}

const content: BtnContent[] = [
  { id: 1, button: "Latest Articles" },
  { id: 2, button: "For SME Beginners" },
  { id: 3, button: "Export Import Tips" },
  { id: 4, button: "B2B Trends" },
  { id: 5, button: "Wholesale Tips" },
  { id: 6, button: "Seller Guides" },
  { id: 7, button: "Trade Terms" },
  { id: 8, button: "News" },
];

interface BlogContent {
  id: number;
  content: ReactElement;
}

const blogContent: BlogContent[] = [
  { id: 1, content: <LatestArticles /> },
  { id: 2, content: <SmeBeginners /> },
];
const Blogs = () => {
  const [active, setActive] = useState<number>(1);

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-3xl md:text-5xl font-bold leading-snug">
        Blog Articles
      </h2>

      {/* -------Buttons------- */}
      <div className="flex flex-row flex-wrap gap-3">
        {content.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`px-5 h-12 border text-sm rounded-[30px] transition
              ${
                active === c.id
                  ? "border-2 border-black font-bold"
                  : "border-gray-300 text-[#333]"
              }`}
          >
            {c.button}
          </button>
        ))}
      </div>

      {/*--------- Content------ */}
      <div className="my-6 lg:p-4">
        {blogContent.find((c) => c.id === active)?.content}
      </div>
    </div>
  );
};

export default Blogs;
