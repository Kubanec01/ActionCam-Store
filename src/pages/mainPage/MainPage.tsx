import { Hero } from "./components/Hero";
import { Home } from "./components/Home";
import { HomeNavbar } from "./components/homeNavbar/HomeNavbar";

function MainPage() {
  return (
    <div>
      <HomeNavbar />
      <Hero />
      <Home />
    </div>
  );
}

export default MainPage