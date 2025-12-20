import ReadMain from "../../components/ReadMain";
import ReadCardOne from "../../components/ReadCardOne";
import ReadCardTwo from "../../components/ReadCardTwo";
import ReadRightContent from "../../components/ReadRight";

const articles = [
  {
    id: 2,
    link: "",
    minutes: "6",
    imgSrc:
      "https://img.baba-blog.com/2025/12/best-mousse-for-curly-hair.jpg?x-oss-process=style%2Fmedium_large",
    title: "Professional Guide: Best Mousses for Every Curl Pattern",
    by: "Oriana",
    description:
      "Transform your curls from frizzy to fabulous with the perfect mousse for your texture. Expert-backed recommendations for all curl types, from loose waves to tight coils, plus application tips for salon-worthy results.",
  },
  {
    id: 3,
    link: "",
    minutes: "8",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Boat-Anchor.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Boat Anchors in the USA",
    by: "Vivian",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling boat covers in the USA.",
  },
  {
    id: 4,
    link: "",
    minutes: "11",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Black-and-Silver-Car-Stereo-with-Bluetooth.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Marine Pumps in the USA",
    by: "Vivian",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling boat covers in the USA.",
  },
  {
    id: 5,
    link: "",
    minutes: "6",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Light-Strawberry-Blonde.jpg?x-oss-process=style%2Fmedium_large",
    title: "Professional Guide: Best Mousses for Every Curl Pattern",
    by: "Oriana",
    description:
      "Transform your curls from frizzy to fabulous with the perfect mousse for your texture. Expert-backed recommendations for all curl types, from loose waves to tight coils, plus application tips for salon-worthy results.",
  },
  {
    id: 6,
    link: "",
    minutes: "8",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Woman-in-a-Hair-Salon.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Boat Anchors in the USA",
    by: "Vivian",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling boat covers in the USA.",
  },
  {
    id: 7,
    link: "",
    minutes: "11",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Split-Dye-Hair.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Marine Pumps in the USA",
    by: "Vivian",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling boat covers in the USA.",
  },
  {
    id: 8,
    link: "",
    minutes: "6",
    imgSrc:
      "https://img.baba-blog.com/2025/12/best-mousse-for-curly-hair.jpg?x-oss-process=style%2Fmedium_large",
    title: "Professional Guide: Best Mousses for Every Curl Pattern",
    by: "Oriana",
    description:
      "Transform your curls from frizzy to fabulous with the perfect mousse for your texture. Expert-backed recommendations for all curl types, from loose waves to tight coils, plus application tips for salon-worthy results.",
  },
  {
    id: 9,
    link: "",
    minutes: "8",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Boat-Cover.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Boat Anchors in the USA",
    by: "Vivian",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling boat covers in the USA.",
  },
];

const ProductResource = () => {
  return (
    <div>
      <ReadMain
        leftCardOne={
          <ReadCardOne
            title="Products Sourcing"
            description="Transform your look with trending light blue hair colors, from icy pastels to dimensional aqua hues. Master colorist-approved techniques and find your perfect shade in this comprehensive guide."
          />
        }
        leftCardsTwo={articles.map((c) => (
          <ReadCardTwo
            key={c.id}
            id={c.id}
            by={c.by}
            description={c.description}
            imgSrc={c.imgSrc}
            link={c.link}
            minutes={c.minutes}
            title={c.title}
          />
        ))}
        rightContent={<ReadRightContent articles={articles} />}
      />
    </div>
  );
};

export default ProductResource;
