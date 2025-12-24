import { Outlet } from "react-router-dom";
import BottomBar from "../components/BottomBar";
import BuyerNavbar from "../Pages/components/Buyer-Navbar";

const BuyerLayout = () => {
  return (
    <>
      <header className="h-[60px] ">
        <BuyerNavbar />
      </header>

      <main className="h-full w-full bg-[#f5f5f5]">
        <Outlet />
      </main>

      <footer className="">
        <BottomBar />
      </footer>
    </>
  );
};

export default BuyerLayout;
