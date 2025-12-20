import ReadMain from "../../components/ReadMain";
import ReadCardOne from "../../components/ReadCardOne";
import ReadCardTwo from "../../components/ReadCardTwo";
import ReadRightContent from "../../components/ReadRight";

const apparelArticles = [
  {
    id: 1,
    link: "",
    minutes: "6",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Three-people-wearing-male-graduation-caps-on-campus.jpg?x-oss-process=style%2Fmedium_large",
    title: "5 Epic Ways to Style Male Graduation Caps in 2026",
    by: "Krista Plociennik",
    description:
      "Do guys really like to decorate their grad caps? Here’s a look at some popular ways that male graduation caps are being styled in 2026.",
  },
  {
    id: 2,
    link: "",
    minutes: "6",
    imgSrc:
      "https://img.baba-blog.com/2025/12/Straw-beach-bag-on-towel-next-to-straw-sun-hat.jpg?x-oss-process=style%2Fmedium_large",
    title: "How to Choose the Best Materials for Beach Bags",
    by: "Krista Plociennik",
    description:
      "Every material that beach bags are designed with comes with their own pros and cons.",
  },
  {
    id: 3,
    link: "",
    minutes: "6",
    imgSrc:
      "https://img.baba-blog.com/2025/11/Wide-angle-view-of-an-empty-fashion-studio.jpg?x-oss-process=style%2Fmedium_large",
    title: "Choosing Mannequins for Clothing Design Models",
    by: "Anoshia Riaz",
    description:
      "If you’re into clothing design models, your mannequin game better be strong.",
  },
  {
    id: 4,
    link: "",
    minutes: "6",
    imgSrc:
      "https://img.baba-blog.com/2025/10/a-woman-standing-in-front-of-a-graffiti-covered-wall.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Women’s Down Coats (USA)",
    by: "Krista Plociennik",
    description:
      "We analyzed thousands of product reviews to uncover what customers love most.",
  },
  {
    id: 5,
    link: "",
    minutes: "15",
    imgSrc:
      "https://img.baba-blog.com/2025/09/Young-Woman-in-a-Denim-Jacket.jpg?x-oss-process=style%2Fmedium_large",
    title: "Review Analysis of Amazon’s Hottest Selling Plus Size Jackets",
    by: "Lela",
    description:
      "An in-depth analysis of top-selling plus-size jackets based on customer reviews.",
  },
  {
    id: 6,
    link: "",
    minutes: "13",
    imgSrc:
      "https://img.baba-blog.com/2025/09/Gloves-for-Cold-Weather.jpg?x-oss-process=style%2Fmedium_large",
    title: "Review Analysis of Amazon’s Hottest Selling Nylon Gloves & Mittens",
    by: "Willa",
    description:
      "We analyzed thousands of product reviews from the USA market.",
  },
  {
    id: 7,
    link: "",
    minutes: "14",
    imgSrc:
      "https://img.baba-blog.com/2025/09/A-Woman-Standing-on-Snow-Covered-Ground.jpg?x-oss-process=style%2Fmedium_large",
    title: "Review Analysis of Amazon’s Hottest Selling Neckerchiefs",
    by: "Anoshia Riaz",
    description:
      "Insights into customer preferences and trending neckwear styles.",
  },
  {
    id: 8,
    link: "",
    minutes: "12",
    imgSrc:
      "https://img.baba-blog.com/2025/09/Fashionable-Woman-with-Eyeglasses-Smiling.jpg?x-oss-process=style%2Fmedium_large",
    title: "Climate-Proof Prints: Spring/Summer 2027 Apparel Trends",
    by: "Krista Plociennik",
    description:
      "How apparel prints are adapting to climate change and sustainability.",
  },
];

const Apparel = () => {
  return (
    <ReadMain
      leftCardOne={
        <ReadCardOne
          category="Apparel & Accessories"
          title="Apparel & Accessories"
          description="Sourcing insights, design inspiration, and market trends for the apparel and accessories industry."
        />
      }
      leftCardsTwo={apparelArticles.map((article) => (
        <ReadCardTwo key={article.id} {...article} />
      ))}
      rightContent={<ReadRightContent articles={apparelArticles} />}
    />
  );
};

export default Apparel;
