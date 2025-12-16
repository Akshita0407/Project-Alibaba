import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface FeatureItems {
  id: number;
  icon: ReactNode;
  title: string;
  link: string;
  description: string;
}

interface Content {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  style?: string;
  items: FeatureItems[];
}

const FeatureSectionTwo = ({
  image,
  subtitle,
  title,
  description,
  items,
  style,
}: Content) => {
  return (
    <>
      <div className="w-full flex  justify-center items-center p-6 md:p-15">
        <div
          className={` w-full flex flex-col lg:flex-row lg:gap-[8%] gap-5 ${style}`}
        >
          <div className="w-full   lg:w-[46%] flex justify-center items-center">
            <div className="w-full min-h-[300px]">
              <img
                src={image}
                alt=""
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-3 lg:w-[46%] lg:p-5">
            <div className=" w-full flex flex-col gap-4 lg:p-5 text-[#2f4480]">
              <p className="text-xs md:text-xl text-[#245ecf]  leading-snug">
                {subtitle}
              </p>
              <h2 className="text-2xl md:text-4xl font-bold leading-snug">
                {title}
              </h2>
              <p className="text-xs md:text-[14px] leading-snug">
                {description}
              </p>
            </div>
            <div className="w-full flex flex-col gap-3">
              {items.map((c) => (
                <div key={c.id} className="w-full flex gap-4 items-center">
                  <div className="w-[20%] flex justify-center items-center">
                    <div className="w-20 h-20 text-[#245ecf] flex justify-center items-center text-[40px]">
             
                      {c.icon}
                    </div>
                  </div>
                  <div className="w-[80%] flex flex-col text-left">
                    <Link to={c.link}>
                      <p className="md:text-[16px] text-[14px] font-bold hover:text-[#245ecf]">
                        {c.title}
                      </p>
                    </Link>
                    <p className="md:text-[14px] text-[12px]">
                      {c.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSectionTwo;
