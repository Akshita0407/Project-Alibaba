import type { ReactElement } from "react";
import Button from "../../components/Button";
import { FaQuoteLeft } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import image from "../../assets/Stories.png";
import { Link } from "react-router-dom";
interface StoryContent {
  id: number;
  icon: ReactElement;
  description: string;
  link: string;
  to: string;
  profileImage: string;
  name: string;
  profile: string;
  work: string;
  iconLab: ReactElement;
  country?: ReactElement;
  image: string;
}

const content: StoryContent[] = [
  {
    id: 1,
    icon: <FaQuoteLeft />,
    description:
      "40% of our total orders come from Alibaba.com and I have just closed a 1 million euro deal with a Russian buyer. Compare what we spend on Alibaba.com, the investment is next to nothing.",
    link: "Read more",
    to: "",
    profileImage: "",
    name: "Luca",
    profile: "Owner",
    iconLab: <FaRegBuilding />,
    work: "Lab Evolution",
    image: image,
  },
];
const SolutionFour = () => {
  return (
    <div className="w-full flex  justify-center items-center bg-[#f2f4f8] text-[#2f4480] p-6 md:p-15">
      <div className="w-full flex flex-col justify-center text-center gap-10">
        <h3 className="text-2xl md:text-3xl font-bold  ">
          Hear from successful Alibaba.com sellers
        </h3>
        {/*---*/}
        <div className="w-full flex flex-col justify-center items-center gap-5">
          {content.map((c) => (
            <div
              key={c.id}
              className=" lg:w-[700px] w-full bg-white rounded flex lg:flex-row flex-col-reverse "
            >
              <div className="lg:w-[50%] w-full p-5 flex flex-col gap-5 text-left">
                <div>{c.icon}</div>
                <p>{c.description}</p>
                <Link to={c.to}>{c.link}</Link>
                <div className="flex gap-3">
                  <div>
                    <img
                      src={c.profile}
                      alt=""
                      className="object-contain object-center w-5 h-6"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <p>{c.name}</p>
                    <p>{c.profile}</p>
                  </div>
                </div>
                <div className="flex">
                  <div>{c.iconLab}</div>
                  <p>{c.profile}</p>
                  <div>*</div>
                  <div>flag</div>{" "}
                </div>
              </div>
              <div className="lg:w-[50%]   w-full flex justify-center items-center">
               <img
                  src={c.image}
                  alt=""
                  className="object-contain object-center w-full h-full"
                /></div>
      
            </div>
          ))}
        </div>
        {/*---*/}
        <div className="w-full flex justify-center items-center">
          <Button
            buttonText="More Stories"
            style="bg-transparent! border border-[#245bce]!  w-[180px]! rounded-[30px] text-[16px]! text-[#245bce]! "
          />
        </div>
      </div>
    </div>
  );
};

export default SolutionFour;
