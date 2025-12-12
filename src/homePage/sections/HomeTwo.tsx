import type { ReactElement } from "react";
import { FaEarthAsia } from "react-icons/fa6";
import { LuLayers } from "react-icons/lu";
import { MdHeadsetMic } from "react-icons/md";

interface BoxContent {
  id: number;
  icon: ReactElement;
  title: string;
  description: string;
}
const content: BoxContent[] = [
  {
    id: 1,
    icon: <FaEarthAsia className="w-6 h-6" />,
    title: "Global sales reach",
    description:
      "Expand your online sales channels and presence by joining our massive B2B reverse auction, sign up for sourcing events, and reach buyers through data-driven marketing.",
  },
  {
    id: 2,
    icon: <LuLayers className="w-6 h-6" />,
    title: "All-in-one AI tools",
    description:
      "Do everything in one integrated workspace. Manage your storefront and products, get advanced buyer insights, and speed up operations with super-efficient AI tools.",
  },
  {
    id: 2,
    icon: <MdHeadsetMic className="w-6 h-6" />,
    title: "1-on-1 local support",
    description:
      "Get real-time onboarding, operational, and analytical support from an Account Manager local to you. Also enjoy quarterly consultations and personalized strategies on how to be more competitive in your industry.",
  },
];

const HomeTwo = () => {
  return (
    <div className="w-full h-auto bg-black p-6 md:p-15 flex flex-col gap-5 text-white">
      <div>
        <h3 className="text-[28px] md:text-[44px] font-bold pb-8">
          One platform, unlimited business potential
        </h3>
        <div className="flex flex-wrap md:gap-12 gap-6 w-full items-center">
          <div className="w-fit flex flex-col ">
            <p className="text-[44px] md:text-[64px] font-bold text-[#b5d3ff]">
              50M+{" "}
            </p>
            <p className="text-[14px] md:text-[16px]">active buyers</p>
          </div>
          <div className="w-fit flex flex-col ">
            <p className="text-[44px]  md:text-[64px]  font-bold text-[#b5d3ff]">
              500K+
            </p>
            <p className="text-[14px] md:text-[16px]">daily inquiries</p>
          </div>
          <div className="w-fit flex flex-col">
            <p className="text-[44px]  md:text-[64px]  font-bold text-[#b5d3ff]">
              200+
            </p>
            <p className="text-[14px] md:text-[16px]">
              buyer countries and regions
            </p>
          </div>
        </div>
      </div>
      {/*---*/}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 my-3 gap-5">
        {content.map((c) => (
          <div
            key={c.id}
            className="w-auto min-h-80 py-8  px-5 flex flex-col gap-3 bg-[#070E28FF] border-transparent border rounded-[10px] hover:border-[#3d53b3] cursor-pointer hover:bg-[#152466]"
          >
            <div className="w-18 h-18 rounded-full aspect-square border border-transparent  bg-[#1d2d72] flex justify-center items-center ">
              <div className="w-12 h-12 rounded-full aspect-square border border-transparent  bg-[#3d53b3] flex justify-center items-center ">
                {c.icon}
              </div>
            </div>
            <h2 className="text-[20px] font-semibold">{c.title}</h2>
            <p className="text-[18px]">{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTwo;
