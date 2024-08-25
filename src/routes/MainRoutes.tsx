import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/mainPage/MainPage";
import { AboutPage } from "../pages/aboutPage/AboutPage";
import { ShopPage } from "../pages/shopPage/shopPage";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
