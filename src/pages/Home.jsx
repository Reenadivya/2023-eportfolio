import React from "react";
import Landing from "../components/Landing";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

function Home({ toggleDarkMode }) {
  return (
    <>
      <Landing toggleDarkMode={toggleDarkMode} />
      <main>
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default Home;
