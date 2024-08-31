import { AboutNavbar } from "../../components/navbars/aboutNavbar/AboutNavbar";
import { Hero } from "./home/hero/Hero";
import { Home } from "./home/Home";

export function AboutPage() {
  return (
    <div>
      <AboutNavbar />
      <Hero />
      <Home />
    </div>
  );
}
