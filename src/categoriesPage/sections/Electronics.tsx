import ReadMain from "../../components/ReadMain";
import ReadCardOne from "../../components/ReadCardOne";
import ReadCardTwo from "../../components/ReadCardTwo";
import ReadRightContent from "../../components/ReadRight";

const electronicsArticles = [
  {
    id: 1,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/12/ulefone-rugking-3-pro-1-692f05bb10272-2.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Ulefone Rugking 3 Pro Unboxing: a Slim, All-Round Budget Rugged Phone",
    by: "Gizchina",
    description:
      "Ulefone RugKing 3 Pro unboxing reveals a slim, 6.56-inch rugged phone with 2m drop/water resistance, 48MP camera, 5,700mAh battery, and 120-lumen torch—starting at $119.99.",
  },
  {
    id: 2,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/12/imagem-2025-11-30-234042500-692d00354ef28-6.png?x-oss-process=style%2Fmedium_large",
    title:
      "Iphone 17 Pro Max Running Ipados 26 Is the Latest Experiment of a Brave Enthusiast",
    by: "Gizchina",
    description:
      "A daring modder runs iPadOS 26 on an iPhone 17 Pro Max—floating windows, menu bar, and desktop-like external display support revealed.",
  },
  {
    id: 3,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/12/xiaomi-17-ultra-6936a2b4939cf.png?x-oss-process=style%2Fmedium_large",
    title:
      "Xiaomi 17 Ultra Photos Leaked, Showing a Triple Rear Camera Setup With a New Design",
    by: "Gizchina",
    description:
      "Xiaomi 17 Ultra leaks reveal a bold rectangular camera module, triple 50MP/200MP/50MP lenses, Snapdragon 8 Gen 5 Extreme, and a massive 6000–7000mAh battery.",
  },
  {
    id: 4,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/12/imagem-2025-12-10-000648793-6938e3d990a0b.png?x-oss-process=style%2Fmedium_large",
    title:
      "Realme Narzo 90 and 90x Specs Confirmed: 7000mah Battery, 60w Charging and 144hz Super-Bright Displays",
    by: "Gizchina",
    description:
      "Realme Narzo 90 and 90x unveiled: 7000mAh batteries, 60W charging, 144Hz displays, dual 50MP cameras, and IP66/IP68/IP69 ratings.",
  },
  {
    id: 5,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/12/imagem-2025-11-30-233229915-692cfe482d74a-1.png?x-oss-process=style%2Fmedium_large",
    title: "Samsung Galaxy Tab A11+ Launched in India With Dimensity 7300",
    by: "Gizchina",
    description:
      "Samsung Galaxy Tab A11+ launches in India with 11-inch 90Hz display, Dimensity 7300, 7 years of updates, and up to 8GB RAM—starting at ₹22,999.",
  },
  {
    id: 6,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/12/imagem-2025-12-03-001613447-692fab822b504.png?x-oss-process=style%2Fmedium_large",
    title: "Redmi Note 15 4g Emerges - Coming With Helio G100 and Hyperos 2.0",
    by: "Gizchina",
    description:
      "Redmi Note 15 4G leaks with Helio G100, 108MP camera, 6,000mAh battery, AMOLED display, and HyperOS 2.0—priced at $199.90 in Europe.",
  },
  {
    id: 7,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/12/imagem-2025-12-06-192413888-6934ad15dfdb3.png?x-oss-process=style%2Fmedium_large",
    title: "Samsung Galaxy S26 Series: Biggest Redesign Has Been Confirmed",
    by: "Gizchina",
    description:
      "Samsung confirms Galaxy S26 series’ biggest redesign yet: a unified Fold-inspired camera island and softer Ultra edges.",
  },
  {
    id: 8,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/12/poco-x8-pro-max-693945fb56b69.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Poco F8 Is Dead: Meet the New Flagship Killer, the Poco X8 Pro Max!",
    by: "Gizchina",
    description:
      "POCO F8 canceled—replaced by the groundbreaking POCO X8 Pro Max, the brand’s first “Pro Max” flagship killer with elite specs and bold new naming strategy.",
  },
  {
    id: 9,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/12/screen-shot-2025-12-04-at-12-693167d08f84d.png?x-oss-process=style%2Fmedium_large",
    title:
      "Nubia Flip3 Announced: Stylish Foldable Gets Dimensity Power and a Big Outer Screen",
    by: "Gizchina",
    description:
      "Nubia Flip3 unveiled: sleek clamshell foldable with 4-inch OLED cover screen, Dimensity 7400X, AI features, IP5X/IPX4 rating, and Android 15.",
  },
  {
    id: 10,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/12/coffee-brown-iphone-690e6606aba78-3.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Strong Iphone 17 Sales Boost 2025 Shipments, but Memory Shortage Threatens 2026",
    by: "Gizchina",
    description:
      "Strong iPhone 17 sales drive 2025 smartphone growth to 1.5%, but a global memory shortage and delayed base iPhone model threaten a 0.9% decline in 2026 shipments.",
  },
];

const Electronics = () => {
  return (
    <ReadMain
      leftCardOne={
        <ReadCardOne
          category="Consumer Electronics"
          title="Consumer Electronics"
          description="Sourcing insights and market trends for the consumer electronics industry."
        />
      }
      leftCardsTwo={electronicsArticles.map((article) => (
        <ReadCardTwo key={article.id} {...article} />
      ))}
      rightContent={<ReadRightContent articles={electronicsArticles} />}
    />
  );
};

export default Electronics;
