import StoriesCard from "../../components/StoriesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import image from "../../assets/Stories.png";
import image2 from "../../assets/profileImage.png";
import flag from "../../assets/flag.png";
import { Pagination } from "swiper/modules";
import Button from "../../components/Button";
import andrea from "../../assets/andrea.png";
import chad from "../../assets/chad.png";

const content = [
  {
    id: 1,
    description:
      "I did not expect much at first in terms of sales results, but then I started to receive serious inquiries and messages for our messages for our messages for  products.",
    link: "Read more",
    to: "",
    profileImage: image2,
    name: "Luca",
    profile: "Owner",
    work: "Lab Evolution",
    image: image,
    countryName: "Italy",
    country: flag,
  },
  {
    id: 2,
    description:
      "40% of our total orders come from Alibaba.com and I have just closed  1 million euro deal with buyer. Compare what  spend on Alibaba.com, the investment is next to nothing.",
    link: "Read more",
    to: "",
    profileImage: andrea,
    name: "Andrea Vitiello",
    profile: "Owner",
    work: "Davia",
    image: andrea,
    countryName: "Italy",
    country: flag,
  },
  {
    id: 3,
    description:
      "We're revolutionizing and order products from around the world. I feel like we're on the frontier of something new with Alibaba.com.",
    link: "Read more",
    to: "",
    profileImage: chad,
    name: "Chad Michael",
    profile: "Chief Technology Ofﬁcer",
    work: "LTA International Global Services LLC",
    image: chad,
    countryName: "United States",
    country: flag,
  },
];

const PlatformFour = () => {
  return (
    <>
      <div className="w-full flex  justify-center items-center bg-[#f2f4f8] text-[#2f4480] p-6 md:p-15">
        <div className="w-full flex flex-col justify-center text-center gap-10">
          <h3 className="text-2xl md:text-3xl font-bold  ">
            Success stories from Alibaba.com sellers
          </h3>
          {/*---*/}
          <div className="flex flex-col mt-5 gap-8 ">
            <div className="w-full flex justify-center">
              <Swiper
                modules={[Pagination]}
                className=" w-full lg:min-h-[380px]"
                spaceBetween={30}
                // navigation
                pagination={{ clickable: true }}
                slidesPerView={1}
              >
                {content.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="lg:w-[700px] h-auto min-h-[600px] lg:min-h-[300px]"
                  >
                    <StoriesCard
                      id={item.id}
                      icon={<FaQuoteLeft />}
                      icon2={<FaQuoteRight />}
                      description={item.description}
                      link={item.link}
                      to={item.to}
                      profileImage={item.profileImage}
                      name={item.name}
                      profile={item.profile}
                      iconLab={<FaRegBuilding />}
                      work={item.work}
                      image={item.image}
                      countryName={item.countryName}
                      country={item.country}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-full flex justify-center items-center">
              <Button
                buttonText="More Stories"
                style="bg-transparent! border border-[#245bce]!  w-[180px]! rounded-[30px] text-[16px]! text-[#245bce]! m-0!"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformFour;
