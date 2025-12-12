import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { AiFillPlayCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";

interface SlideContent {
  id: number;
  buttonText: string;
  videoSrc: string;
  title?: string;
  subtitle?: string;
  description: string;
  country: string;
  name: string;
  founder: string;
  imgSrc?: string;
}

const slides: SlideContent[] = [
  {
    id: 1,
    buttonText: "Mother, Kids & Toys",
    videoSrc:
      "https://cloud.video.taobao.com/vod/XfG8eFSHktc3ROofXkVNNPdPL-lckmZXefPW8piy6fs.mp4",
    description: `“Our annual revenue in 2023 was 3 million, after we joined Alibaba.com, In 2024, our exports grew by 8%.”`,
    country: "https://img.icons8.com/color/48/argentina.png",
    name: "Ekaterina Rashidova",
    founder: "PROCARE LLC, Founder",
  },
  {
    id: 2,
    buttonText: "Consumer Electronics",
    videoSrc:
      "https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/452142525563.mp4",
    title: "More than 10 years",
    subtitle: "with Alibaba.com",
    description: `"We attracted 99% of buyers exclusively from Alibaba.com since becoming a Verified Supplier"`,
    country: "https://img.icons8.com/color/48/morocco.png",
    name: "ZHIHUI WU",
    founder: "Mildtrans Industial Co., Limited, General manager",
  },
  {
    id: 3,
    buttonText: "Men's Clothing",
    videoSrc:
      "https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/452625775165.mp4",
    title: "2019",
    subtitle: "joined Alibaba.com",
    description: `“Joining Alibaba.com marks the beginning of a major shift for our company.”`,
    country: "https://img.icons8.com/color/48/thailand.png",
    name: "Nitcharee Ujjin",
    founder: "THUMBINTHAI CO.,LTD., Founder",
  },
  {
    id: 4,
    buttonText: "Jewelry & Accessories",
    videoSrc:
      "https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/439675057541.mp4",
    title: "2019",
    subtitle: "Founded",
    description: `“After being Verified supplier on Alibaba.com, Janak earned more than 20 million INR revenue in last 8 months.”`,
    country: "https://img.icons8.com/color/48/india.png",
    name: "Janak Suhagiya",
    founder: "Gurukrupa Gems , Founder",
  },
  {
    id: 5,
    buttonText: "Sports & Entertainment",
    videoSrc:
      "https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/440185099170.mp4",
    title: "2020",
    subtitle: "Founded",
    description: `“With verified badge, Shamas won the trust of serious buyers and got 20 plus orders in just 3 months.”`,
    country: "https://img.icons8.com/color/48/pakistan.png",
    name: "Shamas Javaid",
    founder: "Yaner Sports, CEO",
  },
  {
    id: 6,
    buttonText: "Gifts & Crafts",
    videoSrc:
      "https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/441385957097.mp4",
    title: "51-100",
    subtitle: "employees",
    description:
      "“By the verified assessment, pioneer shows capacities attracting 6 times inquiries and keeping us on the leading position.”",
    country: "https://img.icons8.com/color/48/morocco.png",
    name: "Hoang Thanh Tam",
    founder: "Indochina JSC, Managing Director",
  },
];

const HomeNine = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState("");
  const topSwiperRef = useRef<SwiperType | null>(null);
  const bottomSwiperRef = useRef<SwiperType | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const openVideo = (videoSrc: string) => {
    setCurrentVideoSrc(videoSrc);
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="w-full flex flex-col p-6 md:p-15 gap-8">
      <h1 className="font-bold text-[32px] md:text-[58px] lg:text-[58px]">
        Real businesses, real results
      </h1>

      <Swiper
        className="w-full h-auto"
        slidesPerView={6}
        spaceBetween={15}
        onSwiper={(swiper) => (topSwiperRef.current = swiper)}
        breakpoints={{
          320: { slidesPerView: 2 },
          780: { slidesPerView: 2 },
          1024: { slidesPerView: 6 },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <button
              className={`py-3 cursor-pointer text-[12px] lg:text-[15px] flex justify-center items-center ${
                activeSlide === slide.id
                  ? "border border-b-4 font-bold border-black border-x-0 text-black border-t-0"
                  : "text-[#767676]"
              }`}
              onClick={() => {
                setActiveSlide(slide.id);
                bottomSwiperRef.current?.slideTo(slide.id - 1);
              }}
            >
              {slide.buttonText}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-15">
        <Swiper
          className="w-full h-auto"
          spaceBetween={10}
          slidesPerView={1}
          onSwiper={(swiper) => (bottomSwiperRef.current = swiper)}
          onSlideChange={(swiper) =>
            setActiveSlide(slides[swiper.realIndex].id)
          }
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="w-full border rounded-[10px] bg-linear-to-r from-[#2a2929] to-[#cfcece] relative"
            >
              {slide.imgSrc && slide.imgSrc.length > 0 && (
                <img
                  src={slide.imgSrc}
                  className="absolute inset-0 w-full h-full z-0 object-cover"
                />
              )}

              <div className="flex lg:flex-row flex-col-reverse w-full items-center">
                <div className="lg:w-[60%] w-full flex flex-col gap-4 text-white lg:pl-15 px-8 py-10">
                  <h2 className="md:text-[44px] text-[20px] font-semibold">
                    {slide.title}
                  </h2>

                  <p className="md:text-[16px] text-[14px]">{slide.subtitle}</p>

                  <p className="md:text-[44px] text-[20px] font-semibold leading-none">
                    {slide.description}
                  </p>

                  <div className="flex flex-col">
                    <img src={slide.country} className="w-10 h-10" alt="flag" />
                    <p className="font-semibold md:text-[16px] text-[14px]">
                      {slide.name}
                    </p>
                    <p className="lg:text-[16px] text-[14px]">
                      {slide.founder}
                    </p>
                  </div>
                </div>

                <div
                  className="p-15 lg:min-h-[600px] min-h-[300px] lg:w-[40%] w-full flex justify-center items-center cursor-pointer"
                  onClick={() => openVideo(slide.videoSrc)}
                >
                  <AiFillPlayCircle className="w-20 h-20 text-white" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isVideoOpen && (
        <div
          className="fixed  inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center p-4"
          onClick={closeVideo}
        >
          <div
            className="relative  w-full max-w-[70%] "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white"
            >
              <ImCross className="w-8 h-8" />
            </button>

            <video
              ref={videoRef}
              src={currentVideoSrc}
              controls
              autoPlay
              className="w-full h-auto rounded"
            ></video>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeNine;
