import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const BusinessLayout = () => {
  return (
    <>
      <header></header>
      <div className="w-full flex lg:flex-row flex-col gap-[4%] ">
        <main className="w-full h-auto">
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default BusinessLayout;
