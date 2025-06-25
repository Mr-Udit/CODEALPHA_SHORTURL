import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import Header from "./components/Header";


function App() {
  return (
    <div>
      {/* Navigation */}
      {/* Route Config */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </div>
  );
}

export default App;
