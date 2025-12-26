import BuyerCard from "./BuyerCard";
import Button from "../../components/Button";

interface FeatureProps {
  title: string;
  cards: CardItem[];
  buttonText?: string;
}
interface CardItem {
  id: number;
  image: string;
  title: string;
  source: string;
  date: string;
  duration: string;
  to: string;
}

const BuyerFeatureCard = ({
  title,
  cards,
  buttonText = "See more",
}: FeatureProps) => {
  return (
    <div className="w-full flex justify-center items-center p-6 md:p-15 text-[#333333] bg-[#f2f3f7]">
      <div className="w-full flex flex-col items-center gap-6 lg:gap-15">
        <h1 className="text-2xl md:text-5xl font-semibold">{title}</h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
          {cards.map((card) => (
            <BuyerCard key={card.id} {...card} />
          ))}
        </div>

        <Button
          buttonText={buttonText}
          style="bg-white! w-[150px]! border! border-[#ff6600]! rounded-[30px]! text-[#ff6600]!"
        />
      </div>
    </div>
  );
};

export default BuyerFeatureCard;
