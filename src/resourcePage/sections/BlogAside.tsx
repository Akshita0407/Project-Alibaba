import AsideCard from "../../components/AsideCard";
import BusinessCard from "../../components/BlogCard";
import image from "../../assets/blogSeven.png";
import image2 from "../../assets/blogEight.png";

const BlogAside = () => {
  return (
    <div className="w-full flex flex-col lg:gap-20 gap-5 ">
      <AsideCard
        button={true}
        input={false}
        title="Start your borderless business here"
        description="Tell us about your business and stay connected."
        style="bg-[#f5f8ff]! text-black!"
      />

      <div className="flex flex-col gap-4 ">
        <h2 className="lg:text-3xl text-xl font-bold">Reads for you</h2>
        <div className="flex flex-col gap-5 ">
          <BusinessCard
            category="News"
            date="June 14, 2024"
            image={image}
            readTime="4 min read"
            source="Alibaba.com"
            title="Embracing Global Growth: Saudi Arabia's Date Expanding Global Trade through Alibaba.com"
          />
          <BusinessCard
            category="Export Import Tips"
            date="March 30, 2022"
            image={image2}
            readTime="10 min read"
            source="Alibaba.com"
            title="Alibaba.com digital B2B Outlook 2022: A recap"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogAside;
