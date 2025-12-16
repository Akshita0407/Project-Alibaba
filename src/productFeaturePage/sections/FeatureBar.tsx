import { useState, useEffect } from "react";

const FeatureBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const content = [
    { id: 1, label: "Storefront and catalog", target: "storefront" },
    { id: 2, label: "Communication", target: "communication" },
    { id: 3, label: "Ads and lead generation", target: "adsAndLeads" },
    { id: 4, label: "Analytics and support", target: "analytics" },
    { id: 5, label: "Order management", target: "orderManagement" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 60 - 60;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {isSticky && <div className="h-[60px]" />}

      <div
        className={`w-full bg-[#e6efff] h-[60px] flex items-center justify-center px-4 shadow-sm transition-all duration-300
          ${isSticky ? "fixed top-[60px] left-0 right-0 z-40" : "relative"}`}
      >
        <div className="hidden lg:flex gap-8 text-[14px] font-semibold text-[#333]">
          {content.map((c) => (
            <button
              key={c.id}
              onClick={() => scrollToSection(c.target)}
              className="h-[60px] flex items-center px-4 hover:bg-[#c0d2f6] transition-colors cursor-pointer"
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
