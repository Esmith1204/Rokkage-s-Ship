import Navbar from "./components/Navbar/navbar.jsx";
import Footer from "./components/Footer/footer.jsx";
import Home from "./pages/Home/Home.jsx";
import ContactMe from "./pages/ContactMe/ContactMe.jsx";
import Projects from "./pages/Projects/Work.jsx";
import Designs from "./pages/Designs/Designs.jsx";
import Navbar2 from "./components/Navbar/Navbar2.jsx";


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
      {/* // Can switch between Navbar and Navbar2 components here */}
      <Navbar2 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/designs" element={<Designs />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;

