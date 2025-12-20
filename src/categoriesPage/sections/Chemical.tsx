import ReadMain from "../../components/ReadMain";
import ReadCardOne from "../../components/ReadCardOne";
import ReadCardTwo from "../../components/ReadCardTwo";
import ReadRightContent from "../../components/ReadRight";

const chemicalArticles = [
  {
    id: 1,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/stunning-reversal-eu-axes-rohs-directives-tbbp-a-_00.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Stunning Reversal: EU Axes RoHS Directive’s TBBP-A and MCCPs Restriction Proposals",
    by: "www.cirs-group.com",
    description:
      "In 2018, the EU’s RoHS Directive assessment project Pack15 proposed adding seven substances, including TBBP-A and MCCPs, to the RoHS Directive’s restricted list. On December 10, 2024, the EU abandoned its plan to restrict Tetrabromobisphenol A (TBBP-A) and medium-chain chlorinated paraffins (MCCPs) under the RoHS Directive.",
  },
  {
    id: 2,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/imminent-update-to-cmr-substances-list-in-eu-reac_00.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Imminent Update to CMR Substances List in EU Reach Regulation Annex XVII",
    by: "www.cirs-group.com",
    description:
      "The European Commission revised the Carcinogenic, Mutagenic, or toxic to Reproduction (CMR) substances list within REACH’s Annex XVII, introducing three key changes.",
  },
  {
    id: 3,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/Scientist-mixing-chemical-liquids.jpg?x-oss-process=style%2Fmedium_large",
    title: "Global Chemical Regulatory Updates – November 2024",
    by: "www.cirs-group.com",
    description:
      "This article compiles the chemical regulation updates for November in Europe, the Americas, and Asia.",
  },
  {
    id: 4,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/The-toxic-symbol-on-chemical-products.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "European Commission To Withdraw Approval for Ethylene Oxide in Biocidal Products",
    by: "www.cirs-group.com",
    description:
      "The European Commission has announced its intention to withdraw approval for the use of ethylene oxide as a surface disinfectant in biocidal products.",
  },
  {
    id: 5,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/Leiden-Old-town-cityscape.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "Dutch PFAS Update: Over 100 Substances Added to High Concern (ZZS) List",
    by: "www.cirs-group.com",
    description:
      "The Dutch National Institute for Public Health and the Environment (RIVM) has fully added per- and polyfluoroalkyl substances (PFAS) to its Substances of Very High Concern (ZZS) list.",
  },
  {
    id: 6,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/Asian-male-teenager-holds-a-smoked-e-cigarette.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "ECHA’s 2025 Blueprint: Spotlight on Regulation of E-Cigarettes and Air Fresheners",
    by: "www.cirs-group.com",
    description:
      "The Biocidal Products Regulation Group (BPRS) is set to launch a new enforcement project (BEF-3) in January 2025.",
  },
  {
    id: 7,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/Justice.jpg?x-oss-process=style%2Fmedium_large",
    title:
      "EU’s Revised CLP Regulation Officially Came Into Effect on December 10, 2024",
    by: "www.cirs-group.com",
    description:
      "The European Union published Commission Regulation 2024/2865 amending the EU CLP Regulation. Most provisions become mandatory from July 1, 2026, and the rest from January 1, 2027.",
  },
  {
    id: 8,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/12/World-economic-sanctions.jpg?x-oss-process=style%2Fmedium_large",
    title: "China Implements Strict Export Controls on Dual-Use Items to US",
    by: "www.cirs-group.com",
    description:
      "China strengthens control on dual-use items exported to the US to safeguard national security and fulfill international obligations. Effective immediately.",
  },
  {
    id: 9,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/11/Dermatologist-formulating-and-mixing-pharmaceutical-skincare.jpg?x-oss-process=style%2Fmedium_large",
    title: "EU Approves Silver Zinc Zeolite for PT2, PT7, PT9 Biocides",
    by: "www.cirs-group.com",
    description:
      "The European Commission approved silver zinc zeolite for use in biocides including disinfectants and preservatives for fibers, leather, rubber, and polymers.",
  },
  {
    id: 10,
    link: "",
    minutes: "3",
    imgSrc:
      "https://img.baba-blog.com/2024/11/urgent-reminder-pcn-transition-period-ends-soon_00.jpg?x-oss-process=style%2Fmedium_large",
    title: "Urgent Reminder: PCN Transition Period Ends Soon",
    by: "www.cirs-group.com",
    description:
      "The European Poison Centre (PCN) reminded businesses that the transition period (January-December 2024) is concluding.",
  },
];

const Chemical = () => {
  return (
    <ReadMain
      leftCardOne={
        <ReadCardOne
        category="Chemicals & Plastics"
          title="Chemicals & Plastics"
          description="The latest market trends, insights, and regulatory information to help you stay ahead of the curve."
        />
      }
      leftCardsTwo={chemicalArticles.map((article) => (
        <ReadCardTwo key={article.id} {...article} />
      ))}
      rightContent={<ReadRightContent articles={chemicalArticles} />}
    />
  );
};

export default Chemical;
