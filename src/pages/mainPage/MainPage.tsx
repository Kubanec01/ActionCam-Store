import { Hero } from "./hero/Hero";
import { Home } from "./home/Home";
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
