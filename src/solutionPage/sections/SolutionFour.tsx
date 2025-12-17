import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import image from "../../assets/Stories.png";
import image2 from "../../assets/profileImage.png";
import flag from "../../assets/flag.png";
import StoriesCard from "../../components/StoriesCard";
import Button from "../../components/Button";
const SolutionFour = () => {
  return (
    <div className="w-full flex  justify-center items-center bg-[#f2f4f8] text-[#2f4480] p-6 md:p-15">
      <div className="w-full flex flex-col justify-center text-center gap-10">
        <h3 className="text-2xl md:text-3xl font-bold  ">
          Hear from successful Alibaba.com sellers
        </h3>
        {/*---*/}
        <div className=" w-full flex flex-col ">
          <StoriesCard
            id={1}
            icon={<FaQuoteLeft />}
            icon2={<FaQuoteRight />}
            description="40% of our total orders come from Alibaba.com and I have just closed a 1 million euro deal with a Russian buyer. Compare what we spend on Alibaba.com, the investment is next to nothing."
            link="Read more"
            to=""
            profileImage={image2}
            name="Luca"
            profile="Owner"
            iconLab={<FaRegBuilding />}
            work="Lab Evolution"
            image={image}
            countryName="Italy"
            country={flag}
          />
          <div className="w-full flex justify-center items-center">
            <Button
              buttonText="More Stories"
              style="bg-transparent! border border-[#245bce]!  w-[180px]! rounded-[30px] text-[16px]! text-[#245bce]! "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionFour;
