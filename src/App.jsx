import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../src/components/Nav.jsx";
import Home from "../src/pages/Home.jsx";
import ProjectsInfo from "./pages/ProjectsInfo";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleContrast() {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    if (newIsDarkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("isDarkMode", "true");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("isDarkMode", "false");
    }
  }

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode") === "true";
    setIsDarkMode(isDarkMode);
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav toggleDarkMode={() => toggleContrast()} />
        <Routes>
          <Route
            path="/"
            element={<Home toggleDarkMode={() => toggleContrast()} />}></Route>
          <Route path="/projects" element={<ProjectsInfo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer toggleDarkMode={() => toggleContrast()} />
      </div>
    </Router>
  );
}

export default App;
