import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./Pages/Team.jsx";
import PreviousYearMagazine from "./Pages/PreviousYearMagazine.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route element={<App />} path="/"></Route>
      <Route element={<Team />} path="/team"></Route>
      <Route
        element={<PreviousYearMagazine />}
        path="/previous-year-magazine"
      ></Route>
    </Routes>
  </Router>
);
