import Button from "./Button";

interface BoxContent {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

interface InsightBoxesProps {
  title: string;
  items: BoxContent[];
}

const HomeBoxes = ({ title, items }: InsightBoxesProps) => {
  return (
    <div className="flex flex-col w-full p-6 md:p-15">
      <h1 className="text-[26px] leading-none lg:text-6xl font-bold">
        {title}
      </h1>

      <div className="w-full flex lg:flex-row flex-col gap-4 justify-between mt-15">
        {items.map((c) => (
          <div
            key={c.id}
            className="min-h-[300px]  md:w-[360px] flex flex-col gap-3"
          >
            <img
              src={c.imgSrc}
              alt="Image"
              className="object-center object-contain"
            />

            <h3 className="lg:text-[28px] text-[20px] font-semibold">
              {c.title}
            </h3>
            <p className="lg:text-[16px] text-[14px] text-[#666666]">
              {c.description}
            </p>

            <Button
              buttonText={c.buttonText}
              style="border border-black! bg-white hover:bg-gray-200 text-black! text-[16px]! font-bold!"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBoxes;
