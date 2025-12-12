import { Link } from "react-router-dom";
const links = [
  { label: "AliExpress", to: "" },
  { label: "1688.com", to: "" },
  { label: "Tmall Taobao World", to: "" },
  { label: "Alipay", to: "" },
  { label: "Lazada", to: "" },
  { label: "Taobao Global", to: "" },
];

const browseLinks = [
  { label: "Onetouch", to: "" },
  { label: "Country Search", to: "" },
  { label: "Affiliate", to: "" },
];

const policyLinks = [
  { label: "Product Listing Policy", to: "" },
  { label: "Intellectual Property Protection", to: "" },
  { label: "Privacy Policy", to: "" },
  { label: "Terms of Use", to: "" },
  { label: "User Information Legal Enquiry Guide", to: "" },
  { label: "Integrity Compliance", to: "" },
];

const copyRight = [
  {
    id: 1,
    imgSrc: "",
    link: "© 1999-2024 Alibaba.com. All rights reserved.",
    to: "",
  },
  { id: 2, imgSrc: "", link: "浙公网安备 33010002000092号", to: "" },
  { id: 3, link: "浙B2-20120091-4", to: "" },
];

const BottomBar = () => {
  return (
    <div className="w-full bg-[#f5f5f5] p-6 flex flex-col gap-3 items-center text-center">
      <div className="flex flex-wrap justify-center">
        {links.map((c, index) => (
          <span
            key={index}
            className="flex items-center text-[#999] text-[14px]"
          >
            <Link to={c.to} className="hover:underline">
              {c.label}
            </Link>
            {index !== links.length - 1 && <span className="mx-2">|</span>}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap justify-center">
        <span className="text-[#999] mr-2 text-[14px]">
          Browse Alphabetically:
        </span>
        {browseLinks.map((c, index) => (
          <span
            key={index}
            className="flex items-center text-[#999] text-[14px]"
          >
            <Link to={c.to} className="hover:underline">
              {c.label}
            </Link>
            {index !== browseLinks.length - 1 && (
              <span className="mx-2">|</span>
            )}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap justify-center">
        {policyLinks.map((c, index) => (
          <span
            key={index}
            className="flex items-center text-[#999] text-[14px]"
          >
            <Link to={c.to} className="hover:underline">
              {c.label}
            </Link>
            {index !== policyLinks.length - 1 && (
              <span className="mx-2">-</span>
            )}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-[#999] text-[14px]">
        {copyRight.map((c) => (
          <span key={c.id} className="flex items-center gap-1">
            {c.imgSrc && <img src={c.imgSrc} alt="" className="w-4 h-4" />}
            <Link to={c.to}>{c.link}</Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;
