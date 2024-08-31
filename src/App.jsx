
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Technologies from "./components/Technologies";
// import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


export default function App() {
  return (
    <div
      className="overflow-x-hidden text-white antialiased 
    selection:bg-cyan-300  selection:text-cyan-900"
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <Technologies />
        {/* <Experiences /> */}
        <Projects />
        <Contact/>
      </div>
    </div>
  );
}
