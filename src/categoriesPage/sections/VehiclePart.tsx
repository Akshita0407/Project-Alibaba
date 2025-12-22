import ReadMain from "../../components/ReadMain";
import ReadCardOne from "../../components/ReadCardOne";
import ReadCardTwo from "../../components/ReadCardTwo";
import ReadRightContent from "../../components/ReadRight";

const vehicleResources = [
  {
    id: 1,
    link: "",
    minutes: "8",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Pinion-Gears.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Pinion Gears in the USA",
    by: "Vivian",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling pinion gears in the USA.",
  },
  {
    id: 2,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Marine-Pumps.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Marine Pumps in the USA",
    by: "Gizchina",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling marine pumps in the USA.",
  },
  {
    id: 3,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Boat-Anchor.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Boat Anchors in the USA",
    by: "Gizchina",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling boat anchors in the USA.",
  },
  {
    id: 4,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Marine-Hardware.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Marine Hardware in the USA",
    by: "Gizchina",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling marine hardware products in the USA.",
  },
  {
    id: 5,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Black-and-Silver-Car-Stereo-with-Bluetooth.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Bluetooth Car Kit in the US",
    by: "Gizchina",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling Bluetooth car kit in the US.",
  },
  {
    id: 6,
    link: "",
    minutes: "8",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Panel-Control.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Car Central Locking System in the US",
    by: "Vivian",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling car central locking systems in the US.",
  },
  {
    id: 7,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/12/The-future-of-mobility-autonomous-driving-technology-in-action.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Car Head Up Displays in the US",
    by: "Gizchina",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling car head up displays in the US.",
  },
  {
    id: 8,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Boat-Cover.jpg?x-oss-process=style%2Fmedium_large",
    title: "Review Analysis of Amazon’s Hottest Selling Boat Covers in the USA",
    by: "Gizchina",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling boat covers in the USA.",
  },
  {
    id: 9,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/11/Motorcycle-Meters.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Motorcycle Meters in the USA",
    by: "Gizchina",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling motorcycle meters in the USA.",
  },
];

const VehiclePart = () => {
  return (
    <ReadMain
      leftCardOne={
        <ReadCardOne
          category="Vehicle Parts & Accessories"
          title="Vehicle Parts & Accessories"
          description="Sourcing insights and market trends for the vehicle parts and accessories industry."
        />
      }
      leftCardsTwo={vehicleResources.map((item) => (
        <ReadCardTwo key={item.id} {...item} />
      ))}
      rightContent={<ReadRightContent articles={vehicleResources} />}
    />
  );
};

export default VehiclePart;
