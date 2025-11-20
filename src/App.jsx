import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AboutUs from "./components/About/AboutUs";
import Projects from "./components/Projects/Projects";
import ProjectsList from "./components/Projects/ProjectsList";
import LPDemo from "./components/LPDemo";
import Terms from "./components/Footer/Terms";
import Privacy from "./components/Footer/Privacy";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectsList />} />
        <Route path="/projects/:id" element={<Projects />} />
        <Route path="/lpdemo" element={<LPDemo />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
