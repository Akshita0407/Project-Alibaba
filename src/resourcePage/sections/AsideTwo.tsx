import BusinessCard from "../../components/BlogCard";
import image from "../../assets/blogTwo.png";
const AsideTwo = () => {
  return (
    <>
      <BusinessCard
        category="News"
        date="Dec 02, 2025"
        image={image}
        readTime="5 min read"
        source="Alibaba.com"
        title="AI Mode: Why AI must be grounded, not hyped, to serve Europe’s SMEs"
      />
    </>
  );
};

export default AsideTwo;
