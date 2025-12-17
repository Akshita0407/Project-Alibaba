import BusinessCard from "../../components/BlogCard";
import image from "../../assets/blogThree.png";
const AsideThree = () => {
  return (
    <>
      <BusinessCard
        category="News"
        date="Dec 02, 2025"
        image={image}
        readTime="9 min read"
        source="Alibaba.com"
        title="Alibaba.com Releases  ‘Trade Assurance’ in South Korea ..."
        description="A major step toward digital trade infrastructure growth."
      />
    </>
  );
};

export default AsideThree;
