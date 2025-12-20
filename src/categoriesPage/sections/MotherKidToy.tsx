import ReadMain from "../../components/ReadMain";
import ReadCardOne from "../../components/ReadCardOne";
import ReadCardTwo from "../../components/ReadCardTwo";
import ReadRightContent from "../../components/ReadRight";


const motherKidToyResources = [
  {
    id: 1,
    link: "",
    minutes: "8",
    imgSrc:
      "https://img.baba-blog.com/2023/11/child-holding-a-back-to-school-sign-standing-near-a-bookbag.jpeg?x-oss-process=style%2Fmedium_large",
    title: "The Top Kids School Bag Trends for 2023/24",
    by: "Kelley Fox",
    description:
      "Kids school bag trends can range in comfort, style, and usability. To make sure you’re stocking what’s in demand, read on for the top kids school bag trends for 2023/24!",
  },
  {
    id: 2,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2023/11/a-kid-on-a-strider-balance-bike-and-a-mother-watching-a-toddler-on-toddler-balance-bike.jpeg?x-oss-process=style%2Fmedium_large",
    title: "How To Choose the Ideal Strider Balance Bike for Toddlers",
    by: "Gizchina",
    description:
      "Discover what parents look for when buying a strider balance bike for toddlers and explore the 5 top bikes to stock in 2024.",
  },
  {
    id: 3,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2023/11/a-cute-boy-playing-with-a-drawing-pad.jpeg?x-oss-process=style%2Fmedium_large",
    title: "The Top Drawing Toys Every Kid Will Love",
    by: "Gizchina",
    description:
      "Searching for the ultimate drawing toys? This article showcases the most creative and fun options that promise hours of imaginative play.",
  },
  {
    id: 4,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2023/11/boy-playing-with-building-blocks.jpg?x-oss-process=style%2Fmedium_large",
    title: "Your Guide To Selecting the Best Children’s Building Blocks",
    by: "Samaira",
    description:
      "Discover the perfect blend of creativity and smarts in our article on building blocks and elevate your business potential today!",
  },
  {
    id: 5,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2023/09/mothercare-shifted-to-a-franchise-only-model-in-2019.jpeg?x-oss-process=style%2Fmedium_large",
    title: "Mothercare Makes Steady Progress in FY23 Under Transformation Plan",
    by: "Just-style.com",
    description:
      "Industry experts continue to express confidence in mum and baby goods retailer Mothercare, despite a fall in full-year (FY23) sales resulting in a £0.1m ($0.12m) loss.",
  },
  {
    id: 6,
    link: "",
    minutes: "8",
    imgSrc:
      "https://img.baba-blog.com/2023/10/a-one-year-old-girl-with-a-birthday-cake-and-doll.jpeg?x-oss-process=style%2Fmedium_large",
    title: "2023’s Top Picks: The Best Dolls for Babies",
    by: "Samaira",
    description:
      "Explore the best safe, adorable, and mentally stimulating dolls for young children in 2023.",
  },
  {
    id: 7,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2023/09/baby-sleeping-in-a-bassinet.jpeg?x-oss-process=style%2Fmedium_large",
    title: "How To Select Bassinets & Bedside Sleepers",
    by: "Gizchina",
    description:
      "Bassinets and bedside sleepers are babies’ coziest and snuggliest places to sleep. Here is a foolproof guide on how to add quality designs to your store.",
  },
];

const MotherKidToy = () => {
  return (
    <ReadMain
      leftCardOne={
        <ReadCardOne
        category="Mother, Kids & Toys"
          title="Mother, Kids & Toys"
          description="Sourcing insights and market trends for the mother, kids, and toys industry."
        />
      }
      leftCardsTwo={motherKidToyResources.map((item) => (
        <ReadCardTwo key={item.id} {...item} />
      ))}
      rightContent={<ReadRightContent articles={motherKidToyResources} />}
    />
  );
};

export default MotherKidToy;
