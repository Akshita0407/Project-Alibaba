import ReadMain from "../../components/ReadMain";
import ReadCardOne from "../../components/ReadCardOne";
import ReadCardTwo from "../../components/ReadCardTwo";
import ReadRightContent from "../../components/ReadRight";

const homeGardenArticles = [
  {
    id: 1,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/10/Small-flower-fridge-with-various-types-of-cut-flowers-inside.jpg?x-oss-process=style%2Fmedium_large",
    title: "Breaking the Most Popular Types of Flower Fridge",
    by: "Gizchina",
    description:
      "Flower fridges are an effective way to store and keep cut flowers fresh for longer periods. Read on to discover their key features in 2025.",
  },
  {
    id: 2,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/10/Woman-in-kitchen-using-rubber-plunger-on-sinks-drain.jpg?x-oss-process=style%2Fmedium_large",
    title: "The Best Drain Clog Remover Tools for Home Use",
    by: "Gizchina",
    description:
      "Drain clog remover tools are essential products to have at home. Discover the best products on the market.",
  },
  {
    id: 3,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/10/Drawer-in-kitchen-with-modern-silverware-organizer-inside.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "How to Choose the Best Silverware Organizer for Your Business Needs",
    by: "Gizchina",
    description:
      "Different silverware organizers come with their own specific features. Find out more about each style to source for your business.",
  },
  {
    id: 4,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/08/Simple-bedroom-with-wooden-furniture.jpg?x-oss-process=style%2Fmedium_large",
    title: "Home and Garden Trends According to Global Trade Shows",
    by: "Gizchina",
    description:
      "The top upcoming home and garden trends could be seen at trade shows across the world this year.",
  },
  {
    id: 5,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/08/Woman-using-large-sponge-to-buffer-stainless-steel-sink.jpg?x-oss-process=style%2Fmedium_large",
    title: "Kitchen Sink Cleaners: How to Choose the Best One",
    by: "Gizchina",
    description:
      "Knowing which kitchen sink cleaner to use is essential for maintaining a clean and safe kitchen environment.",
  },
  {
    id: 6,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/08/Vertical-farming-towers-in-a-greenhouse.jpg?x-oss-process=style%2Fmedium_large",
    title: "Aeroponic Towers: What Are They and Which Work Best",
    by: "Gizchina",
    description:
      "There are a variety of aeroponic towers available on the market – discover which are the best to attract more customers.",
  },
  {
    id: 7,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/08/Electric-pepper-mill-with-stainless-steel-and-modern-technology.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Electric Pepper Grinders: Everything You Need to Know About This Modern Kitchen Tool",
    by: "Gizchina",
    description:
      "There are many questions surrounding the importance of rinse aid and how to use it effectively.",
  },
  {
    id: 8,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/08/Woman-pouring-rinse-aid-into-a-dishwashers-compartment.jpg?x-oss-process=style%2Fmedium_large",
    title: "What is Rinse Aid? Everything You Need to Know",
    by: "Gizchina",
    description:
      "There are many questions surrounding the importance of rinse aid and how to use it effectively.",
  },
  {
    id: 9,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/08/A-couple-opening-a-panel-ready-fridge.jpg?x-oss-process=style%2Fmedium_large",
    title: "Panel-Ready Fridges: 5 Superb Faves Worth Stocking in 2026",
    by: "Gizchina",
    description:
      "Panel-ready fridges hide in plain sight, helping to keep any kitchen sleek and spacious. Explore five customer favorites.",
  },
  {
    id: 10,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/08/A-3D-render-of-a-rotating-display-stand.jpg?x-oss-process=style%2Fmedium_large",
    title: "Rotating Display Stands: 8 Features to Consider When Buying",
    by: "Gizchina",
    description:
      "Rotating display stands are an excellent way to showcase products for marketing or creating simple displays.",
  },
];

const HomeAndGarden = () => {
  return (
    <ReadMain
      leftCardOne={
        <ReadCardOne
          category="Home & Garden"
          title="Home & Garden"
          description="Sourcing insights, design inspiration, and market trends for the home and garden industry."
        />
      }
      leftCardsTwo={homeGardenArticles.map((article) => (
        <ReadCardTwo key={article.id} {...article} />
      ))}
      rightContent={<ReadRightContent articles={homeGardenArticles} />}
    />
  );
};

export default HomeAndGarden;
