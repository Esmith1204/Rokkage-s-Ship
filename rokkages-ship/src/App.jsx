import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import { Routes, Route, Link } from "react-router-dom";

// Pages 
import Home from "./pages/Home/Home";

function Home() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default Home;
