import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./Pages/Team.jsx";
import PreviousYearMagazine from "./Pages/PreviousYearMagazine.jsx";
import { FloatingNavbar } from "./Components/FloatingNavbar.jsx";
import Footer from "./Components/Footer.jsx";

const navItems = [
  { name: "Team", link: "/team" },
  { name: "Previous year magazine", link: "/previous-year-magazine" },
];

createRoot(document.getElementById("root")).render(
  <Router>
    <FloatingNavbar navItems={navItems} />
    <Routes>
      <Route element={<App />} path="/"></Route>
      <Route element={<Team />} path="/team"></Route>
      <Route
        element={<PreviousYearMagazine />}
        path="/previous-year-magazine"
      ></Route>
    </Routes>
    <div className="px-5">
      <Footer />
    </div>
  </Router>
);
