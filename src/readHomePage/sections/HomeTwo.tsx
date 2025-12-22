import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import ReadHomeCard from "../../components/ReadHomeCard";

interface CardContent {
  id: number;
  Link: string;
  title: string;
  card: ReactElement;
}

const content: CardContent[] = [
  {
    id: 1,
    Link: "categories/apparel",
    title: "Apparel & Accessories",
    card: (
      <>
        <ReadHomeCard
          media="https://img.baba-blog.com/2025/12/Three-people-wearing-male-graduation-caps-on-campus.jpg?x-oss-process=style%2Fmedium"
          date="12/03/2025"
          author="Krista Plociennik"
          title="5 Epic Ways to Style Male Graduation Caps in 2026"
        />
        <ReadHomeCard
          media="https://img.baba-blog.com/2025/12/Straw-beach-bag-on-towel-next-to-straw-sun-hat.jpg?x-oss-process=style%2Fmedium"
          date="12/02/2025"
          author="Gizchina"
          title="Ulefone Rugking 3 Pro Unboxing: a Slim, All-Round Budget Rugged Phone"
        />
      </>
    ),
  },
  {
    id: 2,
    Link: "categories/consumer",
    title: "Consumer Electronics",
    card: (
      <>
        <ReadHomeCard
          media="https://img.baba-blog.com/2025/12/ulefone-rugking-3-pro-1-692f05bb10272-2.jpg?x-oss-process=style%2Fmedium"
          date="12/12/2025"
          author="Gizchina"
          title="Ulefone Rugking 3 Pro Unboxing: a Slim, All-Round Budget Rugged Phone"
        />
        <ReadHomeCard
          media="https://img.baba-blog.com/2025/12/imagem-2025-11-30-234042500-692d00354ef28-6.png?x-oss-process=style%2Fmedium"
          date="12/12/2025"
          author="Gizchina"
          title="Iphone 17 Pro Max Running Ipados 26 Is the Latest Experiment of a Brave Enthusiast"
        />
      </>
    ),
  },
  {
    id: 3,
    Link: "categories/machinery",
    title: "Machinery",
    card: (
      <>
        <ReadHomeCard
          media="https://img.baba-blog.com/2025/09/A-horizontal-paddle-mixer-for-animal-feed-with-three-shafts-and-feed-being-mixed.jpg?x-oss-process=style%2Fmedium"
          date="09/15/2025"
          author="Roger Byrne"
          title="How to Select the Best Animal Feed Mixer for Your Needs"
        />
        <ReadHomeCard
          media="https://img.baba-blog.com/2025/08/Cellulose-based-car-engine-air-filters-offer-the-lowest-price-point.jpg?x-oss-process=style%2Fmedium"
          date="08/28/2025"
          author="TY Yap"
          title="How to Choose the Best Engine Air Filters for More Sales in 2025"
        />
      </>
    ),
  },
  {
    id: 4,
    Link: "categories/beauty",
    title: "Beauty & Personal Care",
    card: (
      <>
        <ReadHomeCard
          media="https://img.baba-blog.com/2025/12/Woman-with-Short-Blonde-Stack-Bob-Hairstyle.jpg?x-oss-process=style%2Fmedium"
          date="09/10/2025"
          author="Oriana"
          title="Master the Stack Attack: 2026’s Most Coveted Bob Haircut"
        />
        <ReadHomeCard
          media="https://img.baba-blog.com/2025/12/Woman-Lying-on-the-Beach-with-Sandy-Blonde-Hair.jpg?x-oss-process=style%2Fmedium"
          date="12/20/2025"
          author="TY Yap"
          title="Sandy Blonde Hair: The Ultimate 2026 Color Trend Guide"
        />
      </>
    ),
  },
  {
    id: 5,
    Link: "categories/renewable",
    title: "Renewable Energy",
    card: (
      <>
        <ReadHomeCard
          media="https://img.baba-blog.com/2024/12/Solar-panels-installation-on-rooftop.jpg?x-oss-process=style%2Fmedium"
          date="09/15/2025"
          author="TaiyangNews"
          title="North America Solar PV News Snippets: USITC Takes up Trinasolar’s Patent Complaint Against Canadian Solar & More"
        />
        <ReadHomeCard
          media="https://img.baba-blog.com/2024/12/Solar-energy-panel.jpg?x-oss-process=style%2Fmedium"
          date="01/16/2025"
          author="TaiyangNews"
          title="European Commission Nod to €9.7b Italian Renewable Energy Scheme"
        />
      </>
    ),
  },
  {
    id: 6,
    Link: "categories/vehicle",
    title: "Vehicle Parts & Accessories",
    card: (
      <>
        <ReadHomeCard
          media="https://img.baba-blog.com/2025/12/Drive-Shaft.jpg?x-oss-process=style%2Fmedium"
          date="09/15/2025"
          author="Vivian"
          title="Review Analysis of Amazon’s Hottest Selling Drive Shafts in the USA"
        />
        <ReadHomeCard
          media="https://img.baba-blog.com/2025/12/Pinion-Gears.jpg?x-oss-process=style%2Fmedium"
          date="08/28/2025"
          author="Vivian"
          title="Review Analysis of Amazon’s Hottest Selling Pinion Gears in the USA"
        />
      </>
    ),
  },
  {
    id: 7,
    Link: "categories/packaging",
    title: "Packaging & Printing",
    card: (
      <>
        <ReadHomeCard
          media="https://img.baba-blog.com/2024/11/Cardboard-boxes-on-floor-near-entrance.jpg?x-oss-process=style%2Fmedium"
          date="01/02/2025"
          author="Packaging-gateway.com"
          title="Market Pressures Drive Packaging and Label Changes"
        />
        <ReadHomeCard
          media="https://img.baba-blog.com/2024/12/packaging-for-fast-food.jpg?x-oss-process=style%2Fmedium"
          date="12/08/2025"
          author="Packaging-gateway.com"
          title="The Rise of Folding Cartons in Plastics Substitution"
        />
      </>
    ),
  },
  {
    id: 8,
    Link: "categories/sports",
    title: "Sports",
    card: (
      <>
        <ReadHomeCard
          media="https://img.baba-blog.com/2025/11/Two-people-working-in-a-snow-fishing-setup.jpg?x-oss-process=style%2Fmedium"
          date="09/15/2025"
          author="TaiyangNews"
          title="A Practical Guide to Choosing the Right Pop-Up Ice Fishing Tents"
        />
        <ReadHomeCard
          media="https://img.baba-blog.com/2025/09/Two-Man-Playing-Baseball-During-Daytime.jpg?x-oss-process=style%2Fmedium"
          date="10/14/2025"
          author="John Jing"
          title="Review Analysis of Amazon’s Hottest Selling Baseball Footwear in the USA"
        />
      </>
    ),
  },
  {
    id: 9,
    Link: "categories/homeGarden",
    title: "Home & Garden",
    card: (
      <>
        <ReadHomeCard
          media="https://img.baba-blog.com/2025/10/Caraway-pan-with-chicken-hearts-and-herbs-inside.jpg?x-oss-process=style%2Fmedium"
          date="11/20/2025"
          author="Krista Plociennik"
          title="Learn Whether Caraway Pans Are Right for Your Cooking Needs"
        />
        <ReadHomeCard
          media="https://img.baba-blog.com/2025/10/Small-flower-fridge-with-various-types-of-cut-flowers-inside.jpg?x-oss-process=style%2Fmedium"
          date="08/20/2025"
          author="Krista Plociennik"
          title="Breaking the Most Popular Types of Flower Fridge"
        />
      </>
    ),
  },
];

const HomeTwo = () => {
  return (
    <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-5 p-6 md:p-15 auto-rows-[minmax(400px,auto)]">
      {content.map((c) => (
        <div key={c.id} className="flex flex-col gap-5 mt-4">
          <Link to={c.Link}>
            <h2 className="text-[#ff6600] text-xl lg:text-2xl font-bold my-2">
              {c.title}
            </h2>
          </Link>
          {c.card}
        </div>
      ))}
    </div>
  );
};

export default HomeTwo;
