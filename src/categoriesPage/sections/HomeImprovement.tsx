import ReadMain from "../../components/ReadMain";
import ReadCardOne from "../../components/ReadCardOne";
import ReadCardTwo from "../../components/ReadCardTwo";
import ReadRightContent from "../../components/ReadRight";

const homeImprovementArticles = [
  {
    id: 1,
    link: "",
    minutes: "3",
    imgSrc: "https://img.baba-blog.com/2024/04/Rain-shower-head-with-a-unique-panel-system-design.jpeg?x-oss-process=style%2Fmedium_large",
    title: "Futuristic Shower Heads That Homeowners Love",
    by: "Gizchina",
    description: "The global demand for shower heads is rising due to new technology and environmental concerns. Read on to learn how to meet changing customer standards."
  },
  {
    id: 2,
    link: "",
    minutes: "3",
    imgSrc: "https://img.baba-blog.com/2023/12/woman-sitting-on-orange-sofa-chair-with-ottoman.jpeg?x-oss-process=style%2Fmedium_large",
    title: "These Living Room Chair Trends Are Going To Be Big",
    by: "Gizchina",
    description: "The market for living room furniture is massive. Learn how to grow your business with the following trends in the living room chair segment."
  },
  {
    id: 3,
    link: "",
    minutes: "3",
    imgSrc: "https://img.baba-blog.com/2023/11/teal-metal-counter-height-bar-stools.jpeg?x-oss-process=style%2Fmedium_large",
    title: "Kitchen Bar Stool Trends That Are Hot Right Now",
    by: "Gizchina",
    description: "The kitchen furniture market is an exciting industry to do business in. Get a leg up over the competition with the following kitchen bar stool trends."
  },
  {
    id: 4,
    link: "",
    minutes: "3",
    imgSrc: "https://img.baba-blog.com/2023/11/gray-and-white-upholstered-bedroom-end-bench.jpeg?x-oss-process=style%2Fmedium_large",
    title: "Don’t Miss Out on the Biggest Trends in Bedroom Benches",
    by: "Gizchina",
    description: "The bedroom furniture market is a steady industry to establish business in. To stay up to date, don’t sleep on the following bedroom bench trends."
  },
  {
    id: 5,
    link: "",
    minutes: "3",
    imgSrc: "https://img.baba-blog.com/2023/11/modern-office-design-7-work-from-home-design-ideas-for-2024.jpg?x-oss-process=style%2Fmedium_large",
    title: "Modern Office Design: 7 Work-From-Home Design Ideas for 2024",
    by: "Gizchina",
    description: "Discover how modern office designs transform remote workspaces, elevate productivity, and enhance comfort with these innovative tips for home offices."
  },
  {
    id: 6,
    link: "",
    minutes: "3",
    imgSrc: "https://img.baba-blog.com/2023/09/a-swivel-armchair-placed-near-a-window.jpeg?x-oss-process=style%2Fmedium_large",
    title: "Your Ultimate Guide to Selecting Classy and Comfortable Swivel Chairs",
    by: "Gizchina",
    description: "Swivel chairs are the perfect way to elevate the style of a room while providing unmatched comfort. Read on to discover the perfect swivel chairs for your customers today!"
  },
  {
    id: 7,
    link: "",
    minutes: "3",
    imgSrc: "https://img.baba-blog.com/2023/09/most-exciting-entryway-table-trends-for-everyone.jpg?x-oss-process=style%2Fmedium_large",
    title: "Most Exciting Entryway Table Trends for Everyone",
    by: "Gizchina",
    description: "The entryway furniture business is booming. Learn how to become profitable in the market with the following top entryway table trends."
  },
  {
    id: 8,
    link: "",
    minutes: "3",
    imgSrc: "https://img.baba-blog.com/2023/09/home-office-equipment.jpg?x-oss-process=style%2Fmedium_large",
    title: "7 Revolutionary Home Office Ideas for Small Spaces",
    by: "Gizchina",
    description: "With many companies embracing a work-from-home culture, the demand for home offices is rising. Read on to discover unique home office ideas to improve productivity."
  },
  {
    id: 9,
    link: "",
    minutes: "3",
    imgSrc: "https://img.baba-blog.com/2023/08/contemporary-spa-like-bathroom-with-wood-accents.jpeg?x-oss-process=style%2Fmedium_large",
    title: "Become Profitable in 2024 With These Trendy Bathroom Designs",
    by: "Gizchina",
    description: "The definition of modern bathroom design is known to change with time. Keep reading to learn about the latest trends in bathroom design for 2024."
  },
  {
    id: 10,
    link: "",
    minutes: "3",
    imgSrc: "https://img.baba-blog.com/2023/08/a-well-furnished-room-with-a-king-size-bed.jpeg?x-oss-process=style%2Fmedium_large",
    title: "Choosing a New Mattress: A Complete Buying Guide",
    by: "Gizchina",
    description: "Choosing a new mattress is an important process that involves many considerations. Explore these key tips for selecting the right mattresses."
  },
];

const HomeImprovement = () => {
  return (
    <ReadMain
      leftCardOne={
        <ReadCardOne
        category="Home Improvement"
          title="Home Improvement"
          description="Sourcing insights and market trends for the home improvement industry."
        />
      }
      leftCardsTwo={homeImprovementArticles.map((article) => (
        <ReadCardTwo key={article.id} {...article} />
      ))}
      rightContent={<ReadRightContent articles={homeImprovementArticles} />}
    />
  );
};

export default HomeImprovement;
