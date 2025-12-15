import FeatureSectionTwo from "../../components/FeatureSectionTwo";
import image from "../../assets/Feature(4).png";
import { TbHomeEco } from "react-icons/tb";
import { GiArcheryTarget } from "react-icons/gi";

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
            title: "Product showcases",
          },
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
            title: "Product showcases",
          },
        ]}
        subtitle="Ads and lead generation"
        title="Increase awareness and sales with marketing tools"
      />
    </div>
  );
};

export default FeatureThree;
