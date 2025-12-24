import { BrowserRouter, Routes, Route } from "react-router-dom";
import "swiper/swiper-bundle.css";
import "swiper/swiper.css";
import MainLayout from "./layout/MainLayout";
import Home from "./homePage/Index";
import UsHome from "./usHomePage/Index";
import Feature from "./productFeaturePage/Index";
import Solution from "./solutionPage/Index";
import Platform from "./platformPage/Index";
import BusinessLayout from "./layout/BusinessLayout";
import Business from "./resourcePage/Index";
import ReadsLayout from "./layout/ReadsLayout";
import Read from "./readHomePage/Index";
import Categories from "./categoriesPage/Index";
import ProductResource from "./categoriesPage/sections/ProductResource";
import Apparel from "./categoriesPage/sections/Apparel";
import PersonalCare from "./categoriesPage/sections/PersonalCare";
import Electronics from "./categoriesPage/sections/Electronics";
import HomeAndGarden from "./categoriesPage/sections/HomeAndGarden";
import Chemical from "./categoriesPage/sections/Chemical";
import Machinery from "./categoriesPage/sections/Machinery";
import MotherKidToy from "./categoriesPage/sections/MotherKidToy";
import PackagingPrinting from "./categoriesPage/sections/PackagingPrinting";
import RawMaterial from "./categoriesPage/sections/RawMaterial";
import Renewable from "./categoriesPage/sections/Renewable";
import Sports from "./categoriesPage/sections/Sports";
import VehiclePart from "./categoriesPage/sections/VehiclePart";
import HomeImprovement from "./categoriesPage/sections/HomeImprovement";
import BuyerLayout from "./layout/BuyerLayout";
import BuyerHomePage from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="us" element={<UsHome />} />
          <Route path="feature" element={<Feature />} />
          <Route path="solutions" element={<Solution />} />
          <Route path="platform" element={<Platform />} />
        </Route>

        <Route path="/blogs" element={<BusinessLayout />}>
          <Route index element={<Business />} />
        </Route>

        <Route path="/read" element={<ReadsLayout />}>
          <Route index element={<Read />} />

          <Route path="categories" element={<Categories />}>
            <Route index element={<ProductResource />} />
            <Route path="apparel" element={<Apparel />} />
            <Route path="beauty" element={<PersonalCare />} />
            <Route path="consumer" element={<Electronics />} />
            <Route path="homeGarden" element={<HomeAndGarden />} />
            <Route path="chemical" element={<Chemical />} />
            <Route path="homeImprovement" element={<HomeImprovement />} />
            <Route path="machinery" element={<Machinery />} />
            <Route path="motherKidsToys" element={<MotherKidToy />} />
            <Route path="packaging" element={<PackagingPrinting />} />
            <Route path="rawMaterial" element={<RawMaterial />} />
            <Route path="renewable" element={<Renewable />} />
            <Route path="sports" element={<Sports />} />
            <Route path="vehicle" element={<VehiclePart />} />
          </Route>
        </Route>

        <Route path="/buyer" element={<BuyerLayout />}>
          <Route index element={<BuyerHomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
