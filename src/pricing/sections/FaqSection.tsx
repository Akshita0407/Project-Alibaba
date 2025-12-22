import { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import { FiPlus, FiMinus } from "react-icons/fi";

interface FAQItem {
  id: number;
  question: string;
  answer: string[];
}

const FaqSections = () => {
  const faqData: FAQItem[] = [
    {
      id: 1,
      question:
        "What are the criteria to sell on Alibaba.com as a US supplier?",
      answer: [
        "A business entity registered in the US with a Certificate of Registration. Individual sellers are not eligible.",
        "The capacity to supply products in wholesale quantities.",
        "Ability to access the website or the mobile app of Alibaba.com.",
        "A passion for growing your business online.",
      ],
    },
    {
      id: 2,
      question: "What do I get from the paid membership?",
      answer: [
        "Access to advanced seller tools.",
        "Increased visibility with premium product placement.",
        "Dedicated account management support.",
      ],
    },
    {
      id: 3,
      question: "Why should I sell my products on Alibaba.com?",
      answer: [
        "As an Alibaba.com seller, you get more than a digital storefront on a global marketplace. You get an end-to-end wholesale service platform calibrated to help you grow your business and provide services to your buyers. This is your opportunity to expand your sales with an additional revenue stream and reach new customers.",
      ],
    },
    {
      id: 4,
      question: "What is the next step once I have paid online?",
      answer: [
        "Once you've paid online, our customer support team will reach out to you to assist you with your business verification (BV). Once you've passed business verification, we will start the onboarding process to start preparing your online store launch. We will need some inputs from you, including product images, descriptions, your company logo, and other specifics that you want to show in your storefront.",
      ],
    },
    {
      id: 5,
      question: "What is Business Verification and is it required?",
      answer: [
        "After you sign up for Alibaba.com, you need to submit required documents that can prove you as a legal business entity registered in the US. This process is called business verification and is required for selling on Alibaba.com.",
      ],
    },
    {
      id: 6,
      question:
        "How much of my sales on Alibaba.com will be charged for commissions?",
      answer: [
        "We do not charge a commission on any sales you've made on Alibaba.com (0% commission). This gives you better profitability when you scale up your sales on Alibaba.com.",
      ],
    },
  ];

  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-semibold text-ts-blue mb-12">
        Frequently asked questions
      </h2>

      <div className="w-full flex flex-col gap-8 justify-center">
        {faqData.map((item) => (
          <div key={item.id} className="border-b border-b-ts-grey/30 pb-6 ">
            <button
              onClick={() => toggleFAQ(item.id)}
              className="w-full flex justify-between items-center text-left hover:cursor-pointer"
            >
              <span className="text-md font-medium text-ts-black">
                {item.question}
              </span>

              <span className="w-8 h-8 flex items-center justify-center rounded-full border border-ts-blue text-ts-blue hover:cursor-pointer hover:bg-ts-blue/20">
                {openId === item.id ? (
                  <FiMinus size={18} />
                ) : (
                  <FiPlus size={18} />
                )}
              </span>
            </button>

            {openId === item.id && (
              <div className="mt-4 ml-1 flex flex-col justify-center text-xs gap-2">
                {item.answer.map((ans, idx) => (
                  <div className="w-full flex flex-col justify-center">
                    {" "}
                    <p key={idx} className="text-ts-grey mb-2 flex gap-2">
                      <span className="flex items-center justify-center text-ts-grey">
                        <BsCircleFill className="h-1 w-1" />
                      </span>
                      <span>{ans}</span>
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSections;
