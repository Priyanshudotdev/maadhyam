import React, { useRef } from "react";
import Footer from "./Components/Footer";
import NativeJoin from "./Components/NativeJoin";
import Service from "./Components/Services";
import Contact from "./Pages/Contact";
import { AuroraHero } from "./Pages/Hero";
import LaunchEvent from "./Pages/LaunchEvent";

function App() {
  const navItems = [
    { name: "Team", link: "/team" },
    { name: "Previous year magazine", link: "/previous-year-magazine" },
  ];

  return (
    <>
      <div className="w-full min-h-screen bg-transparent font-space text-[#f2f2f2]">
        <div>
          <AuroraHero />
        </div>
        <div className="px-5 bg-transparent md:px-6 lg:px-8">
          <LaunchEvent />
        </div>
        <div className="px-5 min-h-screen bg-transparent md:px-6 lg:px-8">
          <Service />
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
