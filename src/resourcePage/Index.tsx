import BusinessOne from "./sections/BusinessOne";
import BusinessTwo from "./sections/BusinessTwo";
import BlogArticles from "./sections/BlogArticles";
import Submit from "./sections/Submit";

const Business = () => {
  return (
    <div className="flex flex-col gap-10 ">
      <div className="flex flex-col gap-10 md:px-15 pb-15 p-6">
        <BusinessOne />
        <BusinessTwo />
        <BlogArticles />
      </div>
      <Submit />
    </div>
  );
};

export default Business;
