import { MainRoutes } from "./routes/MainRoutes";
import { UseScrollToTop } from "./hooks/useScrollToTop";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <UseScrollToTop />
      <MainRoutes />
      <Footer />
    </>
  );
}

export default App;
