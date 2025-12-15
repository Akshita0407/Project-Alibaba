import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./homePage/Index";
import UsHome from "./usHomePage/Index";
import Feature from "./productFeaturePage/Index";
import "swiper/swiper-bundle.css";
import "swiper/swiper.css";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="us" element={<UsHome />} />
            <Route path="feature" element={<Feature />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
