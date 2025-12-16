import FeatureSectionTwo from "../../components/FeatureSectionTwo";
import image from "../../assets/ads.png";
import { TbHomeEco } from "react-icons/tb";
import { GiArcheryTarget } from "react-icons/gi";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { LuChartColumnIncreasing } from "react-icons/lu";

const FeatureThree = () => {
  return (
    <div id="adsAndLeads">
      <FeatureSectionTwo
        description="Find the right buyers for your products and market directly to them with tools to increase exposure and conversions."
        image={image}
        items={[
          {
            id: 1,
            icon: <TbHomeEco />,
            description:
              "Display top products to get up to 43% more exposure, with smart recommendations for which to use.",
            link: "",
            title: "Product showcases",
          },
          {
            id: 2,
            icon: <GiArcheryTarget />,
            description:
              "based on geography, click history, and more - and only pay per click.",
            link: "",
            title: "Keyword Advertising",
          },
          {
            id: 3,
            icon: <VscGitPullRequestGoToChanges />,
            description:
              "Proactively find and connect with buyers requesting products similar to yours.",
            link: "",
            title: "Request for Quotation (RFQ)",
          },
          {
            id: 4,
            icon: <LuChartColumnIncreasing />,
            description:
              "Participate in Alibaba.com-sponsored campaigns to enjoy increased traffic periods and interest.",
            link: "",
            title: "Sitewide promotions",
          },
        ]}
        subtitle="Ads and lead generation"
        title="Increase awareness and sales with marketing tools"
      />
    </div>
  );
};

export default FeatureThree;
