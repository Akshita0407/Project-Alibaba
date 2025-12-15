import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

interface SliderContent {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  name: string;
  position: string;
}
const content: SliderContent[] = [
  {
    id: 1,
    title: "Trusted by US suppliers",
    imgSrc: "",
    description:
      "Alibaba.com is able to connect us right away with buyers that are interested in our products, that are in the buying mode.",
    name: "Nicole Fadden",
    position: "Director of Marketing and Sales, Restore Naturals ",
  },
  {
    id: 2,
    title: "Trusted by US suppliers",
    imgSrc: "",
    description:
      "I'm selling product in UAE, Saudi Arabia, Great Britain, and a host of others. We wouldn't have reached those customers without Alibaba.com.",
    name: "Denny Haag",
    position: "CEO, Strategic Visionary Solutions LLC",
  },
  {
    id: 3,
    title: "Trusted by US suppliers",
    imgSrc: "",
    description:
      "Working with Alibaba's team is probably the most remarkable part of dealing with Alibaba.com. You're dealing with a human.",
    name: "Josh Lefkovitz",
    position: "President, Pain Management Technologies Inc",
  },
  {
    id: 4,
    title: "Trusted by US suppliers",
    imgSrc: "",
    description:
      "Alibaba.com have helped me every step of the way and have been so invested in my success.",
    name: "Toyiah Marquis",
    position: " Founder, Patch Party Club",
  },
  {
    id: 5,
    title: "Trusted by US suppliers",
    imgSrc: "",
    description:
      "We're cultivating and growing relationships with these companies that we would have never had exposure to if it wasn't for Alibaba.com.",
    name: "Adam Greenberg",
    position: "President, Concession King LLC",
  },
];

const HomeEight = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="w-full md:p-15 p-6 flex justify-center items-center bg-linear-to-b from-[#95c4fc] to-[#e8eefe]">
      <div className="w-[80%] min-h-[400px] items-center text-center ">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={1}
          className="w-full h-auto"
        >
          {content.map((c) => (
            <SwiperSlide
              key={c.id}
              className="w-full h-auto flex flex-col items-center "
            >
              <h3 className="text-xs md:text-xl font-bold">{c.title}</h3>
              <div className="flex lg:flex-row flex-col gap-3 my-15">
                <div className="lg:w-[50%] w-full flex   ">
                  <div className="w-full h-auto">
                    <img
                      src="img"
                      alt=""
                      className="w-full h-full object-center object-contain"
                    />
                  </div>
                </div>
                <div className="lg:w-[50%] w-full lg:pr-20 flex flex-col">
                  <h2 className="text-xl lg:text-2xl font-semibold text-[#022AA7] justify-start items-start text-left leading-snug">
                    {c.description}
                  </h2>
                  <div className="w-full ml-5 mt-4 flex gap-2 items-center">
                    <div className="w-[15%] h-0.5 bg-[#1047F5] "></div>
                    <div className="flex flex-col justify-start text-left mt-4">
                      <p className="text-[#1047F5] text-xs lg:text-xl">
                        {c.name}
                      </p>
                      <p className="text-[12px] font-semibold text-[#333]">
                        {c.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-6 mt-6 ">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="text-4xl text-[#1047F5] hover:scale-110 transition cursor-pointer"
          >
            <IoIosArrowDropleft />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="text-4xl text-[#1047F5] hover:scale-110 cursor-pointer transition"
          >
            <IoIosArrowDropright />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeEight;
