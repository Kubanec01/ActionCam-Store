import { MainRoutes } from "./routes/MainRoutes";
import { UseScrollToTop } from "./hooks/useScrollToTop";
import { Footer } from "./components/footer/Footer";
import { ShoppingCartProvider } from "./components/context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <UseScrollToTop />
      <MainRoutes />
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
