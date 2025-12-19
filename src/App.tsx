import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./homePage/Index";
import UsHome from "./usHomePage/Index";
import Feature from "./productFeaturePage/Index";
import Solution from "./solutionPage/Index";
import Platform from "./platformPage/Index";
import BusinessLayout from "./layout/BusinessLayout";
import Business from "./resourcePage/Index";
import ReadsLayout from "./layout/ReadsLayout";
import ReadHome from "./components/ReadHome";
import Categories from "./categoriesPage/Index";
import ProductResource from "./categoriesPage/sections/ProductResource";
import Apparel from "./categoriesPage/sections/Apparel";
import PersonalCare from "./categoriesPage/sections/PersonalCare";

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
          <Route index element={<ReadHome />} />

          <Route path="categories" element={<Categories />}>
            <Route index element={<ProductResource />} />
            <Route path="apparel" element={<Apparel />} />
            <Route path="beauty" element={<PersonalCare />} />
            <Route path="consumer" element={<ProductResource />} />
            <Route path="homeGarden" element={<ProductResource />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
