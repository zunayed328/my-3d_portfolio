import Hero from "./components/canvas/Hero";
import Navbar from "./components/canvas/Navbar";
import About from "./components/canvas/About";
import Experience from "./components/canvas/Experience";
import Feedbacks from "./components/canvas/Feedbacks";
import Tech from "./components/canvas/Tech";
import Works from "./components/canvas/Works";
import StarsCanvas from "./components/canvas/Stars";
import Contact from "./components/canvas/Contact";
import { BrowserRouter } from "react-router-dom";
import herobg from "./assets/tech/herobg.png";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        
        {/* Hero Section with Navbar */}
        <div
          className="bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${herobg})` }}
        >
          <Navbar />
          <Hero />
        </div>

        {/* Main Sections */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        {/* Contact + Canvas */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;