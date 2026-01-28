import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/canvas/Navbar";
import Hero from "./components/canvas/Hero";
import Overview from "./components/Overview";
import Experience from "./components/canvas/Experience";
import Achievements from "./components/Achievements";
import FutureProjects from "./components/FutureProjects";
import StarsCanvas from "./components/canvas/Stars";
import About from "./components/About";
import Works from "./components/Works";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import Research from "./components/Research";

// Assets
import herobg from "./assets/tech/herobg.png";

// Home Page Component
const HomePage = () => {
  return (
    <>
      {/* Hero Section with Background */}
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <Hero />
      </div>

      {/* Main Sections */}
      <Overview />
      <Experience />
      <Achievements />
      <FutureProjects />

      {/* Contact Section with Stars Canvas */}
      <div className="relative z-0">
        <ContactSection variant="home" />
        <StarsCanvas />
      </div>
    </>
  );
};

// Contact Page Component
const ContactPage = () => {
  return (
    <div className="relative z-0 min-h-screen">
      <ContactSection variant="page" />
      <StarsCanvas />
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Fixed Navbar - Always visible */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Works />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/current" element={<Research />} />
          <Route path="/research/future" element={<Research />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;