import Blogs from "./Blogs";
import BlogAside from "./BlogAside";

const BlogArticles = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col gap-[3%] lg:mt-15">
      <div className="lg:w-[70%] w-full">
        <Blogs />
      </div>
      <div className="lg:w-[27%] w-full ">
        <BlogAside />
      </div>
    </div>
  );
};

export default BlogArticles;
