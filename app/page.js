import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <Achievements/>
        <AboutMe/>
        <Projects/>
        <EmailSection/>
        <Footer/>
      </div>
    </main>
  );
}
