const DetailsSections = () => {
  const text = [
    {
      id: 1,
      image:
        "https://s.alicdn.com/@img/imgextra/i1/O1CN01UhxyXu1bCWwiGV0yQ_!!6000000003429-2-tps-500-500.png",
      title: "Online store",
      desc: "Display your products with a virtual storefront that you can customize how you want and translated into 15 languages with AI-powered tools — no coding required.",
    },
    {
      id: 2,
      image:
        "https://s.alicdn.com/@img/imgextra/i3/O1CN01cW1Ao01Cf3DNkn4k7_!!6000000000107-2-tps-510-500.png",
      title: "Sales growth",
      desc: "Stand out from competitors with potent marketing tools that put your products at the top of searches.",
    },
    {
      id: 3,
      image:
        "https://s.alicdn.com/@img/imgextra/i1/O1CN0161DbiV1cRTU8NOxZA_!!6000000003597-2-tps-510-500.png",
      title: "0% sales commission",
      desc: "Keep what you earn — Alibaba.com doesn't take a cut from your success.",
    },
    {
      id: 4,
      image:
        "https://s.alicdn.com/@img/imgextra/i1/O1CN01odXeCJ1feFNadWtKO_!!6000000004031-2-tps-510-500.png",
      title: "24/7 live support",
      desc: "Speak to us for expert guidance from Alibaba.com's US team that's tailored to your business every step of the way.",
    },
  ];

  return (
    <div className="w-full py-10 my-10 bg-ts-white flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {text.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailsSections;

interface cardProps {
  id: number;
  title: string;
  image: string;
  desc: string;
}

const Card: React.FC<cardProps> = ({ title, image, desc }) => {
  return (
    <div className="w-full flex flex-col items-center text-center px-4">
      <img
        src={image}
        alt={title}
        className="w-[65px] h-[65px] object-contain mb-4 opacity-80"
      />

      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <p className="text-sm text-ts-grey leading-relaxed">{desc}</p>
    </div>
  );
};
