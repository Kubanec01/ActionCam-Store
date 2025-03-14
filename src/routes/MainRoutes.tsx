import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const MainPage = lazy(() => import("../pages/mainPage/MainPage"));
const AboutPage = lazy(() => import("../pages/aboutPage/AboutPage"));
const ShopPage = lazy(() => import("../pages/shopPage/ShopPage"));

export function MainRoutes() {
  return (
    <Suspense
      fallback={
        <div>
          <h1>Loading</h1>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Suspense>
  );
}
