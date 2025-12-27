import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

interface NavContent {
  id: number;
  link: string;
  to: string;
  hasDropdown?: boolean;
}
const navLinks: NavContent[] = [
  { id: 1, link: "Get Started", to: "/buyer" },
  {
    id: 2,
    link: "Why Alibaba.com",
    to: "/buyer/why-alibaba",
    hasDropdown: true,
  },
  { id: 3, link: "Pro Buyer", to: "/buyer/probuyer" },
  { id: 4, link: "Trade Services", to: "", hasDropdown: true },
  { id: 5, link: "Resources", to: "", hasDropdown: true },
  { id: 6, link: "Webinars", to: "", hasDropdown: true },
  { id: 7, link: "Partners", to: "/buyer/partner" },
];
const BuyerNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[60px] z-50  bg-white shadow-sm flex justify-between items-center px-5">
        <div className="w-full flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-orange-500 cursor-pointer">
            <Link to="/">Alibaba.com</Link>
          </h2>
          <div className="w-full justify-between max-w-2xl hidden lg:flex">
            {navLinks.map((item) => (
              <Link key={item.id} to={item.to}>
                <div className="flex  items-center text-[#666] mx-3  hover:text-[#333333] gap-1">
                  <span className="text-sm font-medium  cursor-pointer hover:text-blue-900 transition-colors hover:underline underline-offset-4">
                    {item.link}
                  </span>
                  {item.hasDropdown && <FaChevronDown size={10} />}
                </div>
              </Link>
            ))}
          </div>
          <div className="hidden lg:block">
            <button className="bg-[#ff6600] w-[120px] text-[16px] font-semibold border border-[#ff6600] text-white  py-2 rounded-full hover:cursor-pointer hover:bg-orange-700 transition-colors">
              Sign in
            </button>
          </div>
          <FaBars
            onClick={() => setOpen(true)}
            className="lg:hidden cursor-pointer text-[#ff6600]"
            size={24}
          />
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 min-h-screen w-[200px] bg-white shadow-2xl z-50 transition-transform duration-300 lg:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="w-full h-screen flex flex-col gap-5 pt-20 px-6">
          <div className=" lg:hidden flex flex-col gap-3">
            {navLinks.map((item) => (
              <Link key={item.id} to={item.to}>
                <div className="flex  items-center text-[#666] mx-3  hover:text-[#333333] gap-1">
                  <span className="text-sm font-medium  cursor-pointer hover:text-blue-900 transition-colors hover:underline underline-offset-4">
                    {item.link}
                  </span>
                  {item.hasDropdown && <FaChevronDown size={12} />}
                </div>
              </Link>
            ))}
          </div>
          <div className="block lg:hidden">
            <button className="bg-[#ff6600] w-[120px] text-[16px] font-semibold border border-[#ff6600] text-white  py-2 rounded-full hover:cursor-pointer hover:bg-orange-700 transition-colors">
              Sign in
            </button>
          </div>
        </div>

        <div
          className="absolute top-6 right-6 text-[#ff6600] hover:text-orange-700 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <ImCross size={20} />
        </div>
      </div>
    </>
  );
};

export default BuyerNavbar;
