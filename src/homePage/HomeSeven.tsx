import HomeBoxes from "../components/HomeBoxes";

const content = [
  {
    id: 1,
    imgSrc: "",
    title: "Enjoy exclusive consulting services",
    description:
      "Receive direct, real-time support from an industry expert local to you. They'll provide regular consultations, troubleshoot issues, and guide you with scaling up and optimizing your business strategically.",
    buttonText: "Talk to consultant",
  },
  {
    id: 2,
    imgSrc: "",
    title: "Grow with the latest business insights",
    description:
      "Get the latest business news, trends, and tips at our learning center, where you can access articles on how to optimize your business. Stay ahead of industry trends and changes by visiting our blog.",
    buttonText: "Visit our blog",
  },
  {
    id: 3,
    imgSrc: "",
    title: "Get ahead with industry reports",
    description:
      "Find comprehensive market research that helps you analyze the business landscape, any untapped opportunities, and how to make your business competitive in your industry.",
    buttonText: "Browse by industry",
  },
];

const HomeSeven = () => {
  return (
    <HomeBoxes
      title="Get powerful insights and expert support"
      items={content}
    />
  );
};

export default HomeSeven;
