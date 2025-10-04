import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Projects from "./pages/Home/Projects.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;

