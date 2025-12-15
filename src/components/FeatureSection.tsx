import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  faqs: FAQ[];
}

const FeatureSection = ({
  title,
  subtitle,
  description,
  faqs,
}: FeatureSectionProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(
    faqs[0]?.id || null
  );

  return (
    <div className="flex flex-col  ">
      <div className=" w-full flex flex-col gap-4 lg:p-5 text-[#2f4480]">
        <p className="text-xs md:text-xl text-[#245ecf]  leading-snug">
          {subtitle}
        </p>
        <h2 className="text-2xl md:text-4xl font-bold leading-snug">{title}</h2>
        <p className="text-xs md:text-[14px] leading-snug">{description}</p>
      </div>

      <div className="flex flex-col">
        {faqs.map((faq) => (
          <Accordion
            key={faq.id}
            expanded={expandedId === faq.id}
            onChange={() =>
              setExpandedId(expandedId === faq.id ? null : faq.id)
            }
            elevation={0}
            className="bg-transparent! p-0!"
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600} fontSize="14px" color="#2f4480">
                {faq.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography color="#4a5568" fontSize="12px" lineHeight={1.6}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
