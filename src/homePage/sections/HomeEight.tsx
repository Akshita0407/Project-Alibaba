import HomeBoxes from "../../components/HomeBoxes";

const contentTwo = [
  {
    id: 1,
    imgSrc: "",
    title: "Cocreate 2025 - Alibaba.com Unveils AI Mode",
    description:
      "Alibaba.com unveils AI Mode at CoCreate Europe, embedding agentic AI into B2B user journeys to revolutionize global trade efficiency and decision-making.",
    buttonText: "View Details",
  },
  {
    id: 2,
    imgSrc: "",
    title: "Alibaba.com Releases 'Trade Assurance' in South Korea",
    description:
      "Alibaba.com launches Trade Assurance in Korea with Escrow payments and data-driven arbitration, empowering SMEs to expand globally. Offers fee waivers for new sellers, 50% discounts for Premium members, and localized support via Seoul/Busan offices.",
    buttonText: "View Details",
  },
  {
    id: 3,
    imgSrc: "",
    title: "Strategic partnership with NCPD on Saudi dates",
    description:
      "Alibaba.com designates Saudi dates companies as Verified Suppliers to enhance their export potential, in collaboration with the National Center of Palms and Dates (NCPD).",
    buttonText: "View Details",
  },
];

const HomeEight = () => {
  return (
    <>
      <HomeBoxes
        title="Empowering businesses at international events
"
        items={contentTwo}
      ></HomeBoxes>
    </>
  );
};

export default HomeEight;
