import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const title = [
    { id: 1, label: "Platform", to: "/platform" },
    { id: 2, label: "Solutions", to: "/solutions" },
    { id: 3, label: "Features", to: "/feature" },
    { id: 4, label: "Pricing", to: "/pricing" },
    { id: 5, label: "Resources", to: "/resources" },
    { id: 6, label: "Business blogs", to: "/blogs" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full h-[60px] fixed top-0 left-0 z-50 bg-white shadow-sm flex justify-between items-center px-5">
        <div className="w-full flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-orange-500 cursor-pointer">
            <NavLink to="/">Alibaba.com</NavLink>
          </h2>

          <div className="w-full justify-between max-w-2xl hidden lg:flex">
            {title.map((item) => (
              <NavLink key={item.id} to={item.to}>
                <span className="text-sm font-medium text-blue-600 mx-3 cursor-pointer hover:text-blue-900 transition-colors hover:underline underline-offset-4">
                  {item.label}
                </span>
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <NavLink
              to="/us"
              className="text-sm text-blue-600 hover:text-blue-900 hover:underline underline-offset-4"
            >
              Us Page
            </NavLink>
          </div>

          <FaBars
            onClick={() => setOpen(true)}
            className="lg:hidden cursor-pointer text-blue-600"
            size={24}
          />

          <div className="w-fit gap-2 hidden lg:flex">
            <div className="text-xs font-semibold border rounded-full px-5 py-2 hover:cursor-pointer border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors">
              Contact Us
            </div>
            <div className="bg-blue-600 text-xs font-semibold border border-blue-600 text-white px-5 py-2 rounded-full hover:cursor-pointer hover:bg-blue-700 transition-colors">
              Start Selling
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 min-h-screen w-[280px] bg-white shadow-2xl z-50 transition-transform duration-300 lg:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="w-full h-screen flex flex-col gap-1 pt-20 px-6">
          {title.map((item) => (
            <NavLink key={item.id} to={item.to}>
              <span className="w-full text-sm font-medium cursor-pointer hover:bg-gray-50 text-blue-600 py-3 px-4 rounded-lg transition-colors hover:underline underline-offset-4">
                {item.label}
              </span>
            </NavLink>
          ))}

          <div className="w-full justify-center items-center gap-3 flex flex-col mt-6">
            <NavLink
              to="/us"
              className="w-full text-xs font-semibold border rounded-full px-5 py-3 hover:cursor-pointer border-blue-600 text-blue-600 text-center hover:bg-gray-50 transition-colors hover:underline underline-offset-4"
            >
              Us Page
            </NavLink>
            <div className="w-full text-xs font-semibold border rounded-full px-5 py-3 hover:cursor-pointer border-blue-600 text-blue-600 text-center hover:bg-blue-50 transition-colors">
              Contact Us
            </div>
            <div className="w-full bg-blue-600 text-xs font-semibold text-white px-5 py-3 rounded-full hover:cursor-pointer text-center hover:bg-blue-700 transition-colors">
              Start Selling
            </div>
          </div>
        </div>

        <div
          className="absolute top-6 right-6 text-blue-600 hover:text-red-900 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <ImCross size={20} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
