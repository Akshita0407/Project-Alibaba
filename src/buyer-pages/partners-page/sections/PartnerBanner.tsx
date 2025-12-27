import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

interface BannerContent {
  id: number;
  image?: string;
  title: string;
  description: string;
  buttontext: string;
  hreftext: string;
  to: string;
}
const content: BannerContent[] = [
  {
    id: 1,
    image: "image",
    title: "Helium 10",
    description:
      "Product research and sourcing is now smarter and simpler with this Chrome Extension featuring a demand analyzer and supplier finder.",
    buttontext: "Product research",
    hreftext: "Learn more",
    to: "",
  },
  {
    id: 2,
    image: "image",
    title: "Alibaba.com Dropshipping",
    description: "The Alibaba.com dropshipping solution is now live!",
    buttontext: "Dropshipping",
    hreftext: "Learn more",
    to: "",
  },
  {
    id: 3,
    image: "image",
    title: "Ecwid",
    description:
      "Ecwid Ecommerce is the easiest way to start selling anywhere. Manage your online store from a single dashboard with centralized inventory, order management, and pricing.",
    buttontext: "Storefronts",
    hreftext: "Learn more",
    to: "",
  },
];

const PartnerBanner = () => {
  return (
    <div className="w-full h-auto md:px-15 p-6 text-[#333]  flex justify-center items-center bg-[#e0f1f5]">
      <div className="w-full  min-h-[250px] flex justify-center  items-center">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          className="w-full min-h-[250px] flex justify-center items-center"
        >
          {content.map((c) => (
            <SwiperSlide key={c.id}>
              <div className="w-full flex lg:flex-row flex-col-reverse lg:gap-[10%] gap-5">
                <div className="lg:w-[50%] w-full flex flex-col gap-3">
                  <Button
                    buttonText={c.buttontext}
                    style="bg-[#666]! hover:bg-[#424141]! text-white! w-[150px]! text-[16px]!"
                  />
                  <Link to={c.to} className="">
                    <h3 className="lg:text-[36px] text-2xl font-semibold">
                      {c.title}
                    </h3>
                  </Link>

                  <span className="lg:text-[16px] text-[14px] text-[#666]">
                    {c.description}
                    <span className="text-[#ff6600]">
                      <Link to={c.to}> {c.hreftext} </Link>
                    </span>
                  </span>
                </div>
                <div className="lg:w-[40%] w-full relative ">
                  <div className="absolute inset-0 lg:min-h-[300px] min-h-[200px]">
                    <img
                      src={c.image}
                      alt="image"
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnerBanner;
