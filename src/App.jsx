import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Projects1 from "./components/Projects1";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import About from "./components/About";
import AnimatedText from "./components/Animatedtext";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check screen width

  useEffect(() => {
    // Initialize animations
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });

    // Update state on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {isMobile ? <Projects /> : <Projects1 />} {/* Toggle components based on screen size */}
      <Contact />
      <footer className="p-3 text-center">
        <h6>RAGHURAM YERRAMSETTI</h6>
        <AnimatedText />
        <p className="mb-20">theultimate45 © All CopyRights Reserved 2025</p>
      </footer>
    </div>
  );
};

export default App;
