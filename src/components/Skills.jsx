import React from "react";
import TypeScript from "../assets/typescript.png";
import Javascript from "../assets/Skills-JS.png";
import Java from "../assets/java.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css-3.png";
import ReactImg from "../assets/React-icon.svg.png";
import Skill from "./ui/Skill";

function Skills() {
  return (
    <section id="skills">
      <div className="skills__container">
        <h2 className="skills__header">Skills</h2>
        <div className="languages__container">
          <Skill skillImg={TypeScript} language={"Typescript"} />
          <Skill skillImg={Javascript} language={"Javascript"} />
          <Skill skillImg={ReactImg} language={"React"} />
          <Skill skillImg={CSS} language={"CSS"} />
          <Skill skillImg={HTML} language={"HTML"} />
          <Skill skillImg={Java} language={"Java"} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
