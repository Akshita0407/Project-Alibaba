import { Link } from "react-router-dom";
interface NavContent {
  id: number;
  link: string;
  to: string;
}
const title: NavContent = [
  { id: 1, link: "Solutions", to: "/" },
  { id: 2, link: "Resources", to: "" },
  { id: 3, link: "Pricing", to: "" },
];

const SellerNavbar = () => {
  return (
    <>
      <div className="w-full h-20 fixed top-0 left-0 z-50 bg-transparent flex justify-between items-center px-5">
        <div className="w-full flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-orange-500 cursor-pointer">
            <Link to="/">Alibaba.com</Link>
          </h2>
        </div>
      </div>
    </>
  );
};

export default SellerNavbar;
