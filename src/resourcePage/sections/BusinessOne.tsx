// import BusinessCard from "../../components/BlogCard";
// import image from "../../assets/cocreate.png";
// import AsideOne from "./AsideOne";
// import AsideTwo from "./AsideTwo";

// const BusinessOne = () => {
//   return (
//     <div className="w-full flex lg:flex-row flex-col gap-[4%] lg:h-[700px] mb-3">
//       <div className="w-[60%] h-[700px]">
//         <BusinessCard
//           image={image}
//           category="News"
//           title="At its inaugural flagship event CoCreate Europe in London, Alibaba.com launched AI Mode integrating agentic AI into the user journey."
//           description="At its inaugural flagship event CoCreate Europe in London, Alibaba.com, a leading platform for business-to-business (B2B) e-commerce, today launched 'AI Mode' – a new ...."
//           date="Dec 02, 2025"
//           readTime="0 min read"
//           source="Alibaba.com"
//           link=""
//         />
//       </div>
//       <div className="w-[36%] flex flex-col h-[700px] gap-15 ">
//         <AsideOne />
//         <AsideTwo />
//       </div>
//     </div>
//   );
// };

// export default BusinessOne;
import BusinessCard from "../../components/BlogCard";
import image from "../../assets/cocreate.png";
import AsideOne from "./AsideOne";
import AsideTwo from "./AsideTwo";

const BusinessOne = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col gap-[5%] mb-3 h-fit">
      <div className="w-full lg:w-[65%]">
        <BusinessCard
          image={image}
          category="News"
          title="At its inaugural flagship event CoCreate Europe in London, Alibaba.com launched AI Mode integrating agentic AI into the user journey."
          description="At its inaugural flagship event CoCreate Europe in London, Alibaba.com, a leading platform for business-to-business (B2B) e-commerce, today launched 'AI Mode' – a new ...."
          date="Dec 02, 2025"
          readTime="0 min read"
          source="Alibaba.com"
          link=""
        />
      </div>
      <div className="w-full lg:w-[30%] flex flex-col gap-4">
        <AsideOne />
        <AsideTwo />
      </div>
    </div>
  );
};

export default BusinessOne;
