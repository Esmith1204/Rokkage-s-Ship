import { useState } from "react";
import Navbar from "./components/Navbar/navbar.jsx";
import Footer from "./components/Footer/footer.jsx";
import Home from "./pages/Home/Home.jsx";
import ContactMe from "./pages/ContactMe/ContactMe.jsx";
import Projects from "./pages/Projects/Work.jsx";
import Designs from "./pages/Designs/Designs.jsx";
import Navbar2 from "./components/Navbar/Navbar2.jsx";
import Loader from "./components/Loader/loader.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>
      <Loader onLoadComplete={() => setIsLoaded(true)} />
      
      <div
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.8s ease-in',
        }}
      >
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
    </div>
  );
}

export default App;

