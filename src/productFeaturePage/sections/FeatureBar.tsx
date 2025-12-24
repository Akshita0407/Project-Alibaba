import { useState, useEffect } from "react";

interface Feature {
  id: number;
  label: string;
  target: string;
}

interface ContentProps {
  content?: Feature[];
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
}

const defaultContent: Feature[] = [
  { id: 1, label: "Storefront and catalog", target: "storefront" },
  { id: 2, label: "Communication", target: "communication" },
  { id: 3, label: "Ads and lead generation", target: "adsAndLeads" },
  { id: 4, label: "Analytics and support", target: "analytics" },
  { id: 5, label: "Order management", target: "orderManagement" },
];

const defaultBgColor = "#e6efff";
const defaultTextColor = "#333";
const deafaultHoverBgColor = "#c0d2f6";
const FeatureBar = ({
  content = defaultContent,
  bgColor = defaultBgColor,
  hoverBgColor = deafaultHoverBgColor,
  textColor = defaultTextColor,
}: ContentProps) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 120;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isSticky && <div className="h-[60px]" />}

      <div
        className={`w-full  h-[60px] flex items-center justify-center px-4 shadow-sm transition-all duration-300
        ${isSticky ? "fixed top-[60px] left-0 right-0 z-40" : "relative"}`}
        style={{ backgroundColor: bgColor }}
      >
        <div
          className={`hidden lg:flex gap-8 text-[14px] font-semibold `}
          style={{ color: textColor }}
        >
          {content.map((c) => (
            <button
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = hoverBgColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
              key={c.id}
              onClick={() => scrollToSection(c.target)}
              className={`h-[60px] flex items-center px-4 transition-colors cursor-pointer`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="lg:hidden w-full">
          <select
            className="w-full h-10 px-3 rounded-md text-[14px] font-semibold"
            defaultValue=""
            onChange={(e) => scrollToSection(e.target.value)}
          >
            <option value="" disabled>
              Select feature
            </option>

            {content.map((c) => (
              <option key={c.id} value={c.target}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default FeatureBar;
