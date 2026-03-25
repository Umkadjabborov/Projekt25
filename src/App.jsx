import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SaidAhmad from "./pages/SaidAhmad";
import SaidaZunnunova from "./pages/SaidaZunnunova";
import Gallery from "./pages/Gallery";
import Timeline from "./pages/Timeline";
import VirtualTour from "./pages/VirtualTour";
import Contact from "./pages/Contact";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/said-ahmad" element={<SaidAhmad />} />
        <Route path="/saida-zunnunova" element={<SaidaZunnunova />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/virtual-tour" element={<VirtualTour />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;