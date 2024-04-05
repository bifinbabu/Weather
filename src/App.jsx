import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Forecast from "./Pages/Forecast";
import Home from "./Pages/Home";
import { pages } from "./Pages/config";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={pages.home} element={<Home />} />
        <Route path={pages.forecast} element={<Forecast />} />
        <Route path={pages.about} element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
