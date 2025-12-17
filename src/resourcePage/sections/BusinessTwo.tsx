import BusinessCard from "../../components/BlogCard";
import img1 from "../../assets/blogTwo.png";
import img2 from "../../assets/blogThree.png";
import AsideThree from "./AsideThree";

const BusinessTwo = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 mb-3 lg:auto-rows-fr">
      <BusinessCard
        image={img1}
        category="News"
        title="Alibaba.com Releases Trade Assurance in South Korea"
        description="Supporting sellers to expand overseas with...."
        date="Dec 02, 2025"
        readTime="3 min read"
        source="Alibaba.com"
      />
      <BusinessCard
        image={img2}
        category="News"
        title="Alibaba.com Signs Strategic MOU with Ministry of IT & Telecom"
        description="A major step toward digital trade infrastructure growth."
        date="Dec 02, 2025"
        readTime="2 min read"
        source="Alibaba.com"
      />
      <AsideThree />
    </div>
  );
};

export default BusinessTwo;
