import { Link } from "react-router-dom";

interface FooterContent {
  id: number;
  title: string;
  links: { label: string; to: string }[];
}

const content: FooterContent[] = [
  {
    id: 1,
    title: "Platform",
    links: [
      { label: "How to sell on Alibaba.com", to: "" },
      { label: "Gain buyer leads", to: "" },
      { label: "Become a Verified Supplier (VS)", to: "" },
    ],
  },
  {
    id: 2,
    title: "Solutions",
    links: [
      { label: "Explore key features", to: "" },
      { label: "Launch your online store", to: "" },
      { label: "Advertise your business", to: "" },
      { label: "Showcase your products", to: "" },
      { label: "Get local support", to: "" },
      { label: "Global New Seller Camp", to: "" },
      { label: "Become an AGS lecturer", to: "" },
      { label: "Verified Supplier Leadership Camp", to: "" },
    ],
  },
  {
    id: 3,
    title: "Resources",
    links: [
      { label: "Read our blog", to: "" },
      { label: "Success stories", to: "" },
      { label: "News", to: "" },
      { label: "Industry reports", to: "" },
      { label: "Product Trends", to: "" },
      { label: "Playbooks", to: "" },
      { label: "Webinars", to: "" },
    ],
  },
  {
    id: 4,
    title: "Support",
    links: [{ label: "Help center", to: "" }],
  },
];

const Footer1 = () => {
  return (
    <>
      <div className="w-full p-6 md:p-15">
        <div className=" w-full flex lg:flex-row flex-col justify-between  gap-5  ">
          {content.map((c) => (
            <div
              key={c.id}
              className="w-[300px] text-[16px] flex flex-col gap-5"
            >
              <h2 className="font-bold ">{c.title}</h2>
              {c.links?.map((l) => (
                <Link key={l.label} to={l.to}>
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer1;
