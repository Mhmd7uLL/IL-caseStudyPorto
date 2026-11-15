import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CegahScam from "./pages/CegahScam";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cegahScam" element={<CegahScam />} />
      </Routes>
    </div>
  );
}