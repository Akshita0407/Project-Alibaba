import BuyerText from "../../components/BuyerLeftLayout";

interface ContentProps {
  id: number;
  incrementNumber: string;
  category: string;
}
const content: ContentProps[] = [
  { id: 1, incrementNumber: "190+", category: "countries and regions" },
  { id: 1, incrementNumber: "40+", category: "industries" },
  { id: 1, incrementNumber: "5900+", category: "product categories" },
  { id: 1, incrementNumber: "190", category: "languages translated" },
];

const BuyerFeatureOne = () => {
  return (
    <div
      className="w-full p-6 md:p-15 flex justify-center items-center "
      id="alibaba.com"
    >
      <div className="w-full flex lg:flex-row flex-col gap-[4%]">
        <BuyerText
          description={
            "Alibaba.com is one of the world’s largest wholesale marketplaces, with  20 years of experience helping business-to-business (B2B) companies buy and sell their goods around the world."
          }
          title={"What is Alibaba.com?"}
        />
        <div className="lg:w-[48%] w-full grid grid-cols-2 lg:gap-15 gap-5 py-2">
          {content.map((c) => (
            <div key={c.id} className="flex flex-col gap-2 items-center">
              <p className="text-[#ff6600] lg:text-5xl text-xl font-semibold">
                {c.incrementNumber}
              </p>
              <p className="text-xs lg:text-2xl text-[#666]">{c.category}</p>
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default BuyerFeatureOne;
