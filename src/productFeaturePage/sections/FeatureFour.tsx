import FeatureSectionTwo from "../../components/FeatureSectionTwo";
import image from "../../assets/analytics.png";
import { BsTextParagraph } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import { SlGraduation } from "react-icons/sl";
const FeatureFour = () => {
  return (
    <div id="analytics">
      <FeatureSectionTwo
        style="md:flex-row-reverse!"
        description="Get optimization suggestions from site-based algorithms, and playbooks from industry experts and the professionals at Alibaba.com."
        image={image}
        subtitle="Analytics and support"
        title="Continuously improve your store and sales"
        items={[
          {
            id: 1,
            icon: <BsTextParagraph />,
            description:
              "Visualize your store's metrics and historical data, and get intelligent suggestions based on platform information.",
            link: "",
            title: "Dashboards",
          },
          {
            id: 2,
            icon: <FaRegClock />,
            description:
              "Understand the state of your category and which products perform best through demand analysis, trend analysis price comparisons, and more.",
            link: "",
            title: "Industry analytics",
          },
          {
            id: 3,
            icon: <FaHeadset />,
            description:
              "Get help when you need it through virtual support, and account management services online and on the phone.",
            link: "",
            title: "One-on-one support",
          },
          {
            id: 4,
            icon: <SlGraduation />,
            description:
              "Participate in courses and workshops in the free Seller Academy, and read articles and attend events with experts to stay on top of your industry.",
            link: "",
            title: "Resources",
          },
        ]}
      />
    </div>
  );
};

export default FeatureFour;
