import React, { useRef } from "react";
import { FloatingNavbar } from "./Components/FloatingNavbar";
import Footer from "./Components/Footer";
import NativeJoin from "./Components/NativeJoin";
import Service from "./Components/Services";
import Contact from "./Pages/Contact";
import { AuroraHero } from "./Pages/Hero";
import LaunchEvent from "./Pages/LaunchEvent";
import MagazineHead from "./Components/MagazineHead";

function App() {
  const heroRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);
  const launchEventRef = useRef(null);
  const joinRef = useRef(null);
  const headsRef = useRef(null);

  const navItems = [
    { name: "Team", link: "/team" },
    { name: "Previous year magazine", link: "/previous-year-magazine" },
  ];

  return (
    <>
      <FloatingNavbar navItems={navItems} />

      <div className="w-full min-h-screen bg-transparent font-space text-[#f2f2f2]">
        <div ref={heroRef}>
          <AuroraHero />
        </div>
        <div className="px-5 bg-transparent md:px-6 lg:px-8">
          <LaunchEvent />
        </div>
        <div className="px-5 min-h-screen bg-transparent md:px-6 lg:px-8">
          <Service />
        </div>
        <div className="px-5 bg-transparent md:px-6 lg:px-8">
          <MagazineHead />
        </div>
        <div className="px-5 min-h-screen bg-transparent md:px-6 lg:px-8">
          <Contact />
        </div>
        <div className="px-5 bg-transparent sm:hidden">
          <NativeJoin />
        </div>
        <div className="px-5">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
