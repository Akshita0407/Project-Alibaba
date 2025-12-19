import { Outlet } from "react-router-dom";
import BottomBar from "../components/BottomBar";
import ReadNavbar from "../components/ReadNavbar";

const ReadsLayout = () => {
  return (
    <div className="">
      <header className="h-20 ">
        <ReadNavbar />
      </header>

      <main className="h-full w-full bg-[#f5f5f5]">
        <Outlet />
      </main>

      <footer className="">
        <BottomBar />
      </footer>
    </div>
  );
};

export default ReadsLayout;
