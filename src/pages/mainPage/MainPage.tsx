import { Hero } from "./components/Hero";
import { Home } from "./components/Home";
import { HomeNavbar } from "../../components/navbars/homeNavbar/HomeNavbar";

export function MainPage() {
  return (
    <div>
      <HomeNavbar />
      <Hero />
      <Home />
    </div>
  );
}
