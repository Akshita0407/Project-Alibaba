interface Benefits {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
}
const content: Benefits[] = [
  {
    id: 1,
    imgSrc: "",
    title: "Increase sales",
    description:
      "Half of all B2B transactions are already happening online. B2B sellers must embrace the shift and adopt to a digital solution that can quickly generate sales in a cost-efficient way",
  },
  {
    id: 2,
    imgSrc: "",
    title: "Save money",
    description:
      "Use your budget that was reserved for expensive traditional trade shows and invest it into an ecommerce marketplace like Alibaba.com.",
  },
  {
    id: 3,
    imgSrc: "",
    title: "Save time",
    description:
      "Spend less time cold-calling leads, traveling to trade shows, and organizing lengthy catalogs. Let buyers meet your products digitally.",
  },
  {
    id: 4,
    imgSrc: "",
    title: "Showcase your brand and capabilities",
    description:
      "Own one digital storefront that showcases the best of your production, products, and brands to an international audience.",
  },
];
const SolutionTwo = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 p-6 md:p-15">
      <div className="lg:w-[60%] flex flex-col justify-center items-center text-center gap-3 text-[#2f4480]">
        <h3 className="text-2xl md:text-3xl">Key benefits of B2B ecommerce</h3>
        <p className="text-xs lg:text-[14px]">
          B2B ecommerce takes traditional sales methods to the next level.
          Wholesale distributors, manufacturers, and traders can seize the
          opportunity and stay ahead.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-15">
        {content.map((c) => (
          <div className="lg:min-w-[300px] w-full lg:p-4 flex flex-col gap-4" key={c.id}>
            <div className="">
              <img
                src={c.imgSrc}
                alt=""
                className="w-full h-full object-contain object-center"
              />
            </div>
            <h3 className="text-[14px] md:text-[16px] font-semibold">
              {c.title}
            </h3>
            <p className="text-[12px] md:text-[14px] text-[#333]">
              {c.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionTwo;
