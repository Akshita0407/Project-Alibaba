import ReadMain from "../../components/ReadMain";
import ReadCardOne from "../../components/ReadCardOne";
import ReadCardTwo from "../../components/ReadCardTwo";
import ReadRightContent from "../../components/ReadRight";

const rawMaterialResources = [
  {
    id: 1,
    link: "",
    minutes: "8",
    imgSrc:
      "https://img.baba-blog.com/2024/02/turkey-officially-announced-to-extend-the-kkdik-r_00.png?x-oss-process=style%2Fmedium_large",
    title:
      "Turkey Officially Announced To Extend the KKDIK Registration Deadlines",
    by: "www.cirs-group.com",
    description:
      "On December 23, 2023, Turkey officially announced to extend the KKDIK registration deadline of December 31, 2023, by up to seven years, between 2026 and 2030 depending on the tonnage band and the hazard classification. Earlier in November, a draft text proposed to gradually extend the KKDIK registration deadlines was submitted to the NGO.",
  },
  {
    id: 2,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/02/chinas-metal-market-chinas-h1-steel-exports-jump-_00.jpg?x-oss-process=style%2Fmedium_large",
    title: "China’s Metal Market: China’s H1 Steel Exports Jump 31% YoY",
    by: "MySteel",
    description:
      "China’s H1 steel exports jump 31% YoY. Find out more about what is happening in the Chinese steel market.",
  },
  {
    id: 3,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/02/chinas-metal-market-chinas-jan-may-steel-exports-_00.jpg?x-oss-process=style%2Fmedium_large",
    title: "China’s Metal Market: China’s Jan-May Steel Exports Leap 41% YoY",
    by: "MySteel",
    description:
      "China’s Jan-May steel exports leap 41% YoY. Find out more about what is happening in the Chinese steel market.",
  },
  {
    id: 4,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2023/05/rolls-of-wire-mesh-fencing-stacked-on-top-of-each-other.jpeg?x-oss-process=style%2Fmedium_large",
    title: "Welded or Woven Wire Mesh: Which Is Right for You?",
    by: "www.cirs-group.com",
    description:
      "Metal wire mesh is a useful tool for a wide range of industries. Read on to learn the differences between welded and woven wire mesh and how they can be used to bolster your business.",
  },
  {
    id: 5,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/02/chinas-metal-market-steel-stocks-at-chinese-trade_00.jpg?x-oss-process=style%2Fmedium_large",
    title: "China’s Metal Market: Steel Stocks at Chinese Traders Decline",
    by: "www.cirs-group.com",
    description:
      "Steel stocks at Chinese traders decline. Find out more about what is happening in the Chinese steel market.",
  },
  {
    id: 6,
    link: "",
    minutes: "8",
    imgSrc:
      "https://img.baba-blog.com/2023/04/gray-iron-steel-rods-1.jpeg?x-oss-process=style%2Fmedium_large",
    title: "China’s Metal Market: China’s Jan-Mar Steel Exports Soar 53.2% YoY",
    by: "www.cirs-group.com",
    description:
      "China’s Jan-Mar steel exports soar 53.2% YoY. Find out more about what is happening in the Chinese steel market.",
  },
  {
    id: 7,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/02/chinas-metal-market-march-to-see-chinas-iron-ore-_00.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "China’s Metal Market: March To See China’s Iron Ore Fundamentals Improve",
    by: "www.cirs-group.com",
    description:
      "March to see China’s iron ore fundamentals improve. Find out more about what is happening in the Chinese steel market.",
  },
  {
    id: 8,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/02/chinas-metal-market-steel-prices-up-sales-dull_00.jpg?x-oss-process=style%2Fmedium_large",
    title: "China’s Metal Market: Steel Prices Up, Sales Dull",
    by: "www.cirs-group.com",
    description:
      "China’s steel prices and iron ore prices up. Find out more about what is happening in the Chinese steel market.",
  },
  {
    id: 9,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/02/chinas-metal-market-steel-demand-appears-robust_00.jpg?x-oss-process=style%2Fmedium_large",
    title: "China’s Metal Market: Steel Demand Appears Robust",
    by: "www.cirs-group.com",
    description:
      "China’s steel demand appears robust after China’s National Holiday. Find out more about what is happening in the Chinese steel market.",
  },
];

const RawMaterial = () => {
  return (
    <ReadMain
      leftCardOne={
        <ReadCardOne
          category="Raw Materials"
          title="Raw Materials"
          description="Sourcing insights and market trends for the raw material industry."
        />
      }
      leftCardsTwo={rawMaterialResources.map((item) => (
        <ReadCardTwo key={item.id} {...item} />
      ))}
      rightContent={<ReadRightContent articles={rawMaterialResources} />}
    />
  );
};

export default RawMaterial;
