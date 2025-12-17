import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const ResourceLayout = () => {
  return (
    <>
      <header></header>
      <div className="w-full flex lg:flex-row flex-col gap-[4%] md:p-15 p-6">
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

export default ResourceLayout;
