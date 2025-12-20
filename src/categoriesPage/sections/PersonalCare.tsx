import ReadMain from "../../components/ReadMain";
import ReadCardOne from "../../components/ReadCardOne";
import ReadCardTwo from "../../components/ReadCardTwo";
import ReadRightContent from "../../components/ReadRight";

const personalCareArticles = [
  {
    id: 1,
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
    id: 2,
    link: "",
    minutes: "7",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Light-Strawberry-Blonde.jpg?x-oss-process=style%2Fmedium_large",
    title: "Light Strawberry Blonde: A Guide to the Rising Shade",
    by: "Oriana",
    description:
      "Master the delicate art of light strawberry blonde formulation and market positioning.",
  },
  {
    id: 3,
    link: "",
    minutes: "6",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Portrait-of-Pretty-Girl.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "1940s Hairstyling: A Modern Guide to Vintage Glamour for Everyday Wear",
    by: "Anoshia Riaz",
    description:
      "Learn how to create stunning 1940s-inspired hairstyles with modern tools and techniques.",
  },
  {
    id: 4,
    link: "",
    minutes: "6",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Woman-in-a-Hair-Salon.jpg?x-oss-process=style%2Fmedium_large",
    title: "Feathered Hair: A Chic Revival for Modern Styles",
    by: "Krista Plociennik",
    description:
      "Discover how the iconic feathered haircut has evolved into a versatile modern style.",
  },
  {
    id: 5,
    link: "",
    minutes: "15",
    imgSrc:
      "https://img.baba-blog.com/2025/09/Young-Woman-in-a-Denim-Jacket.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Plus Size Women’s Jackets",
    by: "Lela",
    description:
      "An in-depth analysis of top-selling plus-size jackets based on customer reviews.",
  },
  {
    id: 6,
    link: "",
    minutes: "6",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Burgundy-vs-Maroon-Hair.jpg?x-oss-process=style%2Fmedium_large",
    title: "Choose Your Red: Burgundy vs Maroon Hair Guide",
    by: "Willa",
    description:
      "Master the subtle differences between burgundy and maroon hair colors.",
  },
  {
    id: 7,
    link: "",
    minutes: "14",
    imgSrc:
      "https://img.baba-blog.com/2025/12/High-Top-Dreads.jpg?x-oss-process=style%2Fmedium_large",
    title: "High Top Dreads: Complete Style and Planning Guide",
    by: "Anoshia Riaz",
    description:
      "Learn how to plan, create, and maintain high top dreads with this comprehensive guide.",
  },
  {
    id: 8,
    link: "",
    minutes: "8",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Mushroom-Blonde-Hair.jpg?x-oss-process=style%2Fmedium_large",
    title: "The Complete Guide to Mushroom Blonde Hair Color Trend",
    by: "Krista Plociennik",
    description:
      "Explore the sophisticated world of mushroom blonde – a cool-toned, versatile hair color.",
  },
  {
    id: 9,
    link: "",
    minutes: "6",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Magenta-Hair.jpg?x-oss-process=style%2Fmedium_large",
    title: "Ultimate Style Guide: How to Rock Magenta Hair",
    by: "Krista Plociennik",
    description:
      "Discover stunning magenta hair transformations, from subtle highlights to bold statement looks.",
  },
  {
    id: 10,
    link: "",
    minutes: "7",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Golden-Brown-Hair.jpg?x-oss-process=style%2Fmedium_large",
    title: "The Golden Brown Hair Revolution: Your Complete Style Guide",
    by: "Krista Plociennik",
    description:
      "Navigate the golden brown hair trend with expert insights and maintenance tips.",
  },
];

const PersonalCare = () => {
  return (
    <ReadMain
      leftCardOne={
        <ReadCardOne
          category="Beauty & Personal Care"
          title="Beauty & Personal Care"
          description="Sourcing insights, style inspiration, and market trends for the beauty and personal care industry."
        />
      }
      leftCardsTwo={personalCareArticles.map((article) => (
        <ReadCardTwo key={article.id} {...article} />
      ))}
      rightContent={<ReadRightContent articles={personalCareArticles} />}
    />
  );
};

export default PersonalCare;
