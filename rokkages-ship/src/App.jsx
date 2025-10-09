import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import ContactMe from "./pages/ContactMe/ContactMe.jsx";
import Projects from "./pages/Projects/Projects.jsx";

import { Routes, Route } from "react-router-dom";
import { motion } from "motion/react";

function App() {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;

