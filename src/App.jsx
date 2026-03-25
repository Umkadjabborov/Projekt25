import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Fotter";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import SaidAhmad from "./components/pages/SaidAhmad";
import SaidaZunnunova from "./components/pages/SaidaZunnunova";
import Gallery from "./components/pages/Gallery";
import Timeline from "./components/pages/Timeline";
import VirtualTour from "./components/pages/VirtualTour";
import Contact from "./components/pages/Contact";

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