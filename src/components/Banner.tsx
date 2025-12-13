import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ImCross } from "react-icons/im";
import { IoPlayCircleOutline } from "react-icons/io5";
import Button from "./Button";

interface BannerContent {
  id: number;
  videoSrc?: string;
  title: string;
  description: string;
  watchVideo?: string;
}

const content: BannerContent[] = [
  {
    id: 1,
    videoSrc:
      "https://cloud.video.taobao.com/vod/c7_rJw3P6tJDKmwnMmf5NZJukpLak77DNzS_NQWUUv8.mp4",
    title: "Sell on Alibaba.com",
    description: "Scale up your business and go global with one membership",
    watchVideo: "w",
  },
  {
    id: 2,
    title:
      "Sell D2C and B2B with your own AI-powered storefront! Launch your Wix store using your Alibaba.com credentials and unlock exclusive tools, discounts, and global growth.",
    description: "Discover the Alibaba.com × WIX Partnership",
  },
];

const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="w-full relative h-auto flex justify-center items-center">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        className="w-full h-auto flex justify-center items-center"
      >
        {content.map((c) => (
          <SwiperSlide key={c.id}>
            <div className="relative w-full h-[90vh] lg:h-screen flex justify-center items-center">
              {c.videoSrc && (
                <video
                  src={c.videoSrc}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                />
              )}

              <div className="absolute inset-0 bg-black/50 z-10"></div>

              <div
                className=" h-full  absolute top-0 left-0 md:w-full  z-40
                lg:p-20 p-6 flex flex-col justify-center items-center 
                text-center text-white  gap-5 my-5 text-wrap"
              >
                <h3 className="text-[16px] md:text-[32px] font-bold">
                  {c.title}
                </h3>

                <h1 className=" text-[26px] leading-none lg:text-6xl font-bold py-4">
                  {c.description}
                </h1>

                {c.videoSrc && (
                  <>
                    <button
                      onClick={() => setShowVideo(!showVideo)}
                      className="flex items-center cursor-pointer "
                    >
                      <IoPlayCircleOutline className="w-[30px] h-[30px]" />

                      <span className="ml-2 text-[16px] md:text-[32px]">
                        Watch 2 min Video
                      </span>
                    </button>
                    {showVideo && (
                      <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/70">
                        <div className="relative w-full max-w-[70%] p-2 bg-black rounded">
                          <div className="flex justify-end">
                            <ImCross
                              className="cursor-pointer text-white text-[40px] p-2"
                              onClick={() => setShowVideo(false)}
                            />
                          </div>
                          <video
                            src={c.videoSrc}
                            className="w-full h-auto rounded"
                            controls
                            autoPlay
                            muted
                          />
                        </div>
                      </div>
                    )}
                  </>
                )}

                <Button buttonText="Start Selling Now" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
