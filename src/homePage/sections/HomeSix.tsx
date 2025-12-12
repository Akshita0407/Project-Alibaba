import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

interface SlideContent {
  id: number;
  videoSrc: string;
  title: string;
  description: string;
  link?: string;
  linkto?: string;
}
const slides: SlideContent[] = [
  {
    id: 1,
    videoSrc:
      "https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/447213071453.mp4",
    title: "Create a storefront",
    description:
      "Designed for you to start selling immediately, our streamlined interface lets you create your online store, the way you envision it. Set up shop and reach new markets in any corner of the world.",
    link: "Learn More",
  },
  {
    id: 2,
    videoSrc:
      "https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/447115254288.mp4",
    title: "List your products",
    description:
      "Our product listing feature gets your products online, in no time. Also, access AI tools that leverage big data to create more comprehensive, impactful listing content. You can generate compelling descriptions and professional videos with just a few clicks!",
    link: "Test out for free",
  },
  {
    id: 3,
    videoSrc:
      "https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/447219247068.mp4",
    title: "Get advanced data analytics",
    description:
      "Access detailed data on your products, buyers, and industry, and make better business decisions by implementing our personalized recommendations on how to optimize your products and store.",
    link: "Learn more",
  },
  {
    id: 4,
    videoSrc:
      "https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/447217795514.mp4",
    title: "Explore generative AI tools",
    description:
      "Your all-rounder assistant, Smart Assistant, helps you work smarter and faster. Supercharge your productivity with: AI-generated message replies, real-time translations, spelling and grammar checks, smart RFQ matching, product analysis, and many more features..",
  },
];
const HomeSix = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <>
      <div className="w-full md:pt-15 py-6 bg-black flex flex-col justify-center ">
        <h1 className=" px-6 md:px-15 text-[32px] md:text-[58px] text-white lg:text-center font-bold">
          Access all-in-one AI tools
        </h1>
        <div className="w-full h-auto ">
          {/*--- Button Swiper ---*/}
          <div className="w-full px-6 md:p-15 ">
            <Swiper
              className="w-full h-auto"
              slidesPerView={4}
              spaceBetween={30}
              loop
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                320: { slidesPerView: 2 },
                780: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <button
                    className={`py-3 font-bold cursor-pointer ${
                      activeSlide === slide.id
                        ? "border border-b-4 border-[#b5d3ff] border-x-0 border-t-0 text-[#b5d3ff]"
                        : "text-[#ffffffb3]"
                    }`}
                    onClick={() => {
                      setActiveSlide(slide.id);
                      swiperRef.current?.slideToLoop(slide.id - 1);
                    }}
                  >
                    {slide.title}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/*--- Slide Swiper ---*/}
          <div className="w-full p-0 ">
            <Swiper
              className="w-full h-auto"
              loop
              centeredSlides
              spaceBetween={10}
              slidesPerView={"auto"}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) =>
                setActiveSlide(slides[swiper.realIndex].id)
              }
              style={{ padding: "0% 20%" }}
            >
              {slides.map((slide) => (
                <SwiperSlide
                  key={slide.id}
                  className=" min-w-[320px]  relative "
                >
                  <div
                    className={`absolute inset-0  rounded-3xl ${
                      activeSlide === slide.id ? "bg-black/0" : "bg-black/40"
                    }`}
                  ></div>
                  <div className="flex flex-col gap-4 p-1">
                    <div className="border border-transparent rounded-[10px]">
                      <video
                        src={slide.videoSrc}
                        className="border border-transparent rounded-[10px] w-full h-full"
                        autoPlay
                        playsInline
                        muted
                      ></video>
                    </div>
                    <div className="flex flex-col gap-3 text-white">
                      <h2 className="text-[32px] font-bold">{slide.title}</h2>
                      <p className="text-[16px] text-[#ffffffcc]">
                        {slide.description}
                      </p>
                      <a href={slide.linkto} className="underline">
                        {slide.link}
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSix;
