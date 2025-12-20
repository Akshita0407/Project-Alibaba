import ReadMain from "../../components/ReadMain";
import ReadCardOne from "../../components/ReadCardOne";
import ReadCardTwo from "../../components/ReadCardTwo";
import ReadRightContent from "../../components/ReadRight";

const machineryArticles = [
  {
    id: 1,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/09/A-horizontal-paddle-mixer-for-animal-feed-with-three-shafts-and-feed-being-mixed.jpg?x-oss-process=style%2Fmedium_large",
    title: "How to Select the Best Animal Feed Mixer for Your Needs",
    by: "Gizchina",
    description:
      "Animal feed mixers are essential for anyone involved in the livestock farming business. Read on to explore some of the mixing methods and machines available in 2025.",
  },
  {
    id: 2,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/08/Cellulose-based-car-engine-air-filters-offer-the-lowest-price-point.jpg?x-oss-process=style%2Fmedium_large",
    title: "How to Choose the Best Engine Air Filters for More Sales in 2025",
    by: "Gizchina",
    description:
      "Engine air filters are a must-have for a range of vehicles. Discover everything retailers need to know to stock the best options on the market in 2025.",
  },
  {
    id: 3,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/06/A-woman-using-a-mini-heat-press-in-her-workshop.jpg?x-oss-process=style%2Fmedium_large",
    title: "Stock Smart, Sell More: 7 Must-Know Mini Heat Press Features",
    by: "Gizchina",
    description:
      "Hobbyist crafters now have the perfect way to press designs on anything: mini heat presses. Learn more about how to choose the right one for business or individual use here.",
  },
  {
    id: 4,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/06/A-microinverter-with-cables-for-solar-panels.jpg?x-oss-process=style%2Fmedium_large",
    title: "Choosing the Right Microinverter: 9 Essential Features",
    by: "Gizchina",
    description:
      "Microinverters are a necessary part of using the energy absorbed by solar panels. Here’s an in-depth guide on how to choose the right one for business or individual use.",
  },
  {
    id: 5,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/06/Dirty-shoes-in-a-shoe-washing-machine.jpg?x-oss-process=style%2Fmedium_large",
    title: "Shoe-Washing Machines: 11 Amazing Tips for Retailers",
    by: "Gizchina",
    description:
      "Are your consumers tired of dirty shoes? Shoe-washing machines are the way to go. Here’s everything you need to know about choosing the right model in 2025.",
  },
  {
    id: 6,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/05/Farmer-planting-seeds-with-a-tractor.jpg?x-oss-process=style%2Fmedium_large",
    title: "Top 10 Chinese Tractor Brands You Should Know",
    by: "Gizchina",
    description:
      "Discover the top 10 Chinese tractor brands, types of tractors, and expert tips for choosing the right model for your agricultural needs.",
  },
  {
    id: 7,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/06/An-etching-machine-with-sparks-everywhere.jpg?x-oss-process=style%2Fmedium_large",
    title: "Etching Machines: Everything You Need to Know",
    by: "Gizchina",
    description:
      "Etching machines are a foolproof way to etch beautiful designs on hard surfaces. Here’s how to choose the best options in 2025.",
  },
  {
    id: 8,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/05/3D-Printer-Printing-Prototypes.jpg?x-oss-process=style%2Fmedium_large",
    title: "The Future of 3D Printing and Emerging Niche Applications",
    by: "Gizchina",
    description:
      "3D printers are changing the manufacturing industry by improving efficiency and reducing production time. Read on to learn more about the future of 3D printing.",
  },
  {
    id: 9,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/05/Wood-Lathe.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Review Analysis of Amazon’s Hottest-Selling Wood Lathe in the US for 2025",
    by: "Gizchina",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling wood lathe in the US.",
  },
  {
    id: 10,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2025/05/Heat-Pump.jpg?x-oss-process=style%2Fmedium_large",
    title: "Review Analysis of Amazon’s Hottest Selling Heat Pumps in the USA",
    by: "Gizchina",
    description:
      "We analyzed thousands of product reviews, and here’s what we learned about the top-selling heat pumps in the USA.",
  },
];

const Machinery = () => {
  return (
    <ReadMain
      leftCardOne={
        <ReadCardOne
          category="Machinery"
          title="Machinery"
          description="Sourcing insights and market trends for the machinery industry."
        />
      }
      leftCardsTwo={machineryArticles.map((article) => (
        <ReadCardTwo key={article.id} {...article} />
      ))}
      rightContent={<ReadRightContent articles={machineryArticles} />}
    />
  );
};

export default Machinery;
