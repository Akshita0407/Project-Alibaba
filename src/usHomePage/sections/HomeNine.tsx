import { Link } from "react-router-dom";

interface BoxContent {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
  to: string;
}

const content: BoxContent[] = [
  {
    id: 1,
    imgSrc: "image",
    title: "Manufacturer",
    description:
      "Help other business owners accomplish their production goals by lending them your superior manufacturing capability. Offer white or private labeling services and create an additional revenue stream for your business.",
    to: "",
  },
  {
    id: 2,
    imgSrc: "image",
    title: "Wholesale distributor",
    description:
      "Leverage your access to in-demand products by selling on our platform. Reach millions of active buyers who are looking for a stable business partner to grow alongside.",
    to: "",
  },
  {
    id: 3,
    imgSrc: "image",
    title: "Small business owner",
    description:
      "Get your products noticed by potential buyers with the massive reach and trust associated with the Alibaba.com name. Scale up your business with guidance from our online B2B trading experts.",
    to: "",
  },
];
const HomeNine = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-5 w-full p-6 md:p-15">
      <h2></h2>
      {content.map((c) => (
        <>
          <div className="flex flex-col min-w-[260px] p-6">
            <div className=" w-[90%]">
              <div className="w-full min-h-[200px] justify-center items-center">
                <Link to={c.to}>
                  <img
                    src={c.imgSrc}
                    alt=""
                    className="w-full h-full object-center object-contain"
                  />
                </Link>
              </div>
            </div>

            <div className="w-[90%] flex flex-col gap-5">
              <Link to={c.to}>
                <h3 className="w-full font-bold text-xl lg:text-2xl">
                  {c.title}
                </h3>
              </Link>
              <p className="w-full text-xs lg:text-[16px] text-[#666]">
                {c.description}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default HomeNine;
