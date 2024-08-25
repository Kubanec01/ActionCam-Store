import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function UseScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
