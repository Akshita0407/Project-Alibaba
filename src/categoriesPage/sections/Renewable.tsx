import ReadMain from "../../components/ReadMain";
import ReadCardOne from "../../components/ReadCardOne";
import ReadCardTwo from "../../components/ReadCardTwo";
import ReadRightContent from "../../components/ReadRight";

const renewableResources = [
  {
    id: 1,
    link: "",
    minutes: "8",
    imgSrc:
      "https://img.baba-blog.com/2024/12/Solar-panels-installation-on-rooftop.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "North America Solar PV News Snippets: USITC Takes up Trinasolar’s Patent Complaint Against Canadian Solar & More",
    by: "TaiYang News",
    description: "Latest solar PV news and developments from North America.",
  },
  {
    id: 2,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/Solar-energy-panel.jpg?x-oss-process=style%2Fmedium_large",
    title: "European Commission Nod to €9.7b Italian Renewable Energy Scheme",
    by: "Taiyang News",
    description:
      "The €9.7 billion aid will help Italy transition towards a net-zero economy. Click here to learn more about this aid.",
  },
  {
    id: 3,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/Solar-power-plant.jpg?x-oss-process=style%2Fmedium_large",
    title: "",
    by: "Pv Magzine",
    description:
      "Reden Solar has launched a 200 MW solar module production line in France, with capacity to produce up to 300,000 modules per year, primarily for its own renewable electricity projects.",
  },
  {
    id: 4,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/Row-of-new-energy-efficient-brick-terraced-houses.jpg?x-oss-process=style%2Fmedium_large",
    title: "NuVision Announces 2.5 GW HJT Solar Production in US",
    by: "Gizchina",
    description:
      "NuVision solar modules with up to 800W output to meet domestic content demand.",
  },
  {
    id: 5,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/Solar-panels.jpg?x-oss-process=style%2Fmedium_large",
    title: "DOE Earmarks $365 Million for Solar & Storage in Puerto Rico",
    by: "Gizchina",
    description:
      "4 local teams to set up clean energy systems for vulnerable communities in Puerto Rico under round 2 of PR-ERF.",
  },
  {
    id: 6,
    link: "",
    minutes: "8",
    imgSrc:
      "https://img.baba-blog.com/2024/12/many-solar-power-panels-with-grazing-sheeps.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Europe Solar PV News Snippets: Sunly Lands €60 Million Equity Funding & More",
    by: "Taiyang News",
    description: "Latest solar PV news and snippets from Europe.",
  },
  {
    id: 7,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/Wind-Turbines.jpg?x-oss-process=style%2Fmedium_large",
    title: "UK Targets up to 47 GW Solar PV Installed Capacity by 2030",
    by: "Gizchina",
    description:
      "Solar Energy UK believes the modest target set by the government will be exceeded.",
  },
  {
    id: 8,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/Solar-system.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "China Solar PV News Snippets: New Hjt Cell Efficiency Record by Trinasolar & More",
    by: "Gizchina",
    description:
      "Trinasolar achieves 27.08% HJT cell efficiency, setting a world record; Leadmicro delays PV plant to 2025. Click here for more China Solar PV News Snippets.",
  },
  {
    id: 9,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/Renewable-Energy-4.jpg?x-oss-process=style%2Fmedium_large",
    title: "Australia Selects Over 6 GW Re Capacity Under Cis Tender I",
    by: "Gizchina",
    description:
      "Winning projects exceed 6 GW tendered capacity with NSW winning the largest chunk",
  },
];

const Renewable = () => {
  return (
    <ReadMain
      leftCardOne={
        <ReadCardOne
          category="Renewable Energy"
          title="Renewable Energy"
          description="Sourcing insights and market trends for the renewable energy industry."
        />
      }
      leftCardsTwo={renewableResources.map((item) => (
        <ReadCardTwo key={item.id} {...item} />
      ))}
      rightContent={<ReadRightContent articles={renewableResources} />}
    />
  );
};

export default Renewable;
