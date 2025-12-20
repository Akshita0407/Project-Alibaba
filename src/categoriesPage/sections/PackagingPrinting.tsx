import ReadMain from "../../components/ReadMain";
import ReadCardOne from "../../components/ReadCardOne";
import ReadCardTwo from "../../components/ReadCardTwo";
import ReadRightContent from "../../components/ReadRight";

const packagingPrintingResources = [
  {
    id: 1,
    link: "",
    minutes: "8",
    imgSrc:
      "https://img.baba-blog.com/2024/11/Cardboard-boxes-on-floor-near-entrance.jpg?x-oss-process=style%2Fmedium_large",
    title: "Market Pressures Drive Packaging and Label Changes",
    by: "Packaging-gateway.com",
    description:
      "Evolving consumer and regulatory demands are driving changes in packaging design, materials, and operations, fuelled by sustainability and e-commerce growth.",
  },
  {
    id: 2,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/packaging-for-fast-food.jpg?x-oss-process=style%2Fmedium_large",
    title: "The Rise of Folding Cartons in Plastics Substitution",
    by: "Packaging-gateway.com",
    description: " ",
  },
  {
    id: 3,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/packaging-for-fast-food.jpg?x-oss-process=style%2Fmedium_large",
    title: "The Rise of Folding Cartons in Plastics Substitution",
    by: "Packaging-gateway.com",
    description:
      "With continued innovations in design and materials, folding cartons are poised to play a significant role in the ongoing transition away from plastics.",
  },
  {
    id: 4,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/packaging-carton-box.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Data, Carbon and Recycling: What 2025 Holds for Sustainable Packaging",
    by: "Packaging-gateway.com",
    description:
      "The year 2025 will mark a turning point for sustainable packaging, driven by new regulations and heightened global scrutiny.",
  },
  {
    id: 5,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/Restaurant-healthy-food-delivery.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "UK Startup To Introduce World’s First Bark Packaging To Replace Plastics",
    by: "Packaging-gateway.com",
    description:
      "The packaging, made from up to 80% industrial byproducts, promises to reduce waste and extend the shelf life of perishable products.",
  },
  {
    id: 6,
    link: "",
    minutes: "8",
    imgSrc:
      "https://img.baba-blog.com/2024/12/why-aluminium-foil-remains-a-packaging-staple_00.jpg?x-oss-process=style%2Fmedium_large",
    title: "Why Aluminium Foil Remains a Packaging Staple",
    by: "Packaging-gateway.com",
    description:
      "Praised for its durability, adaptability, and recyclability, aluminium foil safeguards products while advancing sustainability.",
  },
  {
    id: 7,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/exploring-packaging-types-the-evolution-of-packag_00.jpg?x-oss-process=style%2Fmedium_large",
    title: "Exploring Packaging Types: The Evolution of Packaging Solutions",
    by: "Packaging-gateway.com",
    description:
      "A look at the most prominent packaging types—flexible, rigid, and sustainable—each shaping the future of industries worldwide.",
  },
];

const PackagingPrinting = () => {
  return (
    <ReadMain
      leftCardOne={
        <ReadCardOne
          category="Packaging & Printing"
          title="Packaging & Printing"
          description="Sourcing insights and market trends for the packaging and printing industry."
        />
      }
      leftCardsTwo={packagingPrintingResources.map((item) => (
        <ReadCardTwo key={item.id} {...item} />
      ))}
      rightContent={<ReadRightContent articles={packagingPrintingResources} />}
    />
  );
};

export default PackagingPrinting;
