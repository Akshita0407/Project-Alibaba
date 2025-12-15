import FeatureSection from "../../components/FeatureSection";
import image from "../../assets/Feature(3).png";

const FeatureTwo = () => {
  const faqs = [
    {
      id: 1,
      question: "Translation tools",
      answer:
        "Communicate seamlessly with conversations translated into 18 languages, so you can sell to a global buyer base.",
    },
    {
      id: 2,
      question: "Product inquiries",
      answer:
        "Each sale is a conversation that starts with an inquiry, so you can know your customers better and build a book of business.",
    },
    {
      id: 3,
      question: "Online trade shows",
      answer:
        "Get your products in front of potential customers in a more intimate, live setting.",
    },
    {
      id: 4,
      question: "AliSupplier app",
      answer:
        "Manage your business on the go, so you can communicate with leads immediately while their interest is high.",
    },
  ];
  return (
    <>
      <div id="communication" className="w-full bg-[#f2f4f8] p-6 md:p-15 ">
        <div className=" w-full flex flex-col lg:flex-row-reverse gap-[8%] justify-center items-center">
          <div className="lg:w-[46%] w-full lg:h-[500px] h-[250px]">
            <img
              src={image}
              alt="Storefront"
              className="w-full h-full object-contain object-center "
            />
          </div>

          <div className="lg:w-[46%] w-full mt-4">
            <FeatureSection
              title="Connect freely to build lasting relationships"
              subtitle="Communication
"
              description="Interact with customers on your terms and own the relationships, customer contact information, and buyers' background information to foster loyalty and repeat sales."
              faqs={faqs}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureTwo;
