import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Festivales from "./pages/Festivales.jsx";
import Favoritos from "./pages/Favoritos.jsx";
import Detalles from "./pages/Detalles.jsx";
import NotFound from "./pages/NotFound.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/festivales" element={<Festivales />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/detalles/:id" element={<Detalles />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
