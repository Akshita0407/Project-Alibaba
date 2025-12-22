import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

interface NavContent {
  id: number;
  link: string;
  to: string;
}

const title: NavContent[] = [
  { id: 1, link: "Solutions", to: "/" },
  { id: 2, link: "Resources", to: "/" },
  { id: 3, link: "Pricing", to: "/" },
];

const SellerNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`w-full h-20 fixed top-0 left-0 z-50 flex items-center px-5 transition-all duration-300
        ${scrolled ? "bg-black text-white" : "bg-transparent text-black"}
      `}
      >
        <div className="w-full flex items-center justify-between gap-4 text-[14px]">
          <h2 className="text-2xl font-bold cursor-pointer  ">
            <Link
              to="/"
              className={`${scrolled ? "text-white" : "text-orange-500"}`}
            >
              Alibaba.com
            </Link>
          </h2>

          <div className="w-full justify-between max-w-[300px] hidden lg:flex">
            {title.map((item) => (
              <Link key={item.id} to={item.to}>
                <span
                  className={`mx-3 font-medium cursor-pointer transition-colors
                  ${
                    scrolled
                      ? "text-white hover:text-gray-300"
                      : "text-blue-600 hover:text-blue-900"
                  }
                `}
                >
                  {item.link}
                </span>
              </Link>
            ))}
          </div>

          <div className="w-fit gap-3 hidden lg:flex">
            <div
              className={`px-5 py-2 font-bold cursor-pointer transition-colors
              ${
                scrolled
                  ? "text-white hover:bg-white/10"
                  : "text-blue-600 hover:bg-blue-50"
              }
            `}
            >
              Sign in
            </div>

            <div className="bg-blue-600 font-bold text-white px-5 py-2 rounded cursor-pointer hover:bg-blue-700 transition-colors">
              Start Selling now
            </div>
          </div>

          <FaBars
            onClick={() => setOpen(true)}
            className={`lg:hidden cursor-pointer ${
              scrolled ? "text-white" : "text-orange-500"
            } `}
            size={24}
          />
        </div>
      </div>
      {/*---Mobile--- */}
      {open && (
        <div
          className="fixed lg:hidden inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 min-h-screen w-[200px] bg-black shadow-2xl z-50 transition-transform duration-300 lg:hidden justify-between
              ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="w-full h-screen flex flex-col gap-1 pt-20 px-6  ">
          <div className="flex flex-col">
            {title.map((item) => (
              <Link key={item.id} to={item.to}>
                <span className="w-full text-sm font-medium cursor-pointer hover:bg-gray-50 text-white py-3 px-4 rounded-lg transition-colors hover:underline underline-offset-4">
                  {item.link}
                </span>
              </Link>
            ))}
          </div>
          <div className="w-full justify-center items-center gap-3 flex flex-col mt-6">
            <div className="w-full text-xs font-semibold  rounded-full px-5 py-2 hover:cursor-pointer text-white text-center border border-white hover:bg-blue-50 transition-colors">
              Sign in
            </div>
            <div className="w-full bg-blue-600 text-xs font-semibold text-white px-5 py-2 rounded-full hover:cursor-pointer text-center hover:bg-blue-700 transition-colors">
              Start Selling
            </div>
          </div>
        </div>

        <div
          className="absolute top-6 right-6 text-white hover:text-red-900 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <ImCross size={20} />
        </div>
      </div>
    </>
  );
};

export default SellerNavbar;
