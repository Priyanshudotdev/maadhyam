import React, { useRef } from "react";
import { FloatingNav } from "./Components/FloatingNavbar";
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
    { name: "Launch Event", link: "launchEvent" },
    { name: "Details", link: "details" },
    { name: "Heads", link: "heads" },
    { name: "Contact Us", link: "contact" },
  ];

  const handleNavClick = (link) => {
    const scrollToRef = {
      hero: heroRef,
      contact: contactRef,
      launchEvent: launchEventRef,
      details: serviceRef,
      heads: headsRef,
    };

    const targetRef = scrollToRef[link];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleButtonClick = () => {
    const scrollToRef = {
      join: joinRef,
    };

    const targetRef = scrollToRef["join"];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <FloatingNav navItems={navItems} onNavClick={handleNavClick} />

      <div className="w-full min-h-screen bg-transparent font-space text-[#f2f2f2]">
        <div ref={heroRef}>
          <AuroraHero onButtonClick={handleButtonClick} />
        </div>
        <div
          className="px-5 bg-transparent md:px-6 lg:px-8"
          ref={launchEventRef}
        >
          <LaunchEvent />
        </div>
        <div
          className="px-5 min-h-screen bg-transparent md:px-6 lg:px-8"
          ref={serviceRef}
        >
          <Service />
        </div>
        <div className="px-5 bg-transparent md:px-6 lg:px-8" ref={headsRef}>
          <MagazineHead />
        </div>
        <div
          className="px-5 min-h-screen bg-transparent md:px-6 lg:px-8"
          ref={contactRef}
        >
          <Contact />
        </div>
        <div ref={joinRef} className="px-5 bg-transparent sm:hidden">
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
