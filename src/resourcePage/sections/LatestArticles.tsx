import BusinessCard from "../../components/BlogCard";
import image from "../../assets/cocreate.png";
import image2 from "../../assets/blogSix.png";
import image3 from "../../assets/blogFour.png";
import image4 from "../../assets/blogThree.png";
import image5 from "../../assets/blogTwo.png";
import image6 from "../../assets/blogNine.png";
import image7 from "../../assets/blogTen.png";
const LatestArticles = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <BusinessCard
          blogStyle={true}
          image={image}
          category="News"
          title="At its inaugural flagship event CoCreate Europe in London, Alibaba.com launched AI Mode integrating agentic AI into the user journey."
          description="At its inaugural flagship event CoCreate Europe in London, Alibaba.com, a leading platform for business-to-business (B2B) e-commerce, today launched 'AI Mode' – a new ...."
          date="Dec 02, 2025"
          readTime="0 min read"
          source="Alibaba.com"
          link=""
        />
        <hr className="text-gray-300" />
        <BusinessCard
          blogStyle={true}
          image={image2}
          category="News"
          title="Alibaba.com Touches Down in Europe with Over 1,000 OOH Boards Across France, Germany, UK, and Italy"
          description="We’re not chasing hype. We’re building AI that works for real businesses, real supply chains, and real growth, the president of Alibaba.com Kuo Zhang writes in his opinion article for Euroviews."
          date="Dec 02, 2025"
          readTime="1 min read"
          source="Alibaba.com"
          link=""
        />
        <hr className="text-gray-300" />
        <BusinessCard
          blogStyle={true}
          image={image3}
          category="News"
          title="Alibaba.com signed a landmark Strategic MOU with the Ministry of IT & Telecom (MOIT) of Pakistan"
          description="At the 2nd China-Pakistan B2B Enterprise Summit, Alibaba.com proudly signed a landmark Strategic MOU with the Ministry of IT & Telecom (MOIT) — a significant step forward in accelerating the digital transformation of Pakistans SME"
          date="Dec 02, 2025"
          readTime="0 min read"
          source="Alibaba.com"
          link=""
        />
        <hr className="text-gray-300" />
        <BusinessCard
          blogStyle={true}
          image={image4}
          category="News"
          title="Alibaba.com Releases ‘Trade Assurance’ in South Korea ——Supporting Sellers to Expand Overseas"
          description="The service combines online data-driven arbitration with Escrow (payment escrow) solutions to guarantee transaction fulfillment, creating a secure environment for cross-border trade."
          date="Dec 02, 2025"
          readTime="8 min read"
          source="Alibaba.com"
          link=""
        />
        <hr className="text-gray-300" />
        <BusinessCard
          blogStyle={true}
          image={image5}
          category="News"
          title="AI Mode: Why AI must be grounded, not hyped, to serve Europe’s SMEs"
          description="We’re not chasing hype. We’re building AI that works for real businesses, real supply chains, and real growth, the president of Alibaba.com Kuo Zhang writes in his opinion article for Euroviews."
          date="Dec 02, 2025"
          readTime="5 min read"
          source="Alibaba.com"
          link=""
        />
        <hr className="text-gray-300" />
        <BusinessCard
          blogStyle={true}
          image={image6}
          category="For SME Beginners"
          title="How to Run TikTok Ads and Boost Your Sales: The Ultimate Guide"
          description="Master the art of running TikTok ads with this ultimate guide. Learn strategies, tips, and best practices to create impactful campaigns that drive sales and grow your brand."
          date="March 07, 2025"
          readTime="7 min read"
          source="Alibaba.com"
          link=""
        />
        <hr className="text-gray-300" />
        <BusinessCard
          blogStyle={true}
          image={image7}
          category="Seller Guides"
          title="Global Prevailing Products Report - Sports & Entertainment"
          description="In Q2 2024, the global Market supply and demand experience positive growth for the Sports & Entertainment industry, the total import and export value trade has reached USD 80.4 billion, with imports accounting for USD 38.5 billion. The main importers were United States, Germany and Netherlands."
          date="jan 08, 2025"
          readTime="11 min read"
          source="Alibaba.com"
          link=""
        />
      </div>
    </>
  );
};

export default LatestArticles;
