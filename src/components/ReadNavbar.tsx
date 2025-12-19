import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import Dropdown from "./Dropdown";

const ReadNavbar = () => {
  const categoriesDropDown = [
    { id: 1, label: "Apparel & Accessories", to: "/read/categories/apparel" },
    { id: 2, label: "Beauty & Personal Care", to: "/read/categories/beauty" },
    { id: 3, label: "Consumer Electronics", to: "/read/categories/consumer" },
    { id: 4, label: "Home & Garden", to: "/read/categories/homeGarden" },
    { id: 5, label: "Chemicals & Plastics", to: "/read/categories/chemical" },
    {
      id: 6,
      label: "Home Improvement",
      to: "/read/categories/homeImprovement",
    },
    { id: 7, label: "Machinery", to: "/read/categories/machinery" },
    {
      id: 8,
      label: "Mother, Kids & Toys",
      to: "/read/categories/motherKidsToys",
    },
    { id: 9, label: "Packaging & Printing", to: "/read/categories/packaging" },
    { id: 10, label: "Raw Materials", to: "/read/categories/rawMaterial" },
    { id: 11, label: "Renewable Energy", to: "/read/categories/renewable" },
    { id: 12, label: "Sports", to: "/read/categories/sports" },
    {
      id: 13,
      label: "Vehicle Part & Accessories",
      to: "/read/categories/vehicle",
    },
  ];

  const logDropDown = [
    { id: 1, label: "Market Updates", to: "/read/logistics/market" },
    { id: 2, label: "Insights", to: "/read/logistics/insight" },
    { id: 3, label: "Glossary", to: "/read/logistics/glossary" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [logOpen, setLogOpen] = useState(false);

  return (
    <>
      <header className=" w-full relative bg-white shadow-sm">
        <div className="h-20 px-6 lg:px-15 flex items-center justify-between">
          <NavLink to="/read" className="w-[150px] md:w-[200px]">
            <img
              src="https://img.baba-blog.com/2024/02/reads-logo-black-1024x97-1.png"
              alt="logo"
              className="w-full h-[35px] object-contain"
            />
          </NavLink>

          {/* -----------Desktop ----------- */}
          <nav className="hidden lg:flex w-full max-w-[75%] justify-between items-center">
            <Dropdown
              title="Categories"
              items={categoriesDropDown}
              isOpen={catOpen}
              setIsOpen={setCatOpen}
              linkTo="/read/categories"
            />

            <NavLink to="/latest" className="nav-link">
              Latest News
            </NavLink>
            <NavLink to="/start" className="nav-link">
              Get Started
            </NavLink>
            <NavLink to="/sales" className="nav-link">
              Sales & Marketing
            </NavLink>

            <Dropdown
              linkTo="/read/logistics"
              title="Logistics"
              items={logDropDown}
              isOpen={logOpen}
              setIsOpen={setLogOpen}
            />

            <NavLink to="/videos" className="nav-link">
              Videos
            </NavLink>
            <NavLink to="/alibaba" className="nav-link">
              Go to Alibaba.com
            </NavLink>
          </nav>

          <FaBars
            size={24}
            className="lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </header>

      {/*----Mobile-----*/}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 w-[280px] h-full bg-white z-50 shadow-2xl transition-transform
        ${menuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
      >
        <div className="pt-20 px-6 flex flex-col gap-2">
          <Dropdown
            title="Categories"
            linkTo="/read/categories"
            items={categoriesDropDown}
            isOpen={catOpen}
            setIsOpen={setCatOpen}
            isMobile
            closeMenu={() => setMenuOpen(false)}
          />

          <NavLink to="/latest" onClick={() => setMenuOpen(false)}>
            Latest News
          </NavLink>

          <NavLink to="/start" onClick={() => setMenuOpen(false)}>
            Get Started
          </NavLink>

          <NavLink to="/sales" onClick={() => setMenuOpen(false)}>
            Sales & Marketing
          </NavLink>

          <Dropdown
            linkTo="/read/logistics"
            title="Logistics"
            items={logDropDown}
            isOpen={logOpen}
            setIsOpen={setLogOpen}
            isMobile
            closeMenu={() => setMenuOpen(false)}
          />

          <NavLink to="/videos" onClick={() => setMenuOpen(false)}>
            Videos
          </NavLink>

          <NavLink to="/alibaba" onClick={() => setMenuOpen(false)}>
            Go to Alibaba.com
          </NavLink>
        </div>

        <ImCross
          size={20}
          className="absolute top-6 right-6 cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
      </div>
    </>
  );
};

export default ReadNavbar;
