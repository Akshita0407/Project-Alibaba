import ReadMain from "../../components/ReadMain";
import ReadCardOne from "../../components/ReadCardOne";
import ReadCardTwo from "../../components/ReadCardTwo";
import ReadRightContent from "../../components/ReadRight";

const sportsResources = [
  {
    id: 1,
    link: "",
    minutes: "8",
    imgSrc:
      "https://img.baba-blog.com/2025/11/Two-people-working-in-a-snow-fishing-setup.jpg?x-oss-process=style%2Fmedium_large",
    title: "A Practical Guide to Choosing the Right Pop-Up Ice Fishing Tents",
    by: "Anoshia Riaz",
    description:
      "Are you looking for a pop-up ice fishing tent that brings the best bang for your buck? Learn all about these tents to ensure you make the correct picks!",
  },
  {
    id: 2,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/09/Two-Man-Playing-Baseball-During-Daytime.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Baseball Footwear in the USA",
    by: "John Jing",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling baseball footwear in the USA.",
  },
  {
    id: 3,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/09/Cyclist-in-Training.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Cycling Pants in the USA",
    by: "Gizchina",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling cycling pants in the USA.",
  },
  {
    id: 4,
    link: "",
    minutes: "10",
    imgSrc:
      "https://img.baba-blog.com/2025/08/Group-of-Sports-Player-Kneeling-on-Field.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Soccer Shin Guards in the US",
    by: "Gizchina",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling soccer shin guards in the U.S.",
  },
  {
    id: 5,
    link: "",
    minutes: "19",
    imgSrc:
      "https://img.baba-blog.com/2025/08/Duck-decoys.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Hunting Decoys in the US",
    by: "John",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling hunting decoys in the US.",
  },
  {
    id: 6,
    link: "",
    minutes: "8",
    imgSrc:
      "https://img.baba-blog.com/2025/08/A-woman-using-a-rangefinder-in-a-lush-green-forest-while-observing-wildlife-during-a-sunny-afternoon.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling Hunting Rangefinders in the US in 2025",
    by: "John",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling hunting decoys in the US.",
  },
  {
    id: 7,
    link: "",
    minutes: "15",
    imgSrc:
      "https://img.baba-blog.com/2025/08/Young-female-boxer-resting-on-the-ropes-in-a-boxing-gym-emphasizing-strength-and-focus.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest Selling boxing gloves in the US in 2025",
    by: "John",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling hunting decoys in the US.",
  },
  {
    id: 8,
    link: "",
    minutes: "9",
    imgSrc:
      "https://img.baba-blog.com/2025/08/woman-in-black-tank-top-and-black-pants-doing-yoga.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review analysis of Amazon’s hottest selling yoga mats in the UK in 2025",
    by: "Gizchina",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling hunting decoys in the US.",
  },
  {
    id: 9,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/08/duel-footballers-opponents-soccer-football-pitch-nature-ball-grass-adidas-game-sports-team.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review analysis of Amazon’s hottest selling footballs in the UK in 2025",
    by: "John",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling hunting decoys in the US.",
  },
];

const Sports = () => {
  return (
    <ReadMain
      leftCardOne={
        <ReadCardOne
          category="Sports"
          title="Sports"
          description="Sourcing insights and market trends for the sports industry."
        />
      }
      leftCardsTwo={sportsResources.map((item) => (
        <ReadCardTwo key={item.id} {...item} />
      ))}
      rightContent={<ReadRightContent articles={sportsResources} />}
    />
  );
};

export default Sports;
