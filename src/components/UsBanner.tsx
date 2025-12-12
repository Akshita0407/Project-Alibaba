import { MdOutlineCheck } from "react-icons/md";
import image1 from "../assets/Banner(2.1).png";
import image2 from "../assets/Banner(2.2).png";
const checkMark = [
  {
    id: 1,
    icon: <MdOutlineCheck />,
    percent: "1",
    text: "storefront in 15 languages",
  },
  {
    id: 2,
    icon: <MdOutlineCheck />,
    percent: "40+",
    text: "million active B2B buyers",
  },
  {
    id: 3,
    icon: <MdOutlineCheck />,
    percent: "0%",
    text: "commission",
  },
];
const boxes = [
  {
    id: 1,
    imgSrc: "",
    title: "Flexible payment plan",
    description:
      "Our new quarterly payment membership plan makes starting your online B2B selling business easier than ever.",
  },
  {
    id: 2,
    imgSrc: "",
    title: "Professional onboarding service",
    description:
      "Free for selected membership, Alibaba.com onboarding service does the work to launch your online store.",
  },
  {
    id: 3,
    imgSrc: "",
    title: "All-in-one B2B selling platform",
    description:
      "With features from keyword advertising, direct messaging, and online payment system to online marketing tools, you can get more done in an efficient manner.",
  },
];

import Button from "./Button";
const UsBanner = () => {
  return (
    <div
      className="w-full flex flex-col p-6 md:p-15 gap-3 "
      style={{
        background: `
          linear-gradient(-150deg, rgb(121, 143, 204), rgba(255, 0, 0, 0) 40%),
          linear-gradient(-200deg, rgb(123, 178, 247), rgba(0, 255, 0, 0) 70.71%),
          linear-gradient(rgb(236, 239, 254), rgb(236, 239, 254) 70.71%)
        `,
      }}
    >
      {/*------------------------ */}
      <div className="w-full flex lg:flex-row gap-3 mb-5">
        {/*----*/}
        <div className="lg:w-[50%] w-full flex flex-col lg:min-h-[600px] min-h-[400px] gap-4">
          <p className="text-[21px]">SELL ON ALIBABA.COM</p>
          <h2 className="text-[50px] text-[#022aa7] font-bold">
            Unleash Infinite Business Opportunities
          </h2>
          <p className="text-[28px] text-[#0077fc]">
            Find new customers across the globe
          </p>
          <p className="text-[14px] mt-2">Starting from</p>
          <div className="flex items-center gap-8">
            <div className="flex items-baseline">
              <span className="text-[#ff6600] text-[70px] leading-none">
                <sup className="text-[40px]">$</sup>166
                <span className="text-[24px] text-black ml-1 align-baseline">
                  /mo
                </span>
              </span>
            </div>
            <Button
              buttonText="Start Selling"
              style="w-[200px]! h-[50px]! rounded-[30px]! bg-[#ff6600]"
            />
          </div>
          <div className="flex flex-col gap-2">
            {checkMark.map((c) => (
              <div key={c.id} className=" flex gap-2 items-center">
                <div className="text-[#022aa7] text-[20px] font-bold">
                  {c.icon}
                </div>
                <p className="text-[24px]">{c.percent}</p>
                <p className="text-[16px]">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
        {/*----*/}
        <div className="lg:w-[50%] w-full flex relative lg:min-h-[600px] min-h-[400px] ">
          <div className="absolute z-15 inset-0 w-[250px] h-[450px] transform translate-y-20">
            <img
              src={image1}
              alt=""
              className="w-full h-full object-contain object-center"
            />
          </div>
          <div className="absolute z-5 inset-0 w-full h-[500px]">
            <img
              src={image2}
              alt=""
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>
      </div>
      {/*------------------------- */}
      <div className="w-full flex lg:flex-row flex-col justify-between">
        {boxes.map((c) => (
          <div
            key={c.id}
            className="bg-white w-[300px] min-h-[350px] flex flex-col p-5 rounded-[10px] gap-5 border border-transparent"
          >
            <div className="w-full h-[100px] border border-transparent rounded-[10px]">
              <img
                src={c.imgSrc}
                alt=""
                className="w-full h-full object-contain object-center border border-transparent rounded-[10px]"
              />
            </div>
            <p className="text-[24px] font-bold">{c.title}</p>
            <p className="text-[16px] text-[#666666]">{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsBanner;
